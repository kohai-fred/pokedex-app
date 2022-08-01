import axios from "axios";
import { useState, useEffect } from "react";

export default async function getPokemonsList(url = "https://pokeapi.co/api/v2/ability/?limit=64") {
    const { data } = await axios.get(url);

    data["results"] = data.results.map((pokemon) => {
        const str = pokemon.url.split("/");
        return { ...pokemon, id: str[str.length - 2] };
    });
    console.log("DATA", data);

    return data;
}
