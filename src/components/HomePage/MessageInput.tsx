import IconButton from "@components/IconButton";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./MessageInput.module.scss";

export interface MessageInputHandle {
    setMessagePrefix: (messagePrefix: string) => void;
}

export interface MessageInputProps extends HTMLMotionProps<"div"> {
    onTextChanged?: (text: string) => void;
    onSend?: (text: string) => void;
}

const MessageInput = forwardRef<MessageInputHandle, MessageInputProps>((props, ref) => {
    const { onTextChanged, onSend, ...rest } = props;

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

    function onChangeText(text: string) {
        setValue(text);
    }

    function send() {
        onSend?.(prefix + value);
        setPrefix("");
        setValue("");
    }

    /*
    async function attach() {
        const result = await launchImageLibrary({ mediaType: "photo", selectionLimit: 1 });
        if (result.didCancel) return;
        if (!result.assets) return;
        const asset = result.assets[0];
        if (asset.uri && asset.fileName && asset.type) {
            const response = await apiClient.attachImage(await Auth.getFromStorage("token"), {
                uri: asset.uri,
                name: asset.fileName,
                type: asset.type,
            });
            if (response.success) {
                setValue(
                    value + value ? " " : "" + response.urls.map((att: string) => `![attachment](${SERVER}${att})`).join("\n"),
                );
            } else {
                showPopup("Error", response.message);
            }
        }
    }
    */

    return (
        <motion.div
            key="message_input_container"
            className={styles.container}
            initial={{ translateY: 100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 100, opacity: 0 }}
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
});

export default MessageInput;
