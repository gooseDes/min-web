import { useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import styles from "./AuthPage.module.scss";

function AuthPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.contentPanel}>
                <h1>Welcome!</h1>
                <Divider />
                <div className={styles.form}>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className={styles.button} onClick={() => navigate("/", { viewTransition: true })}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
