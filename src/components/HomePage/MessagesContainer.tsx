import useLocalStorage from "@hooks/useLocalStorage";
import type { MessageDataWithSender } from "@min/api-client";
import { dateToString } from "@min/api-client/utils";
import { motion } from "framer-motion";
import { memo, useCallback, useImperativeHandle, useRef, useState, type Ref } from "react";
import { flushSync } from "react-dom";
import { Virtuoso, type ListItem, type VirtuosoHandle } from "react-virtuoso";
import Message from "./Message";
import styles from "./MessagesContainer.module.scss";

type ListMessageData = MessageDataWithSender & { shown: boolean; type: "header" | "regular" };

export interface MessagesContainerHandle {
    clearMessages: () => void;
    setMessages: (messages: MessageDataWithSender[]) => Promise<void>;
    addMessage: (message: MessageDataWithSender) => void;
}

export interface MessagesContainerProps {
    ref?: Ref<MessagesContainerHandle>;
}

const MessagesContainer = memo(function MessagesContainer(props: MessagesContainerProps) {
    const { ref } = props;

    const [user] = useLocalStorage("user");

    const [messages, setMessages] = useState<ListMessageData[]>([]);
    const virtuosoRef = useRef<VirtuosoHandle>(null);
    const resolveAnimationRef = useRef<(() => void) | null>(null);
    const targetIndexRef = useRef<number>(0);

    useImperativeHandle(ref, () => ({
        clearMessages: () => {
            setMessages([]);
        },
        setMessages: async (msgs: MessageDataWithSender[]) => {
            return new Promise(resolve => {
                resolveAnimationRef.current = resolve;
                targetIndexRef.current = msgs.length + 1; // +2 (because of fake messages) and -1

                const fakeMsg: ListMessageData = {
                    id: -1,
                    sender: { id: -1, username: "", avatar: "" },
                    content: "",
                    senderId: -1,
                    seenAt: null,
                    sentAt: new Date(),
                    isSeen: false,
                    chatId: -1,
                    shown: false,
                    type: "regular",
                };
                const newMessages: ListMessageData[] = [];
                newMessages.push(fakeMsg);
                msgs.forEach((msg, index) => {
                    let type: "header" | "regular";

                    if (index === 0) type = "header";
                    else type = msgs[index - 1].sender.id !== msg.sender.id ? "header" : "regular";

                    newMessages.push({ shown: true, type: type, ...msg });
                });
                newMessages.push(fakeMsg);
                flushSync(() => setMessages(newMessages));
                virtuosoRef.current?.scrollToIndex({ index: "LAST", align: "end", behavior: "auto" });
            });
        },
        addMessage: (msg: MessageDataWithSender) => {
            setMessages(prev => [...prev, { shown: true, type: "header", ...msg }]);
        },
    }));

    const renderItem = useCallback(
        (index: number, msg: ListMessageData) => {
            if (msg.id === -1) return <div key={`spacer-${index}`} className={styles.spacer} />;
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
                    shown={msg.shown}
                />
            );
        },
        [user],
    );

    const handleItemsRendered = useCallback((items: ListItem<ListMessageData>[]) => {
        if (items.length === 0) return;

        const lastRenderedIndex = items[items.length - 1].index;
        if (lastRenderedIndex >= targetIndexRef.current - 2) {
            requestAnimationFrame(() => {
                if (resolveAnimationRef.current) {
                    resolveAnimationRef.current();
                    resolveAnimationRef.current = null;
                }
            });
        }
    }, []);

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
                itemsRendered={handleItemsRendered}
                style={{ width: "100%", height: "100%" }}
                data={messages}
                itemContent={renderItem}
                alignToBottom={true}
                followOutput={(atBottom: boolean) => (atBottom ? "smooth" : false)}
                computeItemKey={(index, item) => (item.id === -1 ? index : item.id)}
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
