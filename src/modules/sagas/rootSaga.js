import { fork } from "redux-saga/effects";
import { positionSaga } from "./positionSaga";
import { registrationSaga } from "./registrationSaga";
import { tokenSaga } from "./tokenSaga";
import { getUsersSaga } from "./getUsersSaga";
import { watchUserID } from "./getUserIdSaga";

export function* rootSaga() {
    yield fork(positionSaga);
    yield fork(registrationSaga);
    yield fork(tokenSaga);
    yield fork(getUsersSaga);
    yield fork(watchUserID);
}
