import { ApiClient } from "@min/api-client";
import { appCacheDir, join } from "@tauri-apps/api/path";
import { BaseDirectory, writeFile } from "@tauri-apps/plugin-fs";
import { fetch } from "@tauri-apps/plugin-http";
import { sendNotification } from "@tauri-apps/plugin-notification";
import { isTauri } from "./utils";

const apiClient = new ApiClient({
    url: import.meta.env.MIN_API_URL,
});

export function initSocket() {
    const token = localStorage.getItem("token");
    if (token) {
        apiClient.initSocket(token);

        if (isTauri()) {
            apiClient.subscribeToMessages(async msg => {
                const iconUrl = `${import.meta.env.MIN_API_URL}/avatars/${msg.sender.avatar}.png`;
                const responce = await fetch(iconUrl, { method: "GET" });
                const buffer = await responce.arrayBuffer();
                const bytes = new Uint8Array(buffer);

                const tempIconName = `cached_notif_icon_${msg.sender.avatar}.png`;

                await writeFile(tempIconName, bytes, { baseDir: BaseDirectory.AppCache });

                const iconPath = await join(await appCacheDir(), tempIconName);

                sendNotification({
                    title: msg.sender.username,
                    body: msg.content,
                    icon: iconPath,
                });
            });
        }
    }
}

export default apiClient;
