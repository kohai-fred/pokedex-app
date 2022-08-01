import { legacy_createStore, combineReducers } from "redux";
import pokemonsListReducer from "../reducers/pokemonList";

const rootReducer = combineReducers({
    pokemonsList: pokemonsListReducer,
});

const store = legacy_createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
