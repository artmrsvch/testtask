import { createAction } from "redux-actions";

export const fetchUserRequest = createAction("FETCH_USER_REQUEST");
export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");

export const positionRequest = createAction("POSITION_REQUEST");
export const positionSuccess = createAction("POSITION_SUCCESS");

export const getTokenRequst = createAction("GET_TOKEN_REQUEST");
export const tokenSuccess = createAction("TOKEN_SUCCESS");

export const fetchSuccess = createAction("FETCH_SUCCESS");
export const fetchFailure = createAction("FETCH_FAILURE");
