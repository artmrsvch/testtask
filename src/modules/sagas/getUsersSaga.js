import { takeLatest, call, put } from "redux-saga/effects";
import { getUserSuccess, getUserRequest, fetchFailure } from "../actions";

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
}

const getUsers = link => {
    let url;
    link
        ? (url = link)
        : (url = "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5");
    return fetch(url).then(responce => responce.json());
};
