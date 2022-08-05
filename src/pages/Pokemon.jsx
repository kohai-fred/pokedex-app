import React from "react";
import getPokemon from "../services/fetchPokemon";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Pokemon.module.css";
import ButtonAddRemove from "../components/ButtonAddRemove";
import cleanedPokemonData from "../services/cleanedPokemonData";
import { useRef } from "react";
import Spinner from "../components/Spinner";

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [dynamicStyle, setDynamicStyle] = useState({ color: "black" });
    const content = useRef(null);

    useEffect(() => {
        const pokemonData = async () => {
            const data = await cleanedPokemonData(id);
            console.log("🚀 ~ POKEMON", data);
            setPokemon(data);
        };
        pokemonData();
    }, [id]);
    useEffect(() => {
        if (!content.current) return;
        content.current.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);
    useEffect(() => {
        if (!pokemon) return;
        setDynamicStyle({ color: pokemon.color.name, background: pokemon.color.name });
    }, [pokemon]);
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
                            <h1 style={{ color: `${dynamicStyle.color}` }}>{pokemon.name}</h1>
                            <div>
                                {pokemon.types.map((t) => {
                                    // return <span key={`type-${t.slot}`}> {t.type.name} </span>;
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
                                <span style={{ color: dynamicStyle.color }}>Stats</span>
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
                                <span style={{ color: dynamicStyle.color }}>Profile</span>
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
                                <span style={{ color: dynamicStyle.color }}>Evolution</span>
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
