import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon, showModal } from "../actions";
import styles from "./ButtonAddRemove.module.css";

const ButtonAddRemove = ({ pokemon }) => {
    const { nameList } = useSelector((state) => state.pokedex);
    const dispatch = useDispatch();

    return (
        <>
            {!nameList.includes(pokemon.name) ? (
                <button className={`${styles.btn} ${styles.add}`} onClick={() => dispatch(addPokemon(pokemon))}>
                    Add
                </button>
            ) : (
                <button className={`${styles.btn} ${styles.remove}`} onClick={() => dispatch(showModal(true, pokemon))}>
                    Remove
                </button>
            )}
        </>
    );
};

export default ButtonAddRemove;
