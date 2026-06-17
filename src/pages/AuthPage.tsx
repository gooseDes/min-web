import apiClient, { initSocket } from "@/client";
import Divider from "@components/Divider";
import FlatSelector from "@components/FlatSelector";
import useLocalStorage from "@hooks/useLocalStorage";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.scss";

function AuthPage() {
    const [, setUser] = useLocalStorage("user");
    const navigate = useNavigate();

    const usernameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

    const [mode, setMode] = useState<"signin" | "signup">("signin");

    async function handleSignIn() {
        if (!emailInputRef.current || !passwordInputRef.current) return;
        const res = await apiClient.login(emailInputRef.current.value, passwordInputRef.current.value);
        if (res.success) {
            localStorage.setItem("token", res.token);
            initSocket();
            const user = await apiClient.fetchUser({ userId: res.user.id });
            if (user.success) setUser(user.user);
            await navigate("/", { viewTransition: true });
        } else {
            alert(res.message);
        }
    }

    async function handleSignUp() {
        if (
            !usernameInputRef.current ||
            !emailInputRef.current ||
            !passwordInputRef.current ||
            !confirmPasswordInputRef.current
        )
            return;
        if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
            alert("Passwords do not match");
            return;
        }
        const res = await apiClient.register(
            usernameInputRef.current.value,
            emailInputRef.current.value,
            passwordInputRef.current.value,
        );
        if (res.success) {
            localStorage.setItem("token", res.token);
            initSocket();
            const user = await apiClient.fetchUser({ userId: res.user.id });
            if (user.success) setUser(user.user);
            await navigate("/", { viewTransition: true });
        } else {
            alert(res.message);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.contentPanel}>
                <h1>Welcome!</h1>
                <Divider />
                <FlatSelector
                    options={["Sign In", "Sign Up"]}
                    onSelect={option => setMode(option === "Sign In" ? "signin" : "signup")}
                />
                <div className={styles.form}>
                    <AnimatePresence>
                        {mode === "signup" && (
                            <motion.input
                                initial={{ opacity: 0, translateX: -50 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                exit={{ opacity: 0, translateX: 50 }}
                                layout
                                type="text"
                                name="username"
                                key="username_input"
                                placeholder="Username"
                                ref={usernameInputRef}
                            />
                        )}
                        <motion.input
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: 50 }}
                            layout
                            type="text"
                            name="email"
                            key="email_input"
                            placeholder="Email"
                            ref={emailInputRef}
                        />
                        <motion.input
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: 50 }}
                            layout
                            type="password"
                            name="password"
                            key="password_input"
                            placeholder="Password"
                            ref={passwordInputRef}
                        />
                        {mode === "signup" && (
                            <motion.input
                                initial={{ opacity: 0, translateX: -50 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                exit={{ opacity: 0, translateX: 50 }}
                                layout
                                type="password"
                                name="confirmPassword"
                                key="confirm_password_input"
                                placeholder="Confirm Password"
                                ref={confirmPasswordInputRef}
                            />
                        )}
                        <motion.button
                            key="sign_button"
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            exit={{ opacity: 0, translateX: 50 }}
                            layout
                            className={styles.button}
                            onClick={mode === "signup" ? handleSignUp : handleSignIn}
                        >
                            <motion.p
                                key={`sign_button_text_${mode}`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                layout
                                style={{ margin: 0 }}
                            >
                                {mode === "signup" ? "Sign Up" : "Sign In"}
                            </motion.p>
                        </motion.button>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
