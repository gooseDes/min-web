import apiClient from "@/client";
import Divider from "@components/Divider";
import Icon from "@components/Icon";
import { faArrowLeft, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "@hooks/useTranslation";
import { addChatToContainer } from "@services/appControlService";
import { closeCreateChatPopup } from "@services/popupService";
import { AnimatePresence, motion } from "framer-motion";
import { useImperativeHandle, useState, type Ref } from "react";
import styles from "./CreateChatPopup.module.scss";

export interface CreateChatPopupHandle {
    open: () => void;
    close: () => void;
}

export interface CreateChatPopupProps {
    ref?: Ref<CreateChatPopupHandle>;
}

function CreateChatPopup(props: CreateChatPopupProps) {
    const { ref } = props;

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    const [username, setUsername] = useState<string>("");

    const handleSubmit = async () => {
        const targetUsername = username.trim();
        if (targetUsername) {
            const res = await apiClient.createChat({ targetUsername });
            if (res.success) {
                setUsername("");
                closeCreateChatPopup();
                addChatToContainer(res.chat);
            } else {
                alert(res.message);
            }
        } else {
            alert("Username is required");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId="add_chat"
                    className={styles.container}
                >
                    <div className={styles.header}>
                        <Icon icon={faPlus} size={32} />
                        <h1>{t.create_chat}</h1>
                    </div>
                    <Divider />
                    <div className={styles.content}>
                        <p>{t.enter_username}</p>
                        <form
                            className={styles.form}
                            onSubmit={e => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                onClick={closeCreateChatPopup}
                            >
                                <Icon icon={faArrowLeft} size={24} />
                            </motion.button>
                            <input
                                type="text"
                                placeholder={t.username_placeholder}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit">
                                <Icon icon={faCheck} size={24} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default CreateChatPopup;
