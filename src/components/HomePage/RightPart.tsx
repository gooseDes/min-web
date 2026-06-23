import ClickableProfile from "@components/ClickableProfile";
import IconButton from "@components/IconButton";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import type { ChatData, UserData } from "@min/api-client";
import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import MessageInput from "./MessageInput";
import type { MessagesContainerHandle } from "./MessagesContainer";
import MessagesContainer from "./MessagesContainer";
import styles from "./RightPart.module.scss";

export interface RightPartProps {
    openedChat: ChatData | null;
    user: UserData;
    closeChat: () => void;
    messagesContainerRef: React.RefObject<MessagesContainerHandle | null>;
}

const RightPart = memo(function RightPart(props: RightPartProps) {
    const { openedChat, user, closeChat, messagesContainerRef } = props;

    const participant = useMemo(
        () => openedChat?.participants.find(participant => participant.id !== user.id),
        [openedChat, user.id],
    );

    return (
        <div className={styles.rightPart}>
            {openedChat && (
                <motion.div
                    initial={{ translateY: -100 }}
                    animate={{ translateY: 0 }}
                    exit={{ translateY: 100 }}
                    className={styles.chatHeaderPanel}
                    layout
                >
                    <IconButton onClick={closeChat} className={styles.closeButton} icon={faListUl} size={24} />
                    <ClickableProfile
                        image={`${import.meta.env.MIN_API_URL}/avatars/${participant?.avatar || "default"}.webp`}
                        text={participant?.username || "Default Chat"}
                    />
                </motion.div>
            )}
            <motion.div layout transition={{ layout: { type: "spring" } }} className={styles.contentPanel}>
                {openedChat && <MessagesContainer ref={messagesContainerRef} />}
            </motion.div>
            {openedChat && <MessageInput />}
        </div>
    );
});

export default RightPart;
