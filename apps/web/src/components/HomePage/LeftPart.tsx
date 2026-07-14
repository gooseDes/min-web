import Divider from "@components/Divider";
import Icon from "@components/Icon";
import { faComments } from "@fortawesome/free-regular-svg-icons/faComments";
import useTranslation from "@hooks/useTranslation";
import type { ChatData } from "@min/api-client";
import { chatsContainerRef } from "@services/appControlService";
import ChatsContainer from "./ChatsContainer";
import CreateChatButton from "./CreateChatButton";
import styles from "./LeftPart.module.scss";
import UserPanel from "./UserPanel";

export interface LeftPartProps {
    onChatClick: (chat: ChatData) => void;
    leftPartRef: React.RefObject<HTMLDivElement | null>;
}

function LeftPart(props: LeftPartProps) {
    const { onChatClick, leftPartRef } = props;

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
            <UserPanel />
        </div>
    );
}

export default LeftPart;
