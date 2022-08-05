import { SHOW_MODAL } from "../actions/types";
const initialState = {
    isOpen: false,
    pokemon: {},
};

export default function modalReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                isOpen: action.payload.isOpen,
                pokemon: action.payload.pokemon,
            };

        default:
            return state;
    }
}
