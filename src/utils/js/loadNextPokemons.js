/**
 *
 * @param {[]} filteredPokemonList
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
