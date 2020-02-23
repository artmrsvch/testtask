import { takeEvery, call, put } from "redux-saga/effects";
import { fetchRegisterFailure, fetchRegisterRequest, fetchRegisterSuccess } from "../actions";

export function* registrationSaga() {
    yield takeEvery(fetchRegisterRequest, function*({ payload }) {
        try {
            const result = yield call(regRequest, payload);
            if (result.success) {
                yield put(fetchRegisterSuccess(result));
            } else {
                throw result;
            }
        } catch (error) {
            yield put(fetchRegisterFailure(error));
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
