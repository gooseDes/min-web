import IconButton from "@components/IconButton";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "@hooks/useTranslation";
import styles from "./UserPanelButton.module.scss";

function ChangeLanguageButton() {
    const { changeLanguage } = useTranslation();

    return (
        <IconButton
            onClick={() => changeLanguage()}
            className={styles.iconButton}
            icon={faEarthAmericas}
            size={24}
            layoutId="user-panel-change-lang-button"
        />
    );
}

export default ChangeLanguageButton;
