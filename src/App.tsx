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
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
