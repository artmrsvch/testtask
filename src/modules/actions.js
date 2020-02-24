import { createAction } from "redux-actions";

export const getUserRequest = createAction("GET_USER_REQUEST");
export const resetUserRequest = createAction("RESET_USER_REQUEST");
export const getUserSuccess = createAction("GET_USER_SUCCESS");

export const getUserIDRequest = createAction("GET_USER_ID_REQUEST");
export const getUserIDSuccess = createAction("GET_USER_ID_SUCCESS");
export const getUserIDFailure = createAction("GET_USER_ID_FAILURE");

export const fetchRegisterRequest = createAction("FETCH_REGISTER_REQUEST");
export const fetchRegisterSuccess = createAction("FETCH_REGISTER_SUCCESS");
export const fetchRegisterFailure = createAction("FETCH_REGISTER_FAILURE");

export const positionRequest = createAction("POSITION_REQUEST");
export const positionSuccess = createAction("POSITION_SUCCESS");

export const getTokenRequst = createAction("GET_TOKEN_REQUEST");
export const tokenSuccess = createAction("TOKEN_SUCCESS");

export const cleanModal = createAction("CLEAN_MODAL");
export const resetErrors = createAction("RESET_ERRORS");
export const fetchFailure = createAction("FETCH_FAILURE");
