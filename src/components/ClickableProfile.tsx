import { type HTMLProps } from "react";
import styles from "./ClickableProfile.module.scss";

export interface ClickableProfileProps extends HTMLProps<HTMLDivElement> {
    text?: string;
    image?: string;
    onPress?: () => void;
    isInList?: boolean;
}

function ClickableProfile(props: ClickableProfileProps) {
    const { text = "", image = "", className, onPress, isInList = false, children, ...rest } = props;

    const classes = [className || "", styles.container, isInList ? styles.listItem : ""].filter(Boolean).join(" ");

    return (
        <div {...rest} onClick={onPress} className={classes}>
            {image && <img src={image} />}
            <p>{text}</p>
            {children}
        </div>
    );
}

export default ClickableProfile;
