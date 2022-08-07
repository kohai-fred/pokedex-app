import { useState, useEffect, useRef } from "react";
import Searchbar from "./Searchbar";
import styles from "./List.module.css";
import Card from "./Card";
import loadNextPokemons from "../utils/js/loadNextPokemons";
import swithDispatchUpdate from "../utils/js/swithDispatchUpdate";

// Nombre de pokemons à ajouter sur la page
const SIZE_LOAD = 20;

const List = ({ baseList, filteredList, from }) => {
    const [list, setList] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [card, setCard] = useState(null);
    const [isScrollTop, setIsScrollTop] = useState(false);
    const ul = useRef(null);

    /**
     * Scroll infini
     */
    // Création d'un écouteur d'évènement sur la page
    const oberser = new IntersectionObserver((entry) => {
        const newList = loadNextPokemons(baseList, list, SIZE_LOAD);
        if (entry[0].isIntersecting === true) {
            setList(newList);
        }
    });

    // On Rempli la liste soit SIZE_LOAD premier soit de la recherche.
    useEffect(() => {
        if (!isUpdate) {
            setList(filteredList.slice(0, SIZE_LOAD));
            setIsUpdate(true);
            return;
        }

        setList(filteredList);
    }, [filteredList]);
    // On modifie la card à écouter
    useEffect(() => {
        const children = Array.from(ul.current.children);
        if (filteredList.length !== baseList.length) return;
        if (list) setCard(children[list.length - 6]);
    }, [list]);
    // On lance l'écouteur sur la card
    useEffect(() => {
        if (!card) return;
        oberser.observe(card);
    }, [card]);

    /**
     * Scroll top
     */
    // Création d'écouteur d'évènement
    const scrollTopObserver = new IntersectionObserver((entry) => {
        const ulTop = Math.abs(entry[0].boundingClientRect.top);
        const winHeight = window.innerHeight;
        if (ulTop - winHeight > winHeight) {
            setIsScrollTop(true);
        } else {
            setIsScrollTop(false);
        }
    });

    const scrollTop = () => {
        window.scrollTo({
            top: "82px",
            behavior: "smooth",
        });
    };
    // On lance l'écouteur
    useEffect(() => {
        if (!ul) return;
        scrollTopObserver.observe(ul.current);
    }, [card]);

    // Au changement de page on reset la recheche
    const reset = () => {
        setIsUpdate(false);
        swithDispatchUpdate(baseList, from);
    };

    return (
        <>
            <main className={styles.list}>
                <article>
                    <Searchbar filteredList={filteredList} baseList={baseList} from={from} />
                </article>

                <article className={styles.list_wrapper}>
                    <h1>{from}</h1>

                    <ul className={styles.list_container} ref={ul}>
                        {list && (
                            <>
                                {list.length === 0 ? (
                                    <li className={styles.no_result}>
                                        <span>.</span>
                                        <span>.</span>
                                        <span>.</span>
                                        <span>?</span>
                                    </li>
                                ) : (
                                    list.map((pokemon) => {
                                        return <Card key={pokemon.id} pokemon={pokemon} reset={reset} />;
                                    })
                                )}
                            </>
                        )}
                    </ul>
                </article>
            </main>
            {isScrollTop && (
                <div className={styles.scrollTop} onClick={scrollTop}>
                    <div></div>
                </div>
            )}
        </>
    );
};

export default List;
