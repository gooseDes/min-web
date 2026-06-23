import { memo } from "react";
import styles from "./Divider.module.scss";

const Divider = memo(function Divider() {
    return <div className={styles.divider} />;
});

export default Divider;
