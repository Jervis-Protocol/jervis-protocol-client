import {
    ON_INPUT_VALIDATION,
    ON_UPLOAD_BACKGROUND_IMAGE_REQUEST,
    ON_UPLOAD_NFT_IMAGE_REQUEST,
    ON_UPLOAD_STORY_IMAGE_REQUEST,
    onInputValidationAction,
    onUploadBackgroundImageAction,
    onUploadNFTImageAction,
    onUploadStoryImageAction
} from "../action/create.action";
import {call, put, takeLatest} from "redux-saga/effects";
import {fileUpload, validationInput} from "../service/create.service";
import {onChangeNoticeMessageAction, onToggleNoticeModalAction} from "../action/modal.action";

function* onUploadStoryImageSaga(_action: ReturnType<typeof onUploadStoryImageAction.request>) {
    try {
        const imageURL: string = yield call(fileUpload, _action.payload);
        yield put(onUploadStoryImageAction.success(imageURL));
    } catch (e: any) {
        yield put(onUploadStoryImageAction.failure(e));
    }
}

function* onUploadBackgroundImageSaga(_action: ReturnType<typeof onUploadBackgroundImageAction.request>) {
    try {
        const imageURL: string = yield call(fileUpload, _action.payload);
        yield put(onUploadBackgroundImageAction.success(imageURL));
    } catch (e: any) {
        yield put(onUploadBackgroundImageAction.failure(e));
    }
}

function* onUploadNFTImageSaga(_action: ReturnType<typeof onUploadNFTImageAction.request>) {
    try {
        const imageURL: string = yield call(fileUpload, _action.payload);
        yield put(onUploadNFTImageAction.success(imageURL));
    } catch (e: any) {
        yield put(onUploadNFTImageAction.failure(e));
    }
}

function* onInputValidationSaga(_action: ReturnType<typeof onInputValidationAction>) {
    try {
        const isValid: boolean = yield call(validationInput, _action.payload.input);
        if (isValid === true)
            _action.payload.navigator('/summary', { state: _action.payload.input});
        else {
            yield put(onChangeNoticeMessageAction("입력값을 확인해주세요."))
            yield put(onToggleNoticeModalAction())
        }
    } catch (e: any) {
        yield put(onChangeNoticeMessageAction("입력값을 확인해주세요."))
        yield put(onToggleNoticeModalAction())
    }
}

function* createSaga() {
    yield takeLatest(ON_UPLOAD_STORY_IMAGE_REQUEST, onUploadStoryImageSaga);
    yield takeLatest(ON_UPLOAD_BACKGROUND_IMAGE_REQUEST, onUploadBackgroundImageSaga);
    yield takeLatest(ON_UPLOAD_NFT_IMAGE_REQUEST, onUploadNFTImageSaga);
    yield takeLatest(ON_INPUT_VALIDATION, onInputValidationSaga);
}

export default createSaga;