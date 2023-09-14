import {all} from "redux-saga/effects";
import homeSaga from "./home.saga";
import createSaga from "./create.saga";
import headerSaga from "./header.saga";
import modalConnectSaga from "./modal.connect.saga";
import summarySaga from "./summary.saga";
import modalEmailSaga from "./modal.email.saga";
import modalValidSaga from "./modal.valid.saga";
import searchSaga from "./search.saga";
import fundingSaga from "./funding.saga";
import profileSaga from "./profile.saga";
import historySaga from "./history.saga";
import editSaga from "./edit.saga";


export function* rootSaga() {
    yield all([
        homeSaga(),
        createSaga(),
        headerSaga(),
        summarySaga(),
        searchSaga(),
        fundingSaga(),
        profileSaga(),
        historySaga(),
        editSaga(),

        modalConnectSaga(),
        modalEmailSaga(),
        modalValidSaga()
    ])
}