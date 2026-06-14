import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.main}>
            <div className={styles.leftPanel}>
                <p>test</p>
                <Link to="/auth" viewTransition>
                    Login
                </Link>
            </div>
            <div className={styles.contentPanel}>
                <p>test</p>
            </div>
        </div>
    );
}

export default HomePage;
