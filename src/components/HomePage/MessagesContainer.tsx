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

    return (
        <Virtuoso
            className={styles.container}
            style={{ width: "100%", height: `${props.height ?? 500}px` }}
            data={messages}
            itemContent={(_index, msg) => (
                <p>
                    {msg.sender.username}: {msg.content}
                </p>
            )}
        />
    );
}

export default MessagesContainer;
