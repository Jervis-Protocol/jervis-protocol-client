import {
    ON_ADD_NETWORK,
    ON_CONNECT_REQUEST,
    onAddNetworkAction,
    onChangeNoticeMessageAction,
    onConnectAction,
    onToggleConnectModalAction,
    onToggleEmailModalAction,
    onToggleLoadingModal,
    onToggleNoticeModalAction
} from "../action/modal.action";
import {IWalletAuth} from "../type/_data/wallet.auth";
import {call, put, takeLatest} from "redux-saga/effects";
import {onAddNetwork, onChangeNetwork, onConnect, onLogin} from "../service/modal.connect.service";
import {IAuthResponse} from "../type/_data/response.type";
import {onGetUserAction, onSetNetworkListenerAction} from "../action/header.action";

function* onConnectSaga(_action: ReturnType<typeof onConnectAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        yield call(onChangeNetwork, _action.payload);
        const walletAuth: IWalletAuth = yield call(onConnect, _action.payload);
        const authResponse: IAuthResponse = yield call(onLogin, walletAuth);
        sessionStorage.setItem('token', authResponse.token);
        yield put(onGetUserAction.success(authResponse.user));
        yield put(onSetNetworkListenerAction(_action.payload));
        yield put(onToggleConnectModalAction());
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onToggleConnectModalAction());
        yield put(onToggleLoadingModal(false));
        console.log(e);
        switch (e.code) {
            case 'ERR_BAD_REQUEST':yield put(onToggleEmailModalAction()); break;
            case 60000:
                yield put(onChangeNoticeMessageAction(e.message));
                yield put(onToggleNoticeModalAction());
                break;
            case 4001:
                yield put(onChangeNoticeMessageAction("지갑 연결이 취소 되였습니다."));
                yield put(onToggleNoticeModalAction());
                break;
            case 4902:
                yield put(onAddNetworkAction(_action.payload));
                break;
            case -32603:
                yield put(onChangeNoticeMessageAction("인증이 취소 되였습니다."));
                yield put(onToggleNoticeModalAction());
                break;
            default:
                yield put(onChangeNoticeMessageAction("지갑 연결에 실패했습니다.\r\n다시 시도해주세요."));
                yield put(onToggleNoticeModalAction());
                break;
        }
    }
}

function* onAddNetworkSaga(_action: ReturnType<typeof onAddNetworkAction>) {
    try {
        const addResult: boolean = yield call(onAddNetwork, _action.payload);
        if (addResult === true)
            yield put(onConnectAction.request(_action.payload));
    } catch (e: any) {
        if (e.code === 4001) {
            yield put(onChangeNoticeMessageAction("네트워크 추가 프로세스가 취소 되였습니다."));
            yield put(onToggleNoticeModalAction());
        } else {
            yield put(onChangeNoticeMessageAction(e.message));
            yield put(onToggleNoticeModalAction());
        }
    }
}

function* modalConnectSaga() {
    yield takeLatest(ON_CONNECT_REQUEST, onConnectSaga);
    yield takeLatest(ON_ADD_NETWORK, onAddNetworkSaga);
}

export default modalConnectSaga;