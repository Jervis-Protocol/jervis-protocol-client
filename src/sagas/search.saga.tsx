import {
    ON_CHANGE_QUERY_REQUEST,
    ON_GET_FUNDING_REQUEST,
    onChangeQueryAction,
    onGetFundingAction,
    onToggleLoadingAction
} from "../action/search.action";
import {IFunding} from "../type/_data/funding.type";
import {call, put, takeLatest} from "redux-saga/effects";
import {onGetFunding} from "../service/search.service";

function* onGetFundingSaga(_action: ReturnType<typeof onGetFundingAction.request>) {
    try {
        yield put(onToggleLoadingAction(true));
        const fundingList: Array<IFunding> = yield call(onGetFunding, _action.payload);
        yield put(onGetFundingAction.success(fundingList));
        yield put(onToggleLoadingAction(false));
    } catch (e: any) {
        yield put(onGetFundingAction.failure(e))
        yield put(onToggleLoadingAction(false));
    }
}

function* onChangeQuerySaga(_action: ReturnType<typeof onChangeQueryAction.request>) {
    try {
        yield put(onChangeQueryAction.success(_action.payload));
        yield put(onGetFundingAction.request({query: _action.payload, pageIndex: 0}));
    } catch (e: any) {
        yield put(onChangeQueryAction.failure(e));
    }
}

function* searchSaga() {
    yield takeLatest(ON_GET_FUNDING_REQUEST, onGetFundingSaga);
    yield takeLatest(ON_CHANGE_QUERY_REQUEST, onChangeQuerySaga);
}

export default searchSaga;