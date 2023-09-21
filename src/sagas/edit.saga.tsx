import {
    ON_CHANGE_EMAIL_REQUEST,
    ON_CHANGE_IMAGE_REQUEST,
    ON_CHANGE_NICKNAME_REQUEST,
    ON_EDIT_SUBMIT_REQUEST,
    ON_RESEND_AUTH_NUMBER_REQUEST,
    ON_SEND_AUTH_NUMBER_REQUEST,
    ON_VALIDATION_AUTH_NUMBER_REQUEST,
    onChangeEmailAction,
    onChangeImageAction,
    onChangeNicknameAction,
    onEditSubmitAction,
    onResendAuthNumberAction,
    onSendAuthNumberAction,
    onToggleEmailModalAction,
    onToggleValidModalAction,
    onUpdateEmailAction,
    onValidationAuthNumberAction
} from "../action/edit.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {
    onChangeNickname,
    onEditSubmit,
    onEmailValidation,
    onSendAuthNumber,
    onValidationAuthNumber
} from "../service/edit.service";
import {upload} from "../helper/axios-handler";
import {onChangeNoticeMessageAction, onToggleLoadingModal, onToggleNoticeModalAction} from "../action/modal.action";
import {IUser} from "../type/_data/user.type";

function* onChangeNicknameSaga(_action: ReturnType<typeof onChangeNicknameAction.request>) {
    try {
        yield put(onChangeNicknameAction.success({input: _action.payload}));
    } catch (e: any) {
        yield put(onChangeNicknameAction.failure(e));
    }
}

function* onChangeImageSaga(_action: ReturnType<typeof onChangeImageAction.request>) {
    try {
        const imageURL: string = yield call(upload, _action.payload);
        yield put(onChangeImageAction.success(imageURL));
    } catch (e: any) {
        yield put(onChangeImageAction.failure(e));
    }
}

function* onChangeEmailSaga(_action: ReturnType<typeof onChangeEmailAction.request>) {
    try {
        const valid: boolean = yield call(onEmailValidation, _action.payload);
        yield put(onChangeEmailAction.success({ input: _action.payload, error: valid }));
    } catch (e: any) {
        yield put(onChangeEmailAction.failure(e));
    }
}

function* onSendAuthNumberSaga(_action: ReturnType<typeof onSendAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        yield call(onSendAuthNumber, _action.payload);
        yield put(onToggleEmailModalAction());
        yield put(onToggleValidModalAction());
        yield put(onToggleLoadingModal(false));
    } catch (e) {
        yield put(onChangeNoticeMessageAction("인증번호 전송에 실패했습니다. 다시 시도해주세요."));
        yield put(onToggleNoticeModalAction());
        yield put(onToggleLoadingModal(false));
    }
}

function* onValidationAuthNumberSaga(_action: ReturnType<typeof onValidationAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true))
        const valid: boolean = yield call(onValidationAuthNumber, _action.payload.number);
        yield put(onChangeNoticeMessageAction("인증에 성공했습니다."));
        yield put(onToggleNoticeModalAction());
        yield put(onUpdateEmailAction(_action.payload.email));
        yield put(onToggleValidModalAction());
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onValidationAuthNumberAction.failure(e));
        yield put(onToggleLoadingModal(false));

    }
}

function* onResendAuthNumberSaga(_action: ReturnType<typeof onResendAuthNumberAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        yield call(onSendAuthNumber, _action.payload);
        yield put(onChangeNoticeMessageAction("인증번호를 재전송했습니다."));
        yield put(onToggleNoticeModalAction());
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onResendAuthNumberAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* onEditSubmitSaga(_action: ReturnType<typeof onEditSubmitAction.request>) {
    try {
        const valid: boolean = yield call(onChangeNickname, _action.payload.user.nickname);
        if (!valid) {
            yield put(onChangeNicknameAction.failure({message: "닉네임을 다시 확인해주세요."}));
            return;
        }
        yield put(onToggleLoadingModal(true));
        const user: IUser = yield call(onEditSubmit, _action.payload.user);
        yield put(onChangeNoticeMessageAction("정보 수정이 완료되었습니다."));
        yield put(onToggleNoticeModalAction());
        yield put(onToggleLoadingModal(false));
        _action.payload.navigator("/profile", {state: { networkId: user.networkId, address: user.address }, replace: true});
    } catch (e: any) {
        yield put(onEditSubmitAction.failure(e));
        yield put(onToggleLoadingModal(false));

    }
}

function* editSaga() {
    yield takeLatest(ON_CHANGE_NICKNAME_REQUEST, onChangeNicknameSaga);
    yield takeLatest(ON_CHANGE_IMAGE_REQUEST, onChangeImageSaga);
    yield takeLatest(ON_CHANGE_EMAIL_REQUEST, onChangeEmailSaga);
    yield takeLatest(ON_SEND_AUTH_NUMBER_REQUEST, onSendAuthNumberSaga);
    yield takeLatest(ON_VALIDATION_AUTH_NUMBER_REQUEST, onValidationAuthNumberSaga);
    yield takeLatest(ON_RESEND_AUTH_NUMBER_REQUEST, onResendAuthNumberSaga);
    yield takeLatest(ON_EDIT_SUBMIT_REQUEST, onEditSubmitSaga);
}

export default editSaga;