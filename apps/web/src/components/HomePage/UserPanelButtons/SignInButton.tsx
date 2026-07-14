import IconButton from "@components/IconButton";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import useNavigateMin from "@hooks/useNavigation";
import styles from "./UserPanelButton.module.scss";

function SignInButton() {
    const navigate = useNavigateMin();

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
