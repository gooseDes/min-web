import { memo } from "react";
import styles from "./Message.module.scss";

export interface MessageProps {
    text?: string;
    side?: "left" | "right";
    type?: "header" | "regular";
    senderName?: string;
    senderAvatar?: string;
    sentAt?: string;
    className?: string;
    shown?: boolean;
    animDelay?: number;
}

const Message = memo(function Message(props: MessageProps) {
    const {
        text = "Unknown",
        side = "left",
        senderName = "Unknown",
        senderAvatar,
        sentAt = "some time ago",
        type = "header",
        className = "",
        shown = false,
    } = props;

    return (
        <div
            style={{ padding: "8px", margin: 0, opacity: shown ? 1 : 0 }}
            className={`${styles.container} ${side === "left" ? styles.containerLeft : styles.containerRight} ${className}`}
        >
            <img
                src={senderAvatar}
                alt=""
                className={styles.senderAvatar}
                style={{ display: type === "header" ? "block" : "none" }}
            />
            <div className={`${styles.message} ${side === "left" ? styles.left : styles.right}`}>
                <p className={styles.senderName} style={{ display: type === "header" ? "block" : "none" }}>
                    {senderName}
                </p>
                <p className={styles.text}>{text}</p>
                <p className={styles.sentAt}>{sentAt}</p>
            </div>
        </div>
    );
});

export default Message;
