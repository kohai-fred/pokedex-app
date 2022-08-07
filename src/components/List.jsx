import { useState, useEffect, useRef } from "react";
import Searchbar from "./Searchbar";
import styles from "./List.module.css";
import Card from "./Card";
import loadNextPokemons from "../utils/js/loadNextPokemons";

// Nombre de pokemons à ajouter sur la page
const SIZE_LOAD = 20;

const List = ({ baseList, filteredList, from }) => {
    const [list, setList] = useState(filteredList.slice(0, SIZE_LOAD));
    const [card, setCard] = useState(null);
    const ul = useRef(null);

    // Création d'un écouteur d'évènement sur la page
    const oberser = new IntersectionObserver((entry) => {
        const newList = loadNextPokemons(filteredList, list, SIZE_LOAD);
        if (entry[0].isIntersecting === true) {
            setList(newList);
        }
    });

    // On modifie la card à écouter
    useEffect(() => {
        setCard(Array.from(ul.current.children)[list.length - 6]);
    }, [list]);
    // On lance l'écouteur sur la card
    useEffect(() => {
        if (!card) return;
        oberser.observe(card);
    }, [card]);

    return (
        <main className={styles.list}>
            <article>
                <Searchbar filteredList={filteredList} baseList={baseList} from={from} />
            </article>

            <article className={styles.list_wrapper}>
                <h1>{from}</h1>

                <ul className={styles.list_container} ref={ul}>
                    {filteredList.length === 0 ? (
                        <li className={styles.no_result}>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                            <span>?</span>
                        </li>
                    ) : (
                        list.map((pokemon) => {
                            return <Card key={pokemon.id} pokemon={pokemon} />;
                        })
                    )}
                </ul>
            </article>
        </main>
    );
};

export default List;
