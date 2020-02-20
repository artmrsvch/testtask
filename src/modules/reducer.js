import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { fetchUserRequest, fetchFailure, fetchSuccess, fetchRegisterRequest } from "./actions";

const userList = handleActions(
    {
        [fetchUserRequest]: (_state, action) => action.payload
    },
    []
);
const isLoggedIn = handleActions(
    {
        [fetchRegisterRequest]: () => false,
        [fetchSuccess]: () => true,
        [fetchFailure]: () => false
    },
    false
);
export default combineReducers({
    userList,
    isLoggedIn
});
