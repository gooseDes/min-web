import apiClient, { initSocket } from "@/client";
import Divider from "@components/Divider";
import useLocalStorage from "@hooks/useLocalStorage";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.scss";

function AuthPage() {
    const [, setUser] = useLocalStorage("user");
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

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

    return (
        <div className={styles.main}>
            <div className={styles.contentPanel}>
                <h1>Welcome!</h1>
                <Divider />
                <div className={styles.form}>
                    <input type="text" name="email" placeholder="Email" ref={emailInputRef} />
                    <input type="password" name="password" placeholder="Password" ref={passwordInputRef} />
                    <button className={styles.button} onClick={handleSignIn}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
