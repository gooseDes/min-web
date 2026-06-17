import apiClient from "@/client";
import ClickableProfile from "@components/ClickableProfile";
import Divider from "@components/Divider";
import ChatsContainer, { type ChatsContainerHandle } from "@components/HomePage/ChatsContainer";
import MessageInput from "@components/HomePage/MessageInput";
import MessagesContainer, { type MessagesContainerHandle } from "@components/HomePage/MessagesContainer";
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
    const messagesContainerRef = useRef<MessagesContainerHandle>(null);
    const leftPartRef = useRef<HTMLDivElement>(null);
    const contentPanelRef = useRef<HTMLDivElement>(null);
    const [openedChat, setOpenedChat] = useState<ChatData | null>(null);
    const [contentPanelHeight, setContentPanelHeight] = useState<number>(0);

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

        const observer = new ResizeObserver(([entry]) => {
            setContentPanelHeight(entry.contentRect.height);
        });

        observer.observe(contentPanelRef.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    async function openChat(chat: ChatData) {
        leftPartRef.current?.classList.add(styles.mobileHidden);
        setOpenedChat(chat);
        const messagesRes = await apiClient.fetchChatMessages({ chatId: chat.id });
        if (messagesRes.success) {
            messagesContainerRef.current?.setMessages(messagesRes.messages);
        }
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
                        initial={{ translateY: -100 }}
                        animate={{ translateY: 0 }}
                        exit={{ translateY: 100 }}
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
                <motion.div
                    layout
                    transition={{ layout: { type: "spring" } }}
                    ref={contentPanelRef}
                    className={styles.contentPanel}
                >
                    {openedChat && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <MessagesContainer ref={messagesContainerRef} height={contentPanelHeight} />
                        </motion.div>
                    )}
                </motion.div>
                {openedChat && <MessageInput />}
            </div>
        </div>
    );
}

export default HomePage;
