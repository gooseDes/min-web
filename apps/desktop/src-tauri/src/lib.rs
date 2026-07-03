use tauri::image::Image;
use tauri::menu::{IconMenuItemBuilder, Menu, MenuItem, PredefinedMenuItem};
use tauri::path::BaseDirectory;
use tauri::tray::{MouseButton, TrayIconBuilder, TrayIconEvent};
use tauri::Manager;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_notification::init())
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

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
