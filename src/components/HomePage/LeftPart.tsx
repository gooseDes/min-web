import ClickableProfile from "@components/ClickableProfile";
import Divider from "@components/Divider";
import Icon from "@components/Icon";
import IconButton from "@components/IconButton";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import { faEarthAmericas, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@hooks/useTranslation";
import type { ChatData, UserData } from "@min/api-client";
import type { NavigateFunction } from "react-router-dom";
import type { ChatsContainerHandle } from "./ChatsContainer";
import ChatsContainer from "./ChatsContainer";
import styles from "./LeftPart.module.scss";

export interface LeftPartProps {
    user: UserData;
    navigate: NavigateFunction;
    onChatClick: (chat: ChatData) => void;
    chatsContainerRef: React.RefObject<ChatsContainerHandle | null>;
    leftPartRef: React.RefObject<HTMLDivElement | null>;
}

function LeftPart(props: LeftPartProps) {
    const { user, navigate, onChatClick, chatsContainerRef, leftPartRef } = props;

    const { t, changeLanguage } = useTranslation();

    return (
        <div ref={leftPartRef} className={styles.leftPart}>
            <div className={styles.chatsPanel}>
                <div className={styles.header}>
                    <Icon icon={faComments} size={24} />
                    <h1>{t.chats}</h1>
                </div>
                <Divider />
                <ChatsContainer onClick={onChatClick} ref={chatsContainerRef} />
            </div>
            <div className={styles.userPanel}>
                <ClickableProfile
                    style={{ flex: 1 }}
                    image={`${import.meta.env.MIN_API_URL}/avatars/${user.avatar}.webp`}
                    text={user.username}
                />
                <IconButton onClick={() => changeLanguage()} className={styles.iconButton} icon={faEarthAmericas} size={24} />
                <IconButton
                    onClick={() => navigate("/auth", { viewTransition: true })}
                    className={styles.iconButton}
                    icon={faSignIn}
                    size={24}
                />
            </div>
        </div>
    );
}

export default LeftPart;
