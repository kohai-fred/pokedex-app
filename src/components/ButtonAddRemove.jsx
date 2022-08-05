import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon, showModal } from "../actions";
import styles from "./ButtonAddRemove.module.css";

const ButtonAddRemove = ({ pokemon }) => {
    const { nameList } = useSelector((state) => state.pokedex);
    const dispatch = useDispatch();

    const showAlertRemove = (pokemon) => {
        // alert(`Êtes vous sur de vouloir supprimer ${pokemon.name}`);
        dispatch(showModal(true));
        // dispatch(removePokemon(pokemon))
    };

    return (
        <>
            {!nameList.includes(pokemon.name) ? (
                <button className={`${styles.btn} ${styles.add}`} onClick={() => dispatch(addPokemon(pokemon))}>
                    Add
                </button>
            ) : (
                <button className={`${styles.btn} ${styles.remove}`} onClick={() => showAlertRemove(pokemon)}>
                    Remove
                </button>
            )}
        </>
    );
};

export default ButtonAddRemove;
