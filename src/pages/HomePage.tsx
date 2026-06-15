import apiClient from "@/client";
import ClickableProfile from "@/components/ClickableProfile";
import Divider from "@/components/Divider";
import ChatsContainer, { type ChatsContainerHandle } from "@/components/HomePage/ChatsContainer";
import Icon from "@/components/Icon";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "@hooks/useLocalStorage";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.scss";

function HomePage() {
    const [user] = useLocalStorage("user");
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
            <div className={styles.leftPart}>
                <div className={styles.chatsPanel}>
                    <h1>Chats</h1>
                    <Divider />
                    <ChatsContainer ref={chatsContainerRef} />
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
            <div className={styles.contentPanel} />
        </div>
    );
}

export default HomePage;
