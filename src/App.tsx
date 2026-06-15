import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initSocket } from "./client";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/auth", element: <AuthPage /> },
]);

function App() {
    useEffect(() => {
        initSocket();

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
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
