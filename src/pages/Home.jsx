import React from "react";
import styles from "./Home.module.css";

function Home() {
    console.log("STYLES", styles);
    return (
        <>
            <div className={styles.red}>TEST</div>
        </>
    );
}

export default Home;
