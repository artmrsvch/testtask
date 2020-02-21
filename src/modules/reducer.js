import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
    fetchUserRequest,
    fetchFailure,
    fetchSuccess,
    fetchRegisterRequest,
    positionSuccess,
    tokenSuccess
} from "./actions";

const userList = handleActions(
    {
        [fetchUserRequest]: (_state, action) => action.payload
    },
    []
);
const positions = handleActions(
    {
        [positionSuccess]: (_state, action) => action.payload
    },
    []
);
const newUser = handleActions(
    {
        [fetchSuccess]: (_state, action) => action.payload
    },
    {}
);
const token = handleActions(
    {
        [tokenSuccess]: (_state, action) => action.payload
    },
    {}
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
    isLoggedIn,
    positions,
    newUser,
    token
});
