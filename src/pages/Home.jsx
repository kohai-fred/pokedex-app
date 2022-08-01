import React from "react";
import styles from "./Home.module.css";

import Card from "../components/Card";
import getPokemonsList from "../services/fetchPokemonsList";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
    const { previous, next, list } = useSelector((state) => state.pokemonsList);

    return (
        <div className={styles.home_container}>
            {list &&
                list.map((pokemon) => {
                    return <Card key={pokemon.id} pokemon={pokemon} />;
                })}
        </div>
    );
}

export default Home;
