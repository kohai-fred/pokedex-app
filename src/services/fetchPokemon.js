import axios from "axios";

/**
 * *On récupère les datas de base ainsi que les urls pour enchainer les requêtes
 * @param {Number} id
 * @returns [data, error]
 */

export default async function getPokemon(id) {
    const [info, errorInfo] = await getData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (errorInfo) return [null, errorInfo];
    const [species, errorSpecies] = await getData(info.species.url);
    if (errorSpecies) return [null, errorSpecies];
    const [evol, errorEvol] = await getData(species.evolution_chain.url);
    if (errorEvol) return [null, errorEvol];

    const data = {
        info,
        species,
        evol,
    };

    return [data, null];
}

/**
 ** Requête avec Axios
 * @param {String} url
 * @returns [data, error]
 */
async function getData(url) {
    try {
        const { data } = await axios.get(url);
        return [data, null];
    } catch (error) {
        console.log("Error getData", error);
        return [null, error];
    }
}
