export function isTauri() {
    return !!(window as any).__TAURI__;
}
