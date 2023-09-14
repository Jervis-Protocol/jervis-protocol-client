import {
    ON_DATA_PROCESSING_REQUEST,
    ON_FUNDING_CREATE_REQUEST,
    ON_FUNDING_DEPLOY_REQUEST,
    ON_GET_FACTORY_REQUEST,
    onDataProcessingAction,
    onFundingCreateAction,
    onFundingDeployAction,
    onGetFactoryAction
} from "../action/summary.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {IFundingFactory} from "../type/_data/contract.type";
import {onDataProcessing, onFundingCreate, onFundingDeploy, onGetFactory} from "../service/summary.service";
import {IFunding, IInputFunding} from "../type/_data/funding.type";
import {onToggleLoadingModal} from "../action/modal.action";

function* onDataProcessingSaga(_action: ReturnType<typeof onDataProcessingAction.request>) {
    try {
        yield put(onToggleLoadingModal(true));
        const funding: IInputFunding = yield call(onDataProcessing, _action.payload.funding);
        console.log(funding);
        yield put(onDataProcessingAction.success(funding));
        yield put(onGetFactoryAction.request({funding: funding, networkId: _action.payload.networkId, navigator: _action.payload.navigator}));
    } catch (e: any) {
        yield put(onToggleLoadingModal(false));
        yield put(onDataProcessingAction.failure(e));
    }
}

function* onGetFactorySaga(_action: ReturnType<typeof onGetFactoryAction.request>) {
    try {
        const factory: IFundingFactory = yield call(onGetFactory, _action.payload.networkId);
        yield put(onGetFactoryAction.success(factory));
        yield put(onFundingDeployAction.request({
            funding: _action.payload.funding,
            networkId: _action.payload.networkId,
            navigator: _action.payload.navigator,
            factory: factory
        }))
    } catch (e: any) {
        yield put(onToggleLoadingModal(false));
        yield put(onGetFactoryAction.failure(e));
    }
}

function* onFundingDeploySaga(_action: ReturnType<typeof onFundingDeployAction.request>) {
    try {
        const address: string = yield call(onFundingDeploy, _action.payload.networkId, _action.payload.funding, _action.payload.factory);
        _action.payload.funding.address = address;
        yield put(onFundingDeployAction.success(address));
        yield put(onFundingCreateAction.request({ funding: _action.payload.funding, navigator: _action.payload.navigator }));
    } catch (e: any) {
        yield put(onToggleLoadingModal(false));
        yield put(onFundingDeployAction.failure(e));
    }
}

function* onFundingCreateSaga(_action: ReturnType<typeof onFundingCreateAction.request>) {
    try {
        const funding: IFunding = yield call(onFundingCreate, _action.payload.funding);
        yield put(onFundingCreateAction.success(funding));
        yield put(onToggleLoadingModal(false));
        _action.payload.navigator('/complete', {state: { message: "펀딩 생성에 성공했습니다!"}, replace: true});
        // yield put(onToggleLoadingModal());
    } catch (e: any) {
        yield put(onToggleLoadingModal(true));
        yield put(onFundingCreateAction.failure(e))
    }
}

function* summarySaga() {
    yield takeLatest(ON_DATA_PROCESSING_REQUEST, onDataProcessingSaga);
    yield takeLatest(ON_FUNDING_DEPLOY_REQUEST, onFundingDeploySaga);
    yield takeLatest(ON_FUNDING_CREATE_REQUEST, onFundingCreateSaga);
    yield takeLatest(ON_GET_FACTORY_REQUEST, onGetFactorySaga);
}

export { summarySaga as default };