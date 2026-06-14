/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MIN_API_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
