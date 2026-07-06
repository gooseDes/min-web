import apiClient from "@/client";
import { parseMessageContent } from "@/utils";
import Icon from "@components/Icon";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "@hooks/useLocalStorage";
import type { MessageData, MessageDataWithSender, UserData } from "@min/api-client";
import { dateToString } from "@min/api-client/utils";
import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import styles from "./Message.module.scss";

export interface MessageProps {
    msg: MessageDataWithSender;
    type?: "header" | "regular";
    className?: string;
    shown?: boolean;
    animDelay?: number;
}

const Message = memo(function Message(props: MessageProps) {
    const { msg, type = "header", className = "", shown = false } = props;

    const [user] = useLocalStorage("user");
    const [replyingToMessage, setReplyingToMessage] = useState<MessageData | null>(null);
    const [replyingToSender, setReplyingToSender] = useState<UserData | null>(null);

    const content = parseMessageContent(msg.content);
    const side = user.id === msg.sender.id ? "right" : "left";

    useEffect(() => {
        const fetchReply = async () => {
            if (content.isReply) {
                const messageRes = await apiClient.fetchMessage({ messageId: content.replyingToId });
                if (messageRes.success) {
                    setReplyingToMessage(messageRes.message);
                    const senderRes = await apiClient.fetchUser({ userId: messageRes.message.senderId });
                    if (senderRes.success) {
                        setReplyingToSender(senderRes.user);
                    }
                }
            }
        };
        fetchReply();
    }, [content.isReply, content.replyingToId]);

    return (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: shown ? 1 : 0 }}
                exit={{ opacity: 0 }}
                className={`${styles.container} ${side === "left" ? styles.containerLeft : styles.containerRight} ${className}`}
            >
                <motion.img
                    src={`${import.meta.env.MIN_API_URL}/avatars/${msg.sender.avatar}.webp`}
                    alt=""
                    className={styles.senderAvatar}
                    style={{ display: type === "header" ? "block" : "none" }}
                    animate={{ scale: shown ? 1 : 0, opacity: shown ? 1 : 0 }}
                />
                <motion.div
                    className={`${styles.message} ${side === "left" ? styles.left : styles.right}`}
                    animate={{ translateX: shown ? 0 : side === "left" ? -200 : 200, scale: shown ? 1 : 0 }}
                >
                    <p className={styles.senderName} style={{ display: type === "header" ? "block" : "none" }}>
                        {msg.sender.username}
                    </p>
                    <div className={styles.replyContainer} style={{ display: content.isReply ? "flex" : "none" }}>
                        <Icon icon={faReply} size={12} />
                        <p>{`${replyingToSender?.username || "Idk"}: ${replyingToMessage?.content || "Loading..."}`}</p>
                    </div>
                    <p className={styles.text}>{content.text}</p>
                    <p className={styles.sentAt}>{dateToString(msg.sentAt, "en-US", false)}</p>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
});

export default Message;
