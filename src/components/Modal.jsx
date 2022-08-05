import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon, showModal } from "../actions";
import styles from "./Modal.module.css";

const Modal = () => {
    const { isOpen, pokemon } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleValidate = () => {
        // useDispatch(removePokemon())
        console.log("POKE VALIDATE", pokemon);
        dispatch(showModal(false));
        dispatch(removePokemon(pokemon));
    };

    return (
        <>
            {!isOpen ? (
                <></>
            ) : (
                <article className={styles.modal}>
                    <div>
                        <h1>JE SUIS LA MODAL</h1>
                        <div>
                            <button onClick={handleValidate}>Confirmer</button>
                            <button onClick={() => dispatch(showModal(false))}>Annuler</button>
                        </div>
                    </div>
                </article>
            )}
        </>
    );
};

export default Modal;
