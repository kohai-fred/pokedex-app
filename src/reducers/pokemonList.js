import { POKEMONS_LIST } from "../actions/types";
import getPokemonsList from "../services/fetchPokemonsList";

const DATA = await getPokemonsList();
const initialState = {
    previous: DATA.previous,
    next: DATA.next,
    list: DATA.results,
};

export default function pokemonsListReducer(state = initialState, action = {}) {
    // console.log("STATE", state);
    // console.log("ACTION", action);
    return state;
}
