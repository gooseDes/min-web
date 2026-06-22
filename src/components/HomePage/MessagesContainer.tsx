import useLocalStorage from "@hooks/useLocalStorage";
import type { MessageDataWithSender } from "@min/api-client";
import { dateToString } from "@min/api-client/utils";
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
    height?: number;
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
            virtuosoRef.current?.scrollToIndex({
                index: "LAST",
                align: "end",
                behavior: "auto",
            });
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
        <Virtuoso
            ref={virtuosoRef}
            className={styles.container}
            style={{ width: "100%", height: `${props.height ?? 500}px` }}
            data={messages}
            itemContent={renderItem}
            alignToBottom={true}
            followOutput="smooth"
            initialTopMostItemIndex={messages.length - 1}
            components={{
                Scroller: ({ children, ...props }) => (
                    <div {...props} className={styles.virtuosoScroll}>
                        {children}
                    </div>
                ),
            }}
        />
    );
});

export default MessagesContainer;
