import type { MessageDataWithSender } from "@min/api-client";
import { useImperativeHandle, useState, type Ref } from "react";
import { Virtuoso } from "react-virtuoso";
import styles from "./MessagesContainer.module.scss";

export interface MessagesContainerHandle {
    setMessages: (messages: MessageDataWithSender[]) => void;
    show: () => void;
}

export interface MessagesContainerProps {
    ref?: Ref<MessagesContainerHandle>;
    height?: number;
}

function MessagesContainer(props: MessagesContainerProps) {
    const { ref } = props;

    const [messages, setMessages] = useState<MessageDataWithSender[]>([]);

    useImperativeHandle(ref, () => ({
        setMessages: (msgs: MessageDataWithSender[]) => {
            setMessages(msgs);
        },
        show: () => {},
    }));

    const renderItem = (_index: number, msg: MessageDataWithSender) => (
        <p style={{ margin: 0, padding: "8px" }}>
            {msg.sender.username}: {msg.content}
        </p>
    );

    return (
        <Virtuoso
            className={styles.container}
            style={{ width: "100%", height: `${props.height ?? 500}px` }}
            data={messages}
            itemContent={renderItem}
        />
    );
}

export default MessagesContainer;
