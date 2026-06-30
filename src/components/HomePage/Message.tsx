import { animate, motion, useMotionValue } from "framer-motion";
import { memo, useEffect } from "react";
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

    const opacity = useMotionValue(shown ? 1 : 0);
    const translateX = useMotionValue(shown ? 0 : side === "left" ? -200 : 200);
    const scale = useMotionValue(shown ? 1 : 0.5);

    useEffect(() => {
        const opacityAnim = animate(opacity, shown ? 1 : 0, {});
        const translateXAnim = animate(translateX, shown ? 0 : side === "left" ? -200 : 200, {
            type: "spring",
            damping: 15,
            stiffness: 250,
        });
        const scaleAnim = animate(scale, shown ? 1 : 0.5, {
            type: "spring",
            damping: 15,
            stiffness: 250,
        });

        return () => {
            opacityAnim.stop();
            translateXAnim.stop();
            scaleAnim.stop();
        };
    }, [shown, opacity, translateX, scale, side]);

    return (
        <motion.div
            style={{ opacity }}
            className={`${styles.container} ${side === "left" ? styles.containerLeft : styles.containerRight} ${className}`}
        >
            <img
                src={senderAvatar}
                alt=""
                className={styles.senderAvatar}
                style={{ display: type === "header" ? "block" : "none" }}
            />
            <motion.div
                className={`${styles.message} ${side === "left" ? styles.left : styles.right}`}
                style={{ translateX, scale }}
            >
                <p className={styles.senderName} style={{ display: type === "header" ? "block" : "none" }}>
                    {senderName}
                </p>
                <p className={styles.text}>{text}</p>
                <p className={styles.sentAt}>{sentAt}</p>
            </motion.div>
        </motion.div>
    );
});

export default Message;
