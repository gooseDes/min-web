import useLocalStorage from "@hooks/useLocalStorage";
import type { MessageDataWithSender } from "@min/api-client";
import { dateToString } from "@min/api-client/utils";
import { motion } from "framer-motion";
import { useImperativeHandle, useRef, useState, type Ref } from "react";
import { flushSync } from "react-dom";
import Message from "./Message";
import styles from "./MessagesContainer.module.scss";

type ListMessageData = MessageDataWithSender & { shown: boolean; type: "header" | "regular" };

export interface MessagesContainerHandle {
    clearMessages: () => void;
    setMessages: (messages: MessageDataWithSender[]) => Promise<void>;
    addMessage: (message: MessageDataWithSender) => void;
    removeMessage: (messageId: number) => void;
}

export interface MessagesContainerProps {
    ref?: Ref<MessagesContainerHandle>;
}

function MessagesContainer(props: MessagesContainerProps) {
    const { ref } = props;

    const [user] = useLocalStorage("user");

    const [messages, setMessages] = useState<ListMessageData[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationProgress, setAnimationProgress] = useState<number>(0);

    function isAtBottom() {
        if (!containerRef.current) return false;

        return (
            Math.abs(
                containerRef.current?.scrollHeight - containerRef.current?.scrollTop - containerRef.current?.clientHeight,
            ) < 200
        );
    }

    useImperativeHandle(ref, () => ({
        clearMessages: () => {
            setMessages([]);
            setAnimationProgress(0);
        },
        setMessages: async (msgs: MessageDataWithSender[]) => {
            const newMessages: ListMessageData[] = [];
            msgs.forEach((msg, index) => {
                let type: "header" | "regular";

                if (index === 0) type = "header";
                else type = msgs[index - 1].sender.id !== msg.sender.id ? "header" : "regular";

                newMessages.push({ shown: true, type: type, ...msg });
            });
            flushSync(() => setMessages(newMessages));
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
            for (let i = 0; i < 15; i++) {
                setTimeout(() => setAnimationProgress(prev => prev + 1), i * 50);
            }
        },
        addMessage: (msg: MessageDataWithSender) => {
            if (!containerRef.current) return;
            flushSync(() => setMessages(prev => [...prev, { shown: true, type: "header", ...msg }]));
            if (isAtBottom()) {
                containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
            }
        },
        removeMessage: (msgId: number) => {
            flushSync(() => setMessages(prev => prev.filter(m => m.id !== msgId)));
            if (isAtBottom()) {
                containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
            }
        },
    }));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.container}
            ref={containerRef}
        >
            {messages.map((msg, index) => {
                const indexFromBottom = messages.length - index - 1;
                return (
                    <Message
                        key={msg.id}
                        side={msg.sender.id === user.id ? "right" : "left"}
                        text={msg.content}
                        senderName={msg.sender.username === user.username ? "You" : msg.sender.username}
                        senderAvatar={`${import.meta.env.MIN_API_URL}/avatars/${msg.sender.avatar}.webp`}
                        sentAt={dateToString(msg.sentAt, "en-US", false)}
                        type={msg.type}
                        className={`message-${msg.id}`}
                        shown={animationProgress > indexFromBottom || indexFromBottom >= 15}
                    />
                );
            })}
        </motion.div>
    );
}

export default MessagesContainer;
