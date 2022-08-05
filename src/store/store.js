import { legacy_createStore, combineReducers } from "redux";
import modalReducer from "../reducers/modal";
import pokedexReducer from "../reducers/pokedex";
import pokemonsListReducer from "../reducers/pokemonList";

const rootReducer = combineReducers({
    pokemonsList: pokemonsListReducer,
    pokedex: pokedexReducer,
    modal: modalReducer,
});

const store = legacy_createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
