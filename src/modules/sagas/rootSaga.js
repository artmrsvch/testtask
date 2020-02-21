import { fork } from "redux-saga/effects";
import { positionSaga } from "./positionSaga";
import { registrationSaga } from "./registrationSaga";
import { tokenSaga } from "./tokenSaga";
export function* rootSaga() {
    yield fork(positionSaga);
    yield fork(registrationSaga);
    yield fork(tokenSaga);
}
