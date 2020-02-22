import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
    getUserSuccess,
    fetchFailure,
    fetchSuccess,
    fetchRegisterRequest,
    positionSuccess,
    tokenSuccess
} from "./actions";

const users = handleActions(
    {
        [getUserSuccess]: (state, action) => {
            if (!state.users) {
                return action.payload;
            } else {
                // сортировка по дате
                const newArrUsers = state.users.concat(action.payload.users);
                newArrUsers.sort((a, b) =>
                    a.registration_timestamp > b.registration_timestamp ? -1 : 1
                );
                action.payload.users = newArrUsers;
                return action.payload;
            }
        }
    },
    { links: "" } // меньшее зло, чтобы не плодить код проверки для скрытия кнопки
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
    users,
    isLoggedIn,
    positions,
    newUser,
    token
});
