import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";

export default defineConfig({
    plugins: [
        react(),
        patchCssModules({
            generateSourceTypes: true,
            declarationMap: true,
        }),
    ],
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@pages": path.resolve(__dirname, "./src/pages"),
        },
    },
    build: {
        target: "es2022",
    },
});
