import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <img src="../images/pokeball.webp" alt="spinner pokeball" />
        </div>
    );
};

export default Spinner;
