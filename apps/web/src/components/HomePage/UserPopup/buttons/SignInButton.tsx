import IconButton from "@components/IconButton";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import useNavigation from "@hooks/useNavigation";
import styles from "./UserPanelButton.module.scss";

function SignInButton() {
    const navigate = useNavigation();

    return (
        <IconButton
            onClick={() => navigate("auth")}
            className={styles.iconButton}
            icon={faSignIn}
            size={24}
            layoutId="user-panel-sign-in-button"
        />
    );
}

export default SignInButton;
