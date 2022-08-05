import React from "react";
import { useSelector } from "react-redux";
import styles from "./Modal.module.css";

const Modal = () => {
    const { isOpen } = useSelector((state) => state.modal);
    return (
        <>
            {!isOpen ? (
                <></>
            ) : (
                <article className={styles.modal}>
                    <div>
                        <h1>JE SUIS LA MODAL</h1>
                    </div>
                </article>
            )}
        </>
    );
};

export default Modal;
