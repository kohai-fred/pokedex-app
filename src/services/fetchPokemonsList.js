import axios from "axios";

export default async function getPokemonsList(url = "https://pokeapi.co/api/v2/pokemon/?limit=649") {
    try {
        const { data } = await axios.get(url);

        // On récupère l'ID dans l'url et on l'insert dans data
        data["results"] = data.results.map((pokemon) => {
            const str = pokemon.url.split("/");
            return { ...pokemon, id: str[str.length - 2] };
        });

        return [data.results, null];
    } catch (error) {
        console.log("ERROR=>", error);
        return [null, error];
    }
}
