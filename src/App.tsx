import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { initSocket } from "./client";
import MorphThing from "./components/MorphThing";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { morphThingRef } from "./services/morphService";

function RootLayout() {
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
