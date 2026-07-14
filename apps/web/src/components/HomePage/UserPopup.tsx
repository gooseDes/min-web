import type { PopupHandle } from "@components/Popup";
import Popup from "@components/Popup";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "@hooks/useLocalStorage";
import useTranslation from "@hooks/useTranslation";
import { closeUserPopup } from "@services/popupService";
import { motion } from "framer-motion";
import { type Ref } from "react";
import ChangeLanguageButton from "./UserPanelButtons/ChangeLanguageButton";
import SignInButton from "./UserPanelButtons/SignInButton";
import styles from "./UserPopup.module.scss";

export interface UserPopupProps {
    ref?: Ref<PopupHandle>;
}

function UserPopup(props: UserPopupProps) {
    const { ref } = props;

    const { t } = useTranslation();
    const [user] = useLocalStorage("user");

    return (
        <Popup
            width={400}
            height={600}
            x="left"
            y="bottom"
            layoutId="user-panel-container"
            title={t.profile}
            icon={faUserCircle}
            closeCallback={closeUserPopup}
            ref={ref}
        >
            <div className={styles.content}>
                <div className={styles.buttonsContainer}>
                    <ChangeLanguageButton />
                    <div style={{ flex: 1 }} />
                    <SignInButton />
                </div>
                <motion.img
                    className={styles.avatar}
                    layoutId="user-panel-avatar"
                    src={`${import.meta.env.MIN_API_URL}/avatars/${user.avatar}.webp`}
                />
                <motion.h2 layoutId="user-panel-username">{user.username}</motion.h2>
            </div>
        </Popup>
    );
}

export default UserPopup;
