import React from "react";
import Searchbar from "./Searchbar";
import styles from "./List.module.css";
import Card from "./Card";

const List = ({ baseList, filteredList, from }) => {
    return (
        <main className={styles.list}>
            <article>
                <Searchbar filteredList={filteredList} baseList={baseList} from={from} />
            </article>

            <article className={styles.list_wrapper}>
                <h1>{from}</h1>

                <ul className={styles.list_container}>
                    {filteredList.length === 0 ? (
                        <div>Aucun Pokemon trouvé...</div>
                    ) : (
                        filteredList.map((pokemon) => {
                            return <Card key={pokemon.id} pokemon={pokemon} />;
                        })
                    )}
                </ul>
            </article>
        </main>
    );
};

export default List;
