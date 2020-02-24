import { takeLatest, call, put } from "redux-saga/effects";
import { getUserIDSuccess, getUserIDRequest, fetchFailure } from "../actions";

export function* watchUserID() {
    yield takeLatest(getUserIDRequest, function*({ payload }) {
        try {
            const result = yield call(getUserID, payload);
            if (result.success) {
                yield put(getUserIDSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error.message));
        }
    });
}

const getUserID = id => {
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`;
    return fetch(url).then(responce => responce.json());
};
