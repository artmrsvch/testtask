import { takeLatest, call, put } from "redux-saga/effects";
import { getUserSuccess, getUserRequest, fetchFailure, resetUserRequest } from "../actions";

export function* getUsersSaga() {
    yield takeLatest(getUserRequest, function*({ payload }) {
        try {
            const result = yield call(getUsers, payload);
            if (result.success) {
                yield put(getUserSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error.message));
        }
    });
    yield takeLatest(resetUserRequest, function*() {
        try {
            const result = yield call(getUsers);
            if (result.success) {
                yield put(getUserSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error.message));
        }
    });
}

const getUsers = link => {
    let url;
    link
        ? (url = link)
        : (url = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6");
    return fetch(url).then(responce => responce.json());
};
