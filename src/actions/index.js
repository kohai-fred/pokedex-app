import { ADD_POKEMON, REMOVE_POKEMON, SEARCH_IN_POKEMON_LIST, SEARCH_IN_POKEDEX_LIST, SHOW_MODAL } from "./types";

export function addPokemon(pokemon) {
    return {
        type: ADD_POKEMON,
        payload: { pokemon },
    };
}
export function removePokemon(pokemon) {
    return {
        type: REMOVE_POKEMON,
        payload: { pokemon },
    };
}

export function updatePokemonList(list) {
    return {
        type: SEARCH_IN_POKEMON_LIST,
        payload: { list },
    };
}
export function updatePokedexList(list) {
    return {
        type: SEARCH_IN_POKEDEX_LIST,
        payload: { list },
    };
}

export function showModal(isOpen, pokemon) {
    return {
        type: SHOW_MODAL,
        payload: { isOpen, pokemon },
    };
}
