import {
    ON_SEND_AUTH_NUMBER_REQUEST,
    onSendAuthNumberAction,
    onToggleEmailModalAction,
    onToggleLoadingModal,
    onToggleValidModalAction
} from "../action/modal.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {onSendAuthNumber} from "../service/modal.email.service";

function* onSendAuthNumberSaga(_action: ReturnType<typeof onSendAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        yield call(onSendAuthNumber, _action.payload);
        yield put(onToggleEmailModalAction());
        yield put(onToggleValidModalAction());
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onSendAuthNumberAction.failure(e));
    }
}

function* modalEmailSaga() {
    yield takeLatest(ON_SEND_AUTH_NUMBER_REQUEST, onSendAuthNumberSaga);
}

export default modalEmailSaga;