import { createAction } from "redux-actions";

export const fetchUserRequest = createAction("FETCH_USER_REQUEST");
export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");
export const fetchSuccess = createAction("FETCH_SUCCESS");
export const fetchFailure = createAction("FETCH_FAILURE");
