import { TranslationProvider } from "@contexts/TranslationProvider";
import { useTranslation } from "@hooks/useTranslation";
import { lazy, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { initSocket } from "./client";
import MorphThing from "./components/MorphThing";
import { morphThingRef } from "./services/morphService";
import Translation from "./translation";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function RootLayout() {
    const { changeLanguage } = useTranslation();

    useEffect(() => {
        initSocket();
        Translation.init();
        changeLanguage(Translation.lang);

        if ("serviceWorker" in navigator) {
            const registerSW = () => {
                navigator.serviceWorker
                    .register("/sw.js")
                    .then(reg => console.log("Service Worker registered successfully:", reg.scope))
                    .catch(err => console.error("Service Worker registration failed:", err));
            };

            if (document.readyState === "complete") {
                registerSW();
            } else {
                window.addEventListener("load", registerSW);
                return () => window.removeEventListener("load", registerSW);
            }
        }
    }, [changeLanguage]);

    return (
        <div className="app-container">
            <main className="content">
                <Outlet />
                <MorphThing ref={morphThingRef} />
            </main>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "auth", element: <AuthPage /> },
        ],
    },
]);

function App() {
    return (
        <TranslationProvider>
            <RouterProvider router={router} />
        </TranslationProvider>
    );
}

export default App;
