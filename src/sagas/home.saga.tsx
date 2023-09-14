import {call, put, takeLatest} from "redux-saga/effects";
import {
    ON_GET_MAIN_FUNDING_REQUEST,
    ON_GET_POPULAR_FUNDING_REQUEST,
    ON_GET_TODO_FUNDING_REQUEST,
    onGetMainFundingAction,
    onGetPopularFundingAction,
    onGetTodoFundingAction
} from "../action/home.action";
import {IFunding} from "../type/_data/funding.type";
import {onGetMainFunding, onGetPopularFunding, onGetTodoFunding} from "../service/home.service";

function* onGetMainFundingSaga(_action: ReturnType<typeof onGetMainFundingAction.request>) {
    try {
        const funding: IFunding = yield call(onGetMainFunding);
        yield put(onGetMainFundingAction.success(funding));
    } catch (e: any) {
        yield put(onGetMainFundingAction.failure(e));
    }
}

function* onGetPopularFundingSaga(_action: ReturnType<typeof onGetPopularFundingAction.request>) {
    try {
        const funding: Array<IFunding> = yield call(onGetPopularFunding);
        yield put(onGetPopularFundingAction.success(funding));
    } catch (e: any) {
        yield put(onGetPopularFundingAction.failure(e));
    }
}

function* onGetTodoFundingSaga(_action: ReturnType<typeof onGetTodoFundingAction.request>) {
    try {
        const funding: Array<IFunding> = yield call(onGetTodoFunding);
        yield put(onGetTodoFundingAction.success(funding));
    } catch (e: any) {
        yield put(onGetTodoFundingAction.failure(e));
    }
}

function* homeSaga() {
    yield takeLatest(ON_GET_MAIN_FUNDING_REQUEST, onGetMainFundingSaga);
    yield takeLatest(ON_GET_POPULAR_FUNDING_REQUEST, onGetPopularFundingSaga);
    yield takeLatest(ON_GET_TODO_FUNDING_REQUEST, onGetTodoFundingSaga);
}

export default homeSaga;