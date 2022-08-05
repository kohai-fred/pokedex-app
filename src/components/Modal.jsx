import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon, showModal } from "../actions";
import styles from "./Modal.module.css";

const Modal = () => {
    const { isOpen, pokemon } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleValidate = () => {
        dispatch(showModal(false));
        dispatch(removePokemon(pokemon));
    };

    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen) {
            body.style.position = "fixed";
        } else {
            body.style.position = "relative";
        }
    }, [isOpen]);

    return (
        <>
            {!isOpen ? (
                <></>
            ) : (
                <article className={styles.modal}>
                    <section>
                        <p>
                            Êtes vous sûr de vouloir supprimer <span>{pokemon.name} ?</span>
                        </p>
                        <div>
                            <button onClick={handleValidate}>Confirmer</button>
                            <button onClick={() => dispatch(showModal(false))}>Annuler</button>
                        </div>
                    </section>
                </article>
            )}
        </>
    );
};

export default Modal;
