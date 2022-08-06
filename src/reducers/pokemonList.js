import { SEARCH_IN_POKEMON_LIST } from "../actions/types";
import getPokemonsList from "../services/fetchPokemonsList";

const [DATA, error] = await getPokemonsList();
const initialState = {
    baseList: DATA,
    filteredList: DATA,
    error,
};

export default function pokemonsListReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEARCH_IN_POKEMON_LIST:
            const newList = action.payload.list;
            return {
                ...state,
                filteredList: newList,
            };

        default:
            return state;
    }
}
