import apiClient from "@/client";
import ClickableProfile from "@components/ClickableProfile";
import Divider from "@components/Divider";
import ChatsContainer, { type ChatsContainerHandle } from "@components/HomePage/ChatsContainer";
import MessageInput from "@components/HomePage/MessageInput";
import Icon from "@components/Icon";
import IconButton from "@components/IconButton";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faListUl, faSignIn } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "@hooks/useLocalStorage";
import type { ChatData } from "@min/api-client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    const [user] = useLocalStorage("user");
    const navigate = useNavigate();
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

    function closeChat() {
        leftPartRef.current?.classList.remove(styles.mobileHidden);
        setOpenedChat(null);
    }

    return (
        <div className={styles.main}>
            <div ref={leftPartRef} className={styles.leftPart}>
                <div className={styles.chatsPanel}>
                    <div className={styles.header}>
                        <Icon icon={faComments} size={24} />
                        <h1>Chats</h1>
                    </div>
                    <Divider />
                    <ChatsContainer onClick={openChat} ref={chatsContainerRef} />
                </div>
                <div className={styles.userPanel}>
                    <ClickableProfile
                        style={{ flex: 1 }}
                        image={`${import.meta.env.MIN_API_URL}/avatars/${user.avatar}.webp`}
                        text={user.username}
                    />
                    <IconButton
                        onClick={() => navigate("/auth", { viewTransition: true })}
                        className={styles.iconButton}
                        icon={faSignIn}
                        size={24}
                    />
                </div>
            </div>
            <div className={styles.rightPart}>
                {openedChat && (
                    <motion.div
                        initial={{ translateY: -100, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        exit={{ translateY: 100, opacity: 0 }}
                        className={styles.chatHeaderPanel}
                        layout
                    >
                        <IconButton onClick={closeChat} className={styles.closeButton} icon={faListUl} size={24} />
                        {(() => {
                            const participant = openedChat.participants.filter(u => u.id !== user.id)[0];
                            return (
                                <ClickableProfile
                                    image={`${import.meta.env.MIN_API_URL}/avatars/${participant?.avatar || "default"}.webp`}
                                    text={participant?.username || "Default Chat"}
                                />
                            );
                        })()}
                    </motion.div>
                )}
                <motion.div layout transition={{ layout: { type: "spring" } }} className={styles.contentPanel}>
                    {openedChat && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
                </motion.div>
                {openedChat && <MessageInput />}
            </div>
        </div>
    );
}

export default HomePage;
