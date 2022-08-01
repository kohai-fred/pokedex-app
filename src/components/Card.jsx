import React from "react";
import styles from "./Card.module.css";
function Card({ pokemon }) {
    const { name, id, url } = pokemon;
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return (
        <div className={styles.card}>
            <p className={styles.card_title}> {name} </p>
            <div className={styles.card_container}>
                <img className={styles.card_img} src={src} />
            </div>
            <button className={styles.card_btn}>Ajouter</button>
        </div>
    );
}

export default Card;
