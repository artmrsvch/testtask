import { takeEvery, call, put } from "redux-saga/effects";
import { fetchFailure, fetchRegisterRequest, fetchSuccess } from "../actions";

export function* registrationSaga() {
    yield takeEvery(fetchRegisterRequest, function*({ payload }) {
        try {
            const result = yield call(regRequest, payload);
            if (result.success) {
                yield put(fetchSuccess(result.user_id));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchFailure(error.message));
        }
    });
}

const regRequest = ({ token, formData }) => {
    const url = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
    return fetch(url, {
        method: "POST",
        body: formData,
        headers: {
            Token: token
        }
    })
        .then(responce => responce.json())
        .then(data => data);
};
