import apiClient from "@/client";
import ClickableProfile from "@components/ClickableProfile";
import Divider from "@components/Divider";
import ChatsContainer, { type ChatsContainerHandle } from "@components/HomePage/ChatsContainer";
import Icon from "@components/Icon";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "@hooks/useLocalStorage";
import type { ChatData } from "@min/api-client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    const [user] = useLocalStorage("user");
    const chatsContainerRef = useRef<ChatsContainerHandle>(null);
    const leftPartRef = useRef<HTMLDivElement>(null);
    const [openedChat, setOpenedChat] = useState<ChatData | null>(null);

    useEffect(() => {
        apiClient.fetchChats().then(res => {
            if (res.success) {
                chatsContainerRef.current?.setChats([
                    { id: 1, name: "Default Chat", type: "group", participants: [] },
                    ...res.chats,
                ]);
                chatsContainerRef.current?.show();
            }
        });
    }, []);

    function openChat(chat: ChatData) {
        leftPartRef.current?.classList.add(styles.mobileHidden);
        setOpenedChat(chat);
    }

    return (
        <div className={styles.main}>
            <div ref={leftPartRef} className={styles.leftPart}>
                <div className={styles.chatsPanel}>
                    <h1>Chats</h1>
                    <Divider />
                    <ChatsContainer onClick={openChat} ref={chatsContainerRef} />
                </div>
                <div className={styles.userPanel}>
                    <ClickableProfile
                        style={{ flex: 1 }}
                        image={`${import.meta.env.MIN_API_URL}/avatars/${user.avatar}.webp`}
                        text={user.username}
                    />
                    <Link to="/auth" viewTransition>
                        <Icon icon={faSignIn} size={24} className={styles.iconButton}></Icon>
                    </Link>
                </div>
            </div>
            <div className={styles.contentPanel}>
                {openedChat && (
                    <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        {openedChat.name}
                    </motion.h1>
                )}
            </div>
        </div>
    );
}

export default HomePage;
