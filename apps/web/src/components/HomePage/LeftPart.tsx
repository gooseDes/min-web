import clickableProfileStyles from "@components/ClickableProfile.module.scss";
import Divider from "@components/Divider";
import Icon from "@components/Icon";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import useTranslation from "@hooks/useTranslation";
import type { ChatData, UserData } from "@min/api-client";
import { chatsContainerRef } from "@services/appControlService";
import { openUserPopup } from "@services/popupService";
import { motion } from "framer-motion";
import ChatsContainer from "./ChatsContainer";
import CreateChatButton from "./CreateChatButton";
import styles from "./LeftPart.module.scss";
import ChangeLanguageButton from "./UserPanelButtons/ChangeLanguageButton";
import SignInButton from "./UserPanelButtons/SignInButton";

export interface LeftPartProps {
    user: UserData;
    onChatClick: (chat: ChatData) => void;
    leftPartRef: React.RefObject<HTMLDivElement | null>;
}

function LeftPart(props: LeftPartProps) {
    const { user, onChatClick, leftPartRef } = props;

    const { t } = useTranslation();

    return (
        <div ref={leftPartRef} className={styles.leftPart}>
            <div className={styles.chatsPanel}>
                <div className={styles.header}>
                    <Icon icon={faComments} size={24} />
                    <h1>{t.chats}</h1>
                </div>
                <Divider />
                <ChatsContainer onClick={onChatClick} ref={chatsContainerRef} />
                <CreateChatButton />
            </div>
            <motion.div className={styles.userPanel} layoutId="user-panel-container">
                <div className={clickableProfileStyles.container} style={{ flex: 1 }} onClick={openUserPopup}>
                    <motion.img
                        src={`${import.meta.env.MIN_API_URL}/avatars/${user.avatar}.webp`}
                        layoutId="user-panel-avatar"
                    />
                    <motion.p layoutId="user-panel-username">{user.username}</motion.p>
                </div>
                <ChangeLanguageButton />
                <SignInButton />
            </motion.div>
        </div>
    );
}

export default LeftPart;
