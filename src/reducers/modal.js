import { SHOW_MODAL } from "../actions/types";
const initialState = {
    isOpen: false,
};

export default function modalReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SHOW_MODAL:
            console.log("SHOW MODAL", action.payload);
            return {
                isOpen: action.payload.isOpen,
            };

        default:
            return state;
    }
}
