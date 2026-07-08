import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion, type HTMLMotionProps } from "framer-motion";
import Icon from "./Icon";
import styles from "./IconButton.module.scss";

export interface IconButtonProps extends HTMLMotionProps<"button"> {
    icon: IconProp;
    size?: number;
}

function IconButton(props: IconButtonProps) {
    const { icon, size, className, ...rest } = props;

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${styles.container} ${className}`}
            {...rest}
        >
            <Icon icon={icon} size={size} />
        </motion.button>
    );
}

export default IconButton;
