import { memo, type HTMLProps } from "react";
import styles from "./ClickableProfile.module.scss";

export interface ClickableProfileProps extends HTMLProps<HTMLDivElement> {
    text?: string;
    image?: string;
    isInList?: boolean;
}

const ClickableProfile = memo(function ClickableProfile(props: ClickableProfileProps) {
    const { text = "", image = "", className, isInList = false, children, ...rest } = props;

    const classes = [className || "", styles.container, isInList ? styles.listItem : ""].filter(Boolean).join(" ");

    return (
        <div {...rest} className={classes}>
            {image && <img src={image} />}
            <p>{text}</p>
            {children}
        </div>
    );
});

export default ClickableProfile;
