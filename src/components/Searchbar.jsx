import React from "react";
import { useDispatch } from "react-redux";
import { updatePokemonList, updatePokedexList } from "../actions";
import styles from "./Searchbar.module.css";

const Searchbar = ({ baseList, from }) => {
    const dispatch = useDispatch();

    const search = (e) => {
        const newList = baseList.filter((list) => {
            const str1 = list.name.slice(0, e.target.value.length);
            return str1 === e.target.value;
        });

        switch (from) {
            case "home":
                dispatch(updatePokemonList(newList));
                break;
            case "pokedex":
                dispatch(updatePokedexList(newList));
                break;
            default:
                console.warn(" 🚀 ERROR dans le from");
                break;
        }
    };
    return (
        <article className={styles.searchbar_container}>
            <form action="">
                <input type="text" name="search" id="search" placeholder="Search monster..." onKeyUp={search} />
            </form>
        </article>
    );
};

export default Searchbar;
