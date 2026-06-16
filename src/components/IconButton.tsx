import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { ButtonHTMLAttributes } from "react";
import Icon from "./Icon";
import styles from "./IconButton.module.scss";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: IconProp;
    size?: number;
}

function IconButton(props: IconButtonProps) {
    const { icon, size, className, ...rest } = props;

    return (
        <button className={`${styles.container} ${className}`} {...rest}>
            <Icon icon={icon} size={size} />
        </button>
    );
}

export default IconButton;
