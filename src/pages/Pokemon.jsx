import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import cleanedPokemonData from "../services/cleanedPokemonData";
import styles from "./Pokemon.module.css";
import ButtonAddRemove from "../components/ButtonAddRemove";
import Spinner from "../components/Spinner";
import Error from "./404";

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [dynamicStyle, setDynamicStyle] = useState({ color: "black" });
    const content = useRef(null);

    // On récupère les data du pokemon
    useEffect(() => {
        const pokemonData = async () => {
            const [data, error] = await cleanedPokemonData(id);
            setError(error);
            setPokemon(data);
        };
        pokemonData();
    }, [id]);

    // On récupère la couleur dynamiquement pour le style.
    useEffect(() => {
        if (!pokemon) return;
        setDynamicStyle({ color: pokemon.color.name });
    }, [pokemon]);

    // Au click sur une évolution on remonte la carte.
    useEffect(() => {
        if (!content.current) return;
        content.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);

    // Gestion page erreur.
    if (error) return <Error error={error} />;

    return (
        <main className={styles.pokemon}>
            {!pokemon ? (
                <Spinner />
            ) : (
                <article ref={content}>
                    <div>
                        <header
                            style={{ background: `linear-gradient(115deg, ${dynamicStyle.color} 57.7%, black 57.7%)` }}
                        >
                            <h1 style={{ color: `${dynamicStyle.color === "black" ? "white" : dynamicStyle.color}` }}>
                                {pokemon.name}
                            </h1>
                            <div>
                                {pokemon.types.map((t) => {
                                    return (
                                        <img
                                            src={`../images/types_icons/${t.type.name}.webp`}
                                            alt={`${t.type.name}`}
                                            key={`type-${t.slot}`}
                                        />
                                    );
                                })}
                            </div>
                        </header>

                        <section>
                            <div className={styles.img_container}>
                                <img src={pokemon.img} alt={pokemon.name} className={styles.img_big} />
                            </div>
                            <p className={styles.title_img}>{pokemon.name}</p>
                            <span className={styles.id}>#{pokemon.id}</span>
                        </section>
                        <section>
                            <h2 style={{ background: dynamicStyle.color }}>
                                <span style={{ color: dynamicStyle.color === "black" ? "white" : dynamicStyle.color }}>
                                    Stats
                                </span>
                            </h2>
                            <div className={`${styles.content} ${styles.stat}`}>
                                {pokemon.stats.map((s, index) => {
                                    return (
                                        <div key={`stat-${index}`}>
                                            <h3>{s.stat.name} :  </h3>
                                            <span>
                                                <div
                                                    style={{
                                                        width: `${s.base_stat / 2}%`,
                                                        backgroundColor: dynamicStyle.color,
                                                    }}
                                                >
                                                    {s.base_stat}
                                                </div>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <section>
                            <h2 style={{ background: dynamicStyle.color }}>
                                <span style={{ color: dynamicStyle.color === "black" ? "white" : dynamicStyle.color }}>
                                    Profile
                                </span>
                            </h2>
                            <div className={styles.content}>
                                <div>
                                    <div>
                                        <h3>description : </h3>
                                        <span>
                                            {pokemon.description.flavor_text}
                                            <span>(version fr : "{pokemon.description.version.name}")</span>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3>weight : </h3>
                                    <span>{pokemon.weight / 10} kg</span>
                                </div>
                                <div>
                                    <h3>height : </h3>
                                    <span>{pokemon.height / 10} m</span>
                                </div>
                                <div>
                                    <h3>habitats: </h3>
                                    <span>{pokemon.habitat?.name || "?"}</span>
                                </div>
                                <div>
                                    <h3>capture rate: </h3>
                                    <span>{pokemon.capture_rate}</span>
                                </div>
                                <div>
                                    <h3>egg groups : </h3>
                                    <ul>
                                        {pokemon.egg_groups.map((egg) => {
                                            return <li key={egg.name}>{egg.name}</li>;
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h3>Abilities : </h3>
                                    <ul>
                                        {pokemon.abilities.map((a) => {
                                            return <li key={`ability-${a.slot}`}> {a.ability.name} </li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2 style={{ background: dynamicStyle.color }}>
                                <span style={{ color: dynamicStyle.color === "black" ? "white" : dynamicStyle.color }}>
                                    Evolution
                                </span>
                            </h2>
                            <div>
                                {pokemon.evolution.map((monster, index) => {
                                    return (
                                        <div key={monster.id}>
                                            <div className={`${styles.img_container} ${styles.evol}`}>
                                                <Link to={`/pokemon/${monster.id}`}>
                                                    <img src={monster.img} alt={monster.name} loading="lazy" />
                                                </Link>
                                                <div>
                                                    <p className={styles.title_img}>{monster.name} </p>
                                                </div>
                                            </div>
                                            {/* Parfois le min_level n'est pas défini */}
                                            {index + 1 < pokemon.evolution.length && (
                                                <div className={styles.evol_arrow_container}>
                                                    <div style={{ background: `${pokemon.color.name}` }}>
                                                        <p>
                                                            <span>Next level</span>
                                                            <span>{monster.min_level || "?"}</span>
                                                        </p>
                                                        <div style={{ borderTopColor: `${pokemon.color.name}` }}></div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                        <footer>
                            <ButtonAddRemove pokemon={pokemon} />
                        </footer>
                    </div>
                </article>
            )}
        </main>
    );
};

export default Pokemon;
