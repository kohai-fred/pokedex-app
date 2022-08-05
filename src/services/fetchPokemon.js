import axios from "axios";
import { useEffect, useState } from "react";

const base_url = "https://pokeapi.co/api/v2";

export default async function getPokemon(id) {
    if (!id) return; // 404

    const info = await getInfo(id);
    const species = await getSpecies(info.species.url);
    const evol = await getEvol(species.evolution_chain.url);

    const data = {
        info,
        species,
        evol,
    };

    // console.log("🚀 ~ file: fetchPokemon.js ~ line 9 ~ getPokemon ~ response", data);
    return data;
}

async function getInfo(id) {
    const url = `${base_url}/pokemon/${id}`;
    const { data } = await axios.get(url);
    return data;
}

async function getSpecies(url) {
    const { data } = await axios.get(url);
    return data;
}

async function getEvol(url) {
    const { data } = await axios.get(url);
    return data;
}
