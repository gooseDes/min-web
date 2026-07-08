import apiClient from "@/client";
import IconButton from "@components/IconButton";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "@hooks/useTranslation";
import { motion } from "framer-motion";
import { useEffect, useImperativeHandle, useRef, useState, type Ref } from "react";
import styles from "./MessageInput.module.scss";

export interface MessageInputHandle {
    setMessagePrefix: (messagePrefix: string) => void;
}

export interface MessageInputProps {
    onTextChanged?: (text: string) => void;
    onSend?: (text: string) => void;
    ref?: Ref<MessageInputHandle>;
}

function MessageInput(props: MessageInputProps) {
    const { ref, onTextChanged, onSend, ...rest } = props;

    const { t } = useTranslation();

    const attachmentInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    const [prefix, setPrefix] = useState<string>("");
    const [value, setValue] = useState<string>("");

    //const hasPrefix = prefix.startsWith("/reply");

    useImperativeHandle(ref, () => ({
        setMessagePrefix: (messagePrefix: string) => {
            setPrefix(messagePrefix);
        },
    }));

    useEffect(() => {
        onTextChanged?.(prefix + value);
    }, [prefix, value, onTextChanged]);

    const send = () => {
        onSend?.(prefix + value);
        if (inputRef.current) inputRef.current.innerText = "";
        setPrefix("");
        setValue("");
    };

    const attach = () => {
        attachmentInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const res = await apiClient.attachImage(localStorage.getItem("token") ?? "", file);
        if (res.success) {
            const img = `![attachment](${import.meta.env.MIN_API_URL}${res.urls[0]})`;
            setValue(prev => (prev.trim() ? prev.trim() + "\n" + img : img));
        }
    };

    const handleInputChange = (e: React.InputEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        if (el.innerHTML === "<br>" || el.innerText.trim() === "") {
            el.innerHTML = "";
        }
        setValue(el.innerText);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    return (
        <motion.div
            className={styles.container}
            initial={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 100 }}
            layout
            {...rest}
        >
            {/*hasPrefix && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ height: "20px", gap: "4px", padding: "0 16px" }}
                >
                    <Icon icon={faReply} size={12} color={vars.secondary} />
                    <Text style={[Styles.secondaryText, { fontSize: 14 }]}>{t.replying_to}</Text>
                    <HapticPressable
                        hitSlop={16}
                        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
                        android_ripple={{ color: theme.rippleColor }}
                        onPress={() => {
                            setPrefix("");
                        }}
                    >
                        <Icon name="x" size={12} color={theme.secondaryTextColor} />
                    </HapticPressable>
                </motion.div>
            )*/}
            <div className={styles.horizontalRow}>
                <IconButton className={styles.button} icon={faPaperclip} size={24} onClick={attach} />
                <div className={styles.inputContainer}>
                    <div
                        ref={inputRef}
                        role="textbox"
                        contentEditable
                        className={styles.input}
                        onInput={handleInputChange}
                        onKeyDown={handleKeyDown}
                        data-placeholder={t.your_message}
                    />
                </div>
                <IconButton className={styles.button} icon={faPaperPlane} size={24} onClick={send} />
            </div>
            <input
                type="file"
                ref={attachmentInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
            />
        </motion.div>
    );
}

export default MessageInput;
