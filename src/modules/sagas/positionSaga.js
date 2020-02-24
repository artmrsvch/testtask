import { takeEvery, call, put } from "redux-saga/effects";
import { positionRequest, positionSuccess, fetchFailure } from "../actions";

export function* positionSaga() {
    yield takeEvery(positionRequest, function*() {
        try {
            const result = yield call(getPosition);
            if (result.success) {
                yield put(positionSuccess(result.positions));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error.message));
        }
    });
}

const getPosition = () => {
    const url = "https://frontend-test-assignment-api.abz.agency/api/v1/positions";
    return fetch(url).then(responce => responce.json());
};
