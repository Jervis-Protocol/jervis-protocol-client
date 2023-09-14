import {
    ON_FUNDING_SUBMIT_REQUEST,
    ON_GET_ABI_REQUEST,
    ON_GET_FUNDING_REQUEST,
    ON_GET_NFT_REQUEST,
    ON_UPDATE_RECEIVE_HASH_REQUEST,
    onFundingSubmitAction,
    onGetABIAction,
    onGetFundingAction,
    onGetNFTAction,
    onUpdateReceiveHashAction
} from "../action/history.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {IFunding} from "../type/_data/funding.type";
import {onGetAbi, onGetFunding, onGetFundingNFT} from "../service/funding.service";
import {onChangeNoticeMessageAction, onToggleLoadingModal, onToggleNoticeModalAction} from "../action/modal.action";
import {INFT} from "../type/_data/nft.type";
import {onFundingSubmit, onUpdateReceiveHash} from "../service/history.service";
// import {AbiItem as KAbiItem} from "caver-js";
import {AbiItem} from "web3-utils";

function* onGetFundingSaga(_action: ReturnType<typeof onGetFundingAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        const funding: IFunding = yield call(onGetFunding, _action.payload);
        yield put(onGetFundingAction.success(funding));
        yield put(onGetNFTAction.request(_action.payload));
    } catch (e: any) {
        yield put(onGetFundingAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* onGetNFTSaga(_action: ReturnType<typeof onGetNFTAction.request>) {
    try {
        const nfts: Array<INFT> = yield call(onGetFundingNFT, _action.payload);
        yield put(onGetNFTAction.success(nfts));
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onGetNFTAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* onGetABISaga(_action: ReturnType<typeof onGetABIAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        const abi: Array<AbiItem> = yield call(onGetAbi);
        _action.payload.abi = abi;
        yield put(onFundingSubmitAction.request(_action.payload));
    } catch (e: any) {
        yield put(onFundingSubmitAction.failure(e));
    }
}

function* onFundingSubmitSaga(_action: ReturnType<typeof onFundingSubmitAction.request>) {
    try {
        const transactionHash: string = yield call(onFundingSubmit, _action.payload);
        yield put(onFundingSubmitAction.success(transactionHash));
        yield put(onUpdateReceiveHashAction.request({ transactionHash: transactionHash, _id: _action.payload.funding._id }));
    } catch (e: any) {
        yield put(onChangeNoticeMessageAction("펀딩 정산에 실패했습니다."));
        yield put(onToggleNoticeModalAction());
        yield put(onToggleLoadingModal(false));
        yield put(onFundingSubmitAction.failure(e));
    }
}

function* onUpdateReceiveHashSaga(_action: ReturnType<typeof onUpdateReceiveHashAction.request>) {
    try {
        yield call(onUpdateReceiveHash, _action.payload);
        yield put(onUpdateReceiveHashAction.success(true));
    } catch (e: any) {
        yield put(onUpdateReceiveHashAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* historySaga() {
    yield takeLatest(ON_GET_FUNDING_REQUEST, onGetFundingSaga);
    yield takeLatest(ON_GET_NFT_REQUEST, onGetNFTSaga);
    yield takeLatest(ON_FUNDING_SUBMIT_REQUEST, onFundingSubmitSaga)
    yield takeLatest(ON_UPDATE_RECEIVE_HASH_REQUEST, onUpdateReceiveHashSaga);
    yield takeLatest(ON_GET_ABI_REQUEST, onGetABISaga);
}

export default historySaga;