import CreateChatPopup from "@components/HomePage/CreateChatPopup";
import { TranslationProvider } from "@contexts/TranslationProvider";
import useTranslation from "@hooks/useTranslation";
import { rootLayoutRef } from "@services/appControlService";
import { swRegistration } from "@services/otherRefs";
import { createChatPopupRef } from "@services/popupService";
import { lazy, useEffect, useImperativeHandle, useState, type Ref } from "react";
import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { initSocket } from "./client";
import MorphThing from "./components/MorphThing";
import styles from "./index.module.scss";
import { morphThingRef } from "./services/morphService";
import Translation from "./translation";
import { isTauri } from "./utils";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

export interface RootLayoutHandle {
    setIsBlurred: (isBlurred: boolean) => void;
}

export interface RootLayoutProps {
    ref: Ref<RootLayoutHandle>;
}

function RootLayout(props: RootLayoutProps) {
    const { ref } = props;

    const { changeLanguage } = useTranslation();
    const [isBlurred, setIsBlurred] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        setIsBlurred: (isBlurred: boolean) => setIsBlurred(isBlurred),
    }));

    useEffect(() => {
        initSocket();

        if (!isTauri() && "serviceWorker" in navigator) {
            const registerSW = () => {
                navigator.serviceWorker
                    .register(`/sw.js?apiUrl=${import.meta.env.MIN_API_URL}`)
                    .then(reg => {
                        swRegistration.current = reg;
                        console.log("Service Worker registered successfully:", reg.scope);
                    })
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

    useEffect(() => {
        Translation.init();
        changeLanguage(Translation.lang);
    }, [changeLanguage]);

    return (
        <div className="app-container">
            <main className={styles.appContent}>
                <div className={`${styles.blurrable} ${isBlurred ? styles.blurred : ""}`}>
                    <Outlet />
                </div>
                <CreateChatPopup ref={createChatPopupRef} />
                <MorphThing ref={morphThingRef} />
            </main>
        </div>
    );
}

const createRouter = isTauri() ? createHashRouter : createBrowserRouter;

const router = createRouter([
    {
        path: "/",
        element: <RootLayout ref={rootLayoutRef} />,
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
