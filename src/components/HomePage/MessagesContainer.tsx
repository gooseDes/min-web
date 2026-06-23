import useLocalStorage from "@hooks/useLocalStorage";
import type { MessageDataWithSender } from "@min/api-client";
import { dateToString } from "@min/api-client/utils";
import { motion } from "framer-motion";
import { memo, useCallback, useImperativeHandle, useRef, useState, type Ref } from "react";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import Message from "./Message";
import styles from "./MessagesContainer.module.scss";

export interface MessagesContainerHandle {
    setMessages: (messages: MessageDataWithSender[]) => void;
    show: () => void;
}

export interface MessagesContainerProps {
    ref?: Ref<MessagesContainerHandle>;
}

const MessagesContainer = memo(function MessagesContainer(props: MessagesContainerProps) {
    const { ref } = props;

    const [user] = useLocalStorage("user");

    const [messages, setMessages] = useState<MessageDataWithSender[]>([]);
    const virtuosoRef = useRef<VirtuosoHandle>(null);

    useImperativeHandle(ref, () => ({
        setMessages: (msgs: MessageDataWithSender[]) => {
            const fakeMsg = {
                id: -1,
                sender: { id: -1, username: "", avatar: "" },
                content: "",
                senderId: -1,
                seenAt: null,
                sentAt: new Date(),
                isSeen: false,
                chatId: -1,
            };
            setMessages([fakeMsg, ...msgs, fakeMsg]);
            requestAnimationFrame(() =>
                virtuosoRef.current?.scrollToIndex({
                    index: "LAST",
                    align: "start",
                    behavior: "auto",
                }),
            );
        },
        show: () => {},
    }));

    const renderItem = useCallback(
        (index: number, msg: MessageDataWithSender) => {
            if (msg.id === -1) return <div key={`spacer-${index}`} className={styles.spacer} />;
            const prevMessage = messages[index - 1];
            return (
                <Message
                    key={msg.id}
                    side={msg.sender.id === user.id ? "right" : "left"}
                    text={msg.content}
                    senderName={msg.sender.username === user.username ? "You" : msg.sender.username}
                    senderAvatar={`${import.meta.env.MIN_API_URL}/avatars/${msg.sender.avatar}.webp`}
                    sentAt={dateToString(msg.sentAt, "en-US", false)}
                    type={prevMessage.sender.id === msg.sender.id ? "regular" : "header"}
                />
            );
        },
        [messages, user],
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: "100%", height: "100%" }}
        >
            <Virtuoso
                ref={virtuosoRef}
                className={styles.container}
                style={{ width: "100%", height: "100%" }}
                data={messages}
                itemContent={renderItem}
                alignToBottom={true}
                followOutput="smooth"
                components={{
                    Scroller: ({ children, ...props }) => (
                        <div {...props} className={styles.virtuosoScroll}>
                            {children}
                        </div>
                    ),
                }}
            />
        </motion.div>
    );
});

export default MessagesContainer;
