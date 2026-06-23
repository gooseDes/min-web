import apiClient from "@/client";
import { type ChatsContainerHandle } from "@components/HomePage/ChatsContainer";
import LeftPart from "@components/HomePage/LeftPart";
import { type MessagesContainerHandle } from "@components/HomePage/MessagesContainer";
import RightPart from "@components/HomePage/RightPart";
import useLocalStorage from "@hooks/useLocalStorage";
import type { ChatData } from "@min/api-client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    const [user] = useLocalStorage("user");
    const navigate = useNavigate();
    const chatsContainerRef = useRef<ChatsContainerHandle>(null);
    const messagesContainerRef = useRef<MessagesContainerHandle>(null);
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

    const openChat = useCallback(async (chat: ChatData) => {
        leftPartRef.current?.classList.add(styles.mobileHidden);
        setOpenedChat(chat);
        const messagesRes = await apiClient.fetchChatMessages({ chatId: chat.id });
        if (messagesRes.success) {
            messagesContainerRef.current?.setMessages(messagesRes.messages);
        }
    }, []);

    const closeChat = useCallback(() => {
        leftPartRef.current?.classList.remove(styles.mobileHidden);
        setOpenedChat(null);
    }, []);

    return (
        <div className={styles.main}>
            <LeftPart
                user={user}
                navigate={navigate}
                onChatClick={openChat}
                chatsContainerRef={chatsContainerRef}
                leftPartRef={leftPartRef}
            />
            <RightPart openedChat={openedChat} user={user} closeChat={closeChat} messagesContainerRef={messagesContainerRef} />
        </div>
    );
}

export default HomePage;
