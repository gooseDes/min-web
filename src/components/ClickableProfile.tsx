import type { HTMLProps } from "react";
import styles from "./ClickableProfile.module.scss";

export interface ClickableProfileProps extends HTMLProps<HTMLDivElement> {
    text?: string;
    image?: string;
    onPress?: () => void;
}

function ClickableProfile(props: ClickableProfileProps) {
    const { text, image, className, onPress, ...rest } = props;

    return (
        <div {...rest} onClick={onPress} className={`${className} ${styles.container}`}>
            {image && <img src={image} />}
            <p>{text}</p>
        </div>
    );
}

export default ClickableProfile;
