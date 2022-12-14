/**
 * Renvoie un tableau avec des pokemons supplémentaire à afficher
 * @param {[]} filteredPokemonList
 * @param {[]} oldList
 * @param {Number} sizeLoad Nombre supp à afficher
 * @return {[]}
 */
export default function loadNextPokemons(filteredPokemonList, oldList, sizeLoad) {
    const oldLength = oldList.length;
    const filteredLength = filteredPokemonList.length;
    if (oldLength === filteredLength) return filteredPokemonList;

    let newList = [];

    if (oldLength + sizeLoad < filteredLength) {
        newList = structuredClone(filteredPokemonList.slice(0, oldLength + sizeLoad));
    } else {
        newList = structuredClone(filteredPokemonList);
    }

    return newList;
}
