import Constant from "../Constant";
import produce from "immer";

const initialState = {
    contacts : [],
    isLoading : false,
    name : "",
};

const changeIsLoading = (state, isLoading) => {
    let newState = produce(state, (draft) => {
        draft.isLoading = isLoading;
    });

    return newState;
}

const ContactReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case Constant.SEARCH_REQUEST:
            newState = produce(state, (draft) => {
                draft.name = action.payload.name;
                draft.contacts = [];
            });

            return changeIsLoading(newState, true);
            
        case Constant.SEARCH_SUCCESS:
            newState = produce(state, (draft) => {
                draft.contacts = action.payload.contacts;
            });

            return changeIsLoading(newState, false);
            
        case Constant.SEARCH_FAIL:
            return changeIsLoading(state, false);
            
        case Constant.CHANGE_ISLOADING:
            return changeIsLoading(state, action.payload.isLoading);

            case Constant.CHANGE_NAME:
            newState = produce(state, (draft) => {
                draft.name = action.payload.name;
            });
            return newState;

        default:
            return state;
    }
}

export default ContactReducer;