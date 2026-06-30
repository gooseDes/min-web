import IconButton from "@components/IconButton";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useCallback, useEffect, useImperativeHandle, useState, type Ref } from "react";
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

    const onChangeText = useCallback((text: string) => {
        setValue(text);
    }, []);

    const send = useCallback(() => {
        onSend?.(prefix + value);
        setPrefix("");
        setValue("");
    }, [prefix, value, onSend]);

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
                <IconButton className={styles.button} icon={faPaperclip} size={24} />
                <input
                    className={styles.input}
                    placeholder="Your message..."
                    onChange={e => onChangeText(e.target.value)}
                    value={value}
                />
                <IconButton className={styles.button} icon={faPaperPlane} size={24} onClick={send} />
            </div>
        </motion.div>
    );
}

export default MessageInput;
