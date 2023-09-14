import {
    ON_RESEND_AUTH_NUMBER_REQUEST,
    ON_VALIDATION_AUTH_NUMBER_REQUEST,
    onChangeNoticeMessageAction,
    onResendAuthNumberAction,
    onToggleLoadingModal,
    onToggleNoticeModalAction,
    onToggleValidModalAction,
    onValidationAuthNumberAction
} from "../action/modal.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {IUser} from "../type/_data/user.type";
import {onValidationAuthNumber} from "../service/modal.valid.service";
import {onSendAuthNumber} from "../service/modal.email.service";

function* onValidationAuthNumberSaga(_action: ReturnType<typeof onValidationAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        const user: IUser = yield call(onValidationAuthNumber, _action.payload);
        yield put(onValidationAuthNumberAction.success(true));
        yield put(onToggleValidModalAction());
        yield put(onChangeNoticeMessageAction("등록이 완료되었습니다."));
        yield put(onToggleLoadingModal(false));
        yield put(onToggleNoticeModalAction());
    } catch (e: any) {
        yield put(onValidationAuthNumberAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* onResendAuthNumberSaga(_action: ReturnType<typeof onResendAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        yield call(onSendAuthNumber, _action.payload);
        yield put(onChangeNoticeMessageAction("메일을 재전송 했습니다."));
        yield put(onToggleLoadingModal(false));
        yield put(onToggleNoticeModalAction());
    } catch (e: any) {
        yield put(onChangeNoticeMessageAction("메일 재전송에 실패했습니다\r\n다시 시도해주세요."));
        yield put(onToggleNoticeModalAction());
        yield put(onToggleLoadingModal(false));
    }
}

function* modalValidSaga() {
    yield takeLatest(ON_VALIDATION_AUTH_NUMBER_REQUEST, onValidationAuthNumberSaga);
    yield takeLatest(ON_RESEND_AUTH_NUMBER_REQUEST, onResendAuthNumberSaga);
}

export default modalValidSaga;