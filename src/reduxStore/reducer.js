import { FETCH_USER_LIST, FETCH_USER_DETAILS } from "./action"

const initialState = {
    userList: [],
    userDetail: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LIST: return { ...state, userList: action.payload };
        case FETCH_USER_DETAILS: return { ...state, userDetail: action.payload };
        default: return state;
    }
}