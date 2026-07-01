import vars from "@/index.module.scss";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type HTMLProps } from "react";
import styles from "./Icon.module.scss";

export interface IconProps extends HTMLProps<HTMLDivElement> {
    icon: IconProp;
    size?: number;
}

function Icon(props: IconProps) {
    const { icon, size, className, ...rest } = props;

    return (
        <div className={[className, styles.container].filter(Boolean).join(" ")} {...rest}>
            <FontAwesomeIcon icon={icon} fontSize={size} color={vars.primaryColor} />
        </div>
    );
}

export default Icon;
