import type { ChatData } from "@min/api-client";
import { stagger, useAnimate } from "framer-motion";
import { useImperativeHandle, useState, type Ref } from "react";
import { flushSync } from "react-dom";
import ClickableProfile from "../ClickableProfile";
import styles from "./ChatsContainer.module.scss";

export interface ChatsContainerHandle {
    setChats: (chats: ChatData[]) => void;
    show: () => Promise<void>;
}

export interface ChatsContainerProps {
    ref?: Ref<ChatsContainerHandle>;
}

function ChatsContainer(props: ChatsContainerProps) {
    const [scope, animate] = useAnimate();
    const [chats, setChats] = useState<ChatData[]>([]);
    const { ref } = props;

    useImperativeHandle(ref, () => ({
        setChats: (chats: ChatData[]) => {
            flushSync(() => setChats(chats));
        },
        show: async () => {
            await animate(".chatItem", { opacity: 0, translateX: -200, scale: 0 }, { duration: 0 });
            animate(".chatItem", { opacity: 1 }, { delay: stagger(0.05) });
            await animate(
                ".chatItem",
                { translateX: 0, scale: 1 },
                { type: "spring", damping: 15, stiffness: 250, delay: stagger(0.05) },
            );
        },
    }));

    return (
        <div className={styles.container} ref={scope}>
            {chats.map(chat => (
                <ClickableProfile
                    key={chat.id}
                    className="chatItem"
                    style={{ opacity: 0 }}
                    image={`${import.meta.env.MIN_API_URL}/avatars/${
                        chat.participants?.find(participant => (participant?.id || -1) !== 1)?.avatar || "default"
                    }.webp`}
                    text={chat.name}
                    isInList={true}
                />
            ))}
        </div>
    );
}

export default ChatsContainer;
