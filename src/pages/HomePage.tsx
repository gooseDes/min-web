import apiClient from "@/client";
import Divider from "@/components/Divider";
import ChatsContainer, { type ChatsContainerHandle } from "@/components/HomePage/ChatsContainer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    const chatsContainerRef = useRef<ChatsContainerHandle>(null);

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

    return (
        <div className={styles.main}>
            <div className={styles.leftPanel}>
                <h1>Chats</h1>
                <Divider />
                <ChatsContainer ref={chatsContainerRef} />
            </div>
            <div className={styles.contentPanel}>
                <Link to="/auth" viewTransition>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
