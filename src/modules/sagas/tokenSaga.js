import { takeEvery, call, put } from "redux-saga/effects";
import { getTokenRequst, tokenSuccess, fetchFailure } from "../actions";

export function* tokenSaga() {
    yield takeEvery(getTokenRequst, function*() {
        try {
            const result = yield call(getPosition);
            if (result.success) {
                yield put(tokenSuccess(result.token));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure("No responce"));
        }
    });
}

const getPosition = () => {
    const url = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
    return fetch(url).then(responce => responce.json());
};
