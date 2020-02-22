import { createAction } from "redux-actions";

export const getUserRequest = createAction("GET_USER_REQUEST");
export const getUserSuccess = createAction("GET_USER_SUCCESS");

export const getUserIDRequest = createAction("GET_USER_ID_REQUEST");
export const getUserIDSuccess = createAction("GET_USER_ID_SUCCESS");

export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");

export const positionRequest = createAction("POSITION_REQUEST");
export const positionSuccess = createAction("POSITION_SUCCESS");

export const getTokenRequst = createAction("GET_TOKEN_REQUEST");
export const tokenSuccess = createAction("TOKEN_SUCCESS");

export const fetchSuccess = createAction("FETCH_SUCCESS");
export const fetchFailure = createAction("FETCH_FAILURE");
