import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
    getUserSuccess,
    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure,
    getUserIDFailure,
    positionSuccess,
    tokenSuccess,
    resetUserRequest,
    cleanModal,
    resetErrors
} from "./actions";

const users = handleActions(
    {
        [getUserSuccess]: (state, action) => {
            if (!state.users) {
                return action.payload;
            } else {
                const newArrUsers = state.users.concat(action.payload.users);
                newArrUsers.sort((a, b) =>
                    a.registration_timestamp > b.registration_timestamp ? -1 : 1
                );
                action.payload.users = newArrUsers;
                return action.payload;
            }
        },
        [resetUserRequest]: (_state, _action) => {
            return { links: "" };
        }

        // реализация добавления нового юзера без запроса за страницей
        // [getUserIDSuccess]: (state, action) => {
        //     const dublicate = { ...state };
        //     const updateArr = dublicate.users.slice(0, 5);
        //     updateArr.unshift(action.payload.user);
        //     dublicate.users = updateArr;
        //     dublicate.links.next_url =
        //         "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=5";
        //     return dublicate;
        // }
    },
    { links: "" } // чтобы не плодить код проверки для скрытия кнопки
);
const positions = handleActions(
    {
        [positionSuccess]: (_state, action) => action.payload
    },
    []
);
const newUser = handleActions(
    {
        [fetchRegisterSuccess]: (_state, action) => action.payload,
        [cleanModal]: (_state, _action) => null
    },
    null
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
        [fetchRegisterSuccess]: () => true,
        [fetchRegisterFailure]: () => false,
        [cleanModal]: () => false
    },
    false
);
const errors = handleActions(
    {
        [fetchRegisterFailure]: (_state, action) => action.payload,
        [getUserIDFailure]: (_state, action) => action.payload,
        [resetErrors]: (_state, _action) => null
    },
    null
);
export default combineReducers({
    users,
    isLoggedIn,
    errors,
    positions,
    newUser,
    token
});
