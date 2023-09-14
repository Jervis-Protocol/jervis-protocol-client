import {ON_GET_USER_REQUEST, onGetUserAction} from "../action/profile.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {IUser} from "../type/_data/user.type";
import {onGetUser} from "../service/profile.service";
import {onToggleLoadingModal} from "../action/modal.action";

function* onGetUserSaga(_action: ReturnType<typeof onGetUserAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        const user: IUser = yield call(onGetUser, _action.payload);
        yield put(onGetUserAction.success(user));
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onGetUserAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* profileSaga() {
    yield takeLatest(ON_GET_USER_REQUEST, onGetUserSaga);
}

export default profileSaga;