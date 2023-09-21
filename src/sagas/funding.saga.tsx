import {
    ON_GET_ABI_REQUEST,
    ON_GET_FUNDING_NFT_REQUEST,
    ON_GET_FUNDING_REQUEST,
    ON_GET_FUNDING_STORY_REQUEST,
    ON_INSERT_HISTORY_REQUEST,
    ON_SEND_DONATION_REQUEST,
    ON_SUBMIT_DONATION_INPUT,
    onGetABIAction,
    onGetFundingAction,
    onGetFundingNFTAction,
    onGetFundingStoryAction,
    onInsertHistoryAction,
    onSendDonationAction,
    onSubmitDonationInputAction,
    onToggleDonationModalAction
} from "../action/funding.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {onChangeNoticeMessageAction, onToggleLoadingModal, onToggleNoticeModalAction} from "../action/modal.action";
import {IFunding} from "../type/_data/funding.type";
import {
    onGetAbi,
    onGetFunding,
    onGetFundingNFT,
    onGetFundingStory,
    onInsertHistory,
    onSendDonation,
    onSubmitDonationInput
} from "../service/funding.service";
import {INFT} from "../type/_data/nft.type";
import {AbiItem} from "web3-utils";
import {IInputHistory} from "../type/_data/history.type";

function* onGetFundingSaga(_action: ReturnType<typeof onGetFundingAction.request>) {
    try {
         yield put(onToggleLoadingModal(true));
         const funding: IFunding = yield call(onGetFunding, _action.payload);
         yield put(onGetFundingAction.success(funding));
         yield put(onGetFundingStoryAction.request(funding.story));
    } catch (e: any) {
        yield put(onGetFundingAction.failure(e));
        yield put(onToggleLoadingModal(false));
    }
}

function* onGetFundingNFTSaga(_action: ReturnType<typeof onGetFundingNFTAction.request>) {
    try {
        const nfts: Array<INFT> = yield call(onGetFundingNFT, _action.payload);
        yield put(onGetFundingNFTAction.success(nfts));
        yield put(onToggleLoadingModal(false));
    } catch (e: any) {
        yield put(onGetFundingNFTAction.failure(e));
    }
}

function* onGetFundingStorySaga(_action: ReturnType<typeof onGetFundingStoryAction.request>) {
    try {
        const story: string = yield call(onGetFundingStory, _action.payload);
        yield put(onGetFundingStoryAction.success(story));
    } catch (e: any) {
        yield put(onGetFundingStoryAction.failure(e));
    }
}

function* onSubmitDonationInputSaga(_action: ReturnType<typeof onSubmitDonationInputAction>) {
    try {
        yield call(onSubmitDonationInput, _action.payload.input);
        yield put(onToggleLoadingModal(true));
        yield put(onGetABIAction.request(_action.payload));
    } catch (e: any) {
        yield put(onChangeNoticeMessageAction(e.message));
        yield put(onToggleNoticeModalAction());
    }
}

function* onGetAbiSaga(_action: ReturnType<typeof onGetABIAction.request>) {
    try {
        yield put(onToggleDonationModalAction());
        const abi: Array<AbiItem> = yield call(onGetAbi);
        _action.payload.abi = abi;
        yield put(onGetABIAction.success(abi));
        yield put(onSendDonationAction.request(_action.payload));
    } catch (e: any) {
        yield put(onGetABIAction.failure(e));
        yield put(onToggleLoadingModal(false));
        yield put(onChangeNoticeMessageAction("ABI 를 불러오는 중에 실패했습니다. 다시 시도해주세요"));
        yield put(onToggleNoticeModalAction());
    }
}

function* onSendDonationSaga(_action: ReturnType<typeof onSendDonationAction.request >) {
    try {
        const history: IInputHistory = yield call(onSendDonation, _action.payload);
        yield put(onSendDonationAction.success(history));
        yield put(onInsertHistoryAction.request({ history: {
            funding: _action.payload.funding._id,
            value: _action.payload.input.value,
            beneficiary: _action.payload.input.beneficiary,
            sender: history.sender,
            transactionHash: history.transactionHash,
            createdAt: new Date(),
        }, navigator: _action.payload.navigator }))
    } catch (e: any) {
        yield put(onSendDonationAction.failure(e));
        yield put(onToggleLoadingModal(false));
        yield put(onChangeNoticeMessageAction("펀딩에 후원하는 중에 실패했습니다.\r\n다시 시도해주세요."));
        yield put(onToggleNoticeModalAction());
    }
}

function* onInsertHistorySaga(_action: ReturnType<typeof onInsertHistoryAction.request>) {
    try {
        const history: boolean = yield call(onInsertHistory, _action.payload.history);
        yield put(onInsertHistoryAction.success(history));
        yield put(onToggleLoadingModal(false));
        _action.payload.navigator("/complete", {state: { message: "펀딩에 참여하셨습니다!"}, replace: true});
    } catch (e: any) {
        yield put(onInsertHistoryAction.failure(e));
        yield put(onInsertHistoryAction.request(_action.payload));
        // yield put(onToggleLoadingModal(false));
    }
}

function* fundingSaga() {
    yield takeLatest(ON_GET_FUNDING_REQUEST, onGetFundingSaga);
    yield takeLatest(ON_GET_FUNDING_NFT_REQUEST, onGetFundingNFTSaga);
    yield takeLatest(ON_GET_FUNDING_STORY_REQUEST, onGetFundingStorySaga);
    yield takeLatest(ON_SUBMIT_DONATION_INPUT, onSubmitDonationInputSaga);
    yield takeLatest(ON_GET_ABI_REQUEST, onGetAbiSaga);
    yield takeLatest(ON_SEND_DONATION_REQUEST, onSendDonationSaga);
    yield takeLatest(ON_INSERT_HISTORY_REQUEST, onInsertHistorySaga)
}

export default fundingSaga;