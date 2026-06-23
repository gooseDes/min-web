import { memo } from "react";
import styles from "./Message.module.scss";

export interface MessageProps {
    text?: string;
    side?: "left" | "right";
    type?: "header" | "regular";
    senderName?: string;
    senderAvatar?: string;
    sentAt?: string;
}

const Message = memo(function Message(props: MessageProps) {
    const {
        text = "Unknown",
        side = "left",
        senderName = "Unknown",
        senderAvatar,
        sentAt = "some time ago",
        type = "header",
    } = props;

    return (
        <div
            style={{ padding: "8px", margin: 0 }}
            className={`${styles.container} ${side === "left" ? styles.containerLeft : styles.containerRight}`}
        >
            <img
                src={senderAvatar}
                alt=""
                className={styles.senderAvatar}
                style={{ display: type === "header" ? "none" : "block" }}
            />
            <div className={`${styles.message} ${side === "left" ? styles.left : styles.right}`}>
                <p className={styles.senderName}>{senderName}</p>
                <p className={styles.text}>{text}</p>
                <p className={styles.sentAt}>{sentAt}</p>
            </div>
        </div>
    );
});

export default Message;
