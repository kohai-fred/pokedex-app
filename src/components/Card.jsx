import React from "react";
import { Link } from "react-router-dom";
import ButtonAddRemove from "./ButtonAddRemove";
import styles from "./Card.module.css";
import Spinner from "./Spinner";

function Card({ pokemon }) {
    const { name, id } = pokemon;
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return (
        <>
            {!pokemon ? (
                <Spinner />
            ) : (
                <li className={styles.card}>
                    <p className={styles.card_title}> {name} </p>
                    <Link to={`/pokemon/${id}`} className={styles.card_img_link}>
                        <div className={styles.card_img_container}>
                            <img className={styles.card_img} loading="lazy" src={src} />
                        </div>
                    </Link>
                    <ButtonAddRemove pokemon={pokemon} />
                </li>
            )}
        </>
    );
}

export default Card;
