use tauri::image::Image;
use tauri::menu::{IconMenuItemBuilder, Menu, MenuItem, PredefinedMenuItem};
use tauri::path::BaseDirectory;
use tauri::tray::{MouseButton, TrayIconBuilder, TrayIconEvent};
use tauri::{AppHandle, Manager};
use tauri_plugin_autostart::ManagerExt;
use tauri_plugin_updater::UpdaterExt;

async fn check_for_updates(app: AppHandle) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let updater = app.updater()?;
    if let Some(update) = updater.check().await? {
        println!(
            "New update found! Current version: {}, new version: {}",
            app.package_info().version,
            update.version
        );

        let mut downloaded = 0;

        update
            .download_and_install(
                move |chunk_length, total_length| {
                    downloaded += chunk_length;
                    if let Some(total) = total_length {
                        let percentage = (downloaded as f64 / total as f64) * 100.0;
                        println!("Download progress: {:.2}%", percentage);
                    }
                },
                move || {
                    println!("Download finished! Applying update...");
                },
            )
            .await?;

        println!("Update installed successfully! Restarting application...");

        app.restart();
    } else {
        println!("No update available.");
    }

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
    tauri::Builder::default()
        .plugin(tauri_plugin_autostart::Builder::new().build())
        .plugin(tauri_plugin_single_instance::init(|app, _, _| {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.show();
                let _ = window.set_focus();
            }
        }))
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .on_window_event(|window, event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event {
                api.prevent_close();

                let _ = window.hide();
            }
        })
        .setup(|app| {
            #[cfg(target_os = "linux")]
            {
                app.handle()
                    .plugin(tauri_plugin_notification::init())
                    .unwrap();
            }

            let handle = app.handle();

            let updater_handle = handle.clone();
            tauri::async_runtime::spawn(async move {
                if let Err(err) = check_for_updates(updater_handle).await {
                    eprintln!("Failed to check or apply update: {}", err);
                }
            });

            let app_icon = app.default_window_icon().unwrap().clone();

            let label = IconMenuItemBuilder::with_id("label", "Min Desktop")
                .icon(app_icon)
                .enabled(false)
                .build(handle)?;
            let separator = PredefinedMenuItem::separator(handle)?;
            let show_i = MenuItem::with_id(app, "show", "Show App", true, None::<&str>)?;
            let hide_i = MenuItem::with_id(app, "hide", "Hide App", true, None::<&str>)?;
            let quit_i = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

            let menu = Menu::with_items(app, &[&label, &separator, &show_i, &hide_i, &quit_i])?;

            let _tray = TrayIconBuilder::new()
                .icon(
                    Image::from_path(
                        app.path()
                            .resolve("assets/tray.png", BaseDirectory::Resource)
                            .expect("Failed to resolve tray icon path"),
                    )
                    .expect("Failed to load tray icon"),
                )
                .menu(&menu)
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "show" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.show();
                            let _ = window.set_focus();
                        }
                    }
                    "hide" => {
                        if let Some(window) = app.get_webview_window("main") {
                            let _ = window.hide();
                        }
                    }
                    "quit" => {
                        app.exit(0);
                    }
                    _ => {}
                })
                .on_tray_icon_event(|tray, event| {
                    if let TrayIconEvent::Click {
                        button: MouseButton::Left,
                        ..
                    } = event
                    {
                        let app = tray.app_handle();
                        if let Some(window) = app.get_webview_window("main") {
                            if window.is_visible().unwrap_or(false) {
                                let _ = window.hide();
                            } else {
                                let _ = window.show();
                                let _ = window.set_focus();
                            }
                        }
                    }
                })
                .build(app)?;

            #[cfg(desktop)]
            {
                let autostart_manager = app.autolaunch();
                let _ = autostart_manager.enable();
                println!(
                    "registered for autostart? {}",
                    autostart_manager.is_enabled().unwrap()
                );
            }

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
