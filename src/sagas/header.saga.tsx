import {
    ON_DISCONNECT_WALLET_REQUEST,
    ON_GET_CATEGORY_REQUEST,
    ON_GET_USER_REQUEST,
    ON_LOGOUT,
    ON_SET_NETWORK_LISTENER,
    onDisconnectWalletAction,
    onGetCategoryAction,
    onGetUserAction,
    onLogoutAction,
    onSetNetworkListenerAction
} from "../action/header.action";
import {onDisconnectWallet, onGetCategory, onGetUser, onSetWalletListener} from "../service/header.service";
import {call, put, takeLatest} from "redux-saga/effects";
import {IUser} from "../type/_data/user.type";
import {ICategory} from "../type/_data/category.type";
import {onChangeNoticeMessageAction, onToggleNoticeModalAction} from "../action/modal.action";

function* onSetNetworkListenerSaga(_action: ReturnType<typeof onSetNetworkListenerAction>) {
    try {
        const flag: boolean = yield call(onSetWalletListener, _action.payload);
        if (flag === true) {
            yield put(onChangeNoticeMessageAction("지갑의 변경이 감지되어 로그아웃됩니다."));
            yield put(onToggleNoticeModalAction());
            yield put(onDisconnectWalletAction.request());
        }
    } catch (e: any) {
        console.log(e)
    }
}

function* onDisconnectWalletSaga(_action: ReturnType<typeof onDisconnectWalletAction.request>) {
    try {
        yield call(onDisconnectWallet);
        yield put(onDisconnectWalletAction.success());
        sessionStorage.removeItem('token');
    } catch (e: any) {
        yield put(onDisconnectWalletAction.failure(e));
    }
}

function* onGetUserSaga(_action: ReturnType<typeof onGetUserAction.request>) {
    try {
        const user: IUser | undefined = yield call(onGetUser);
        if (!user)
            sessionStorage.removeItem('token');
        else
            yield put(onSetNetworkListenerAction(user.networkId));
        yield put(onGetUserAction.success(user));
    } catch (e: any) {
        yield put(onGetUserAction.failure(e));
    }
}

function* onGetCategorySaga(_action: ReturnType<typeof onGetCategoryAction.request>) {
    try {
        const category: Array<ICategory> = yield call(onGetCategory);
        yield put(onGetCategoryAction.success(category));
    } catch (e: any) {
        yield put(onGetCategoryAction.failure(e));
    }
}

function* onLogoutSaga(_action: ReturnType<typeof onLogoutAction>) {
    yield put(onDisconnectWalletAction.request());
    yield put(onChangeNoticeMessageAction("로그아웃 되었습니다."));
    yield put(onToggleNoticeModalAction());
}

function* headerSaga() {
    yield takeLatest(ON_SET_NETWORK_LISTENER, onSetNetworkListenerSaga);
    yield takeLatest(ON_DISCONNECT_WALLET_REQUEST, onDisconnectWalletSaga);
    yield takeLatest(ON_GET_USER_REQUEST, onGetUserSaga);
    yield takeLatest(ON_GET_CATEGORY_REQUEST, onGetCategorySaga);
    yield takeLatest(ON_LOGOUT, onLogoutSaga)
}

export default headerSaga;