import { useDispatch } from "react-redux";
import { updatePokemonList, updatePokedexList } from "../../actions";

export default function swithDispatchUpdate(baseList, from) {
    const dispatch = useDispatch();

    switch (from) {
        case "home":
            dispatch(updatePokemonList(baseList));
            break;
        case "pokedex":
            dispatch(updatePokedexList(baseList));
            break;
        default:
            console.warn(" 🚀 ERROR dans le from");
            break;
    }
}
