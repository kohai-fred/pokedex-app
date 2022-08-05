import { ADD_POKEMON, REMOVE_POKEMON, SEARCH_IN_POKEDEX_LIST, SEARCH_IN_POKEMON_LIST } from "../actions/types";

const DATA = JSON.parse(localStorage.getItem("pokedex")) || [];
const initialState = {
    pokedex: DATA,
    nameList: DATA.map((pokemon) => pokemon.name) || [],
    filteredList: DATA,
};

function getStoragePokedex() {
    return JSON.parse(localStorage.getItem("pokedex"));
}
function setStoragePokedex(arr) {
    localStorage.setItem("pokedex", JSON.stringify(arr));
}

export default function pokedexReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_POKEMON:
            let pokedex = [];
            // Get Storage
            const storage = getStoragePokedex();
            const name = action.payload.pokemon.name;
            // Create Storage
            if (!storage) {
                pokedex.push(action.payload.pokemon);
                setStoragePokedex(pokedex);

                return {
                    pokedex,
                    nameList: [name],
                };
            }

            storage.push(action.payload.pokemon);
            storage.sort((a, b) => a.name.localeCompare(b.name));

            setStoragePokedex(storage);

            return {
                ...state,
                filteredList: storage,
                nameList: [...state.nameList, name],
            };

        case REMOVE_POKEMON:
            const pokeName = action.payload.pokemon.name;
            const list = state.nameList.filter((name) => name !== pokeName);
            let localSto = getStoragePokedex().filter((pokemon) => pokemon.name !== pokeName);
            setStoragePokedex(localSto);

            return {
                ...state,
                filteredList: localSto,
                nameList: list,
            };
        case SEARCH_IN_POKEDEX_LIST:
            const newList = action.payload.list;
            return {
                ...state,
                filteredList: newList,
            };
        default:
            return state;
    }
}
