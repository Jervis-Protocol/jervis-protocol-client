import {IModalAction, IModalState} from "../type/_container/modal.type";
import {createReducer} from "typesafe-actions";
import {
    ON_CHANGE_EMAIL,
    ON_CHANGE_NOTICE_MASSAGE,
    ON_TOGGLE_CONNECT_MODAL,
    ON_TOGGLE_EMAIL_MODAL,
    ON_TOGGLE_LOADING_MODAL,
    ON_TOGGLE_NOTICE_MODAL,
    ON_TOGGLE_VALID_MODAL,
    ON_VALIDATION_AUTH_NUMBER_FAILURE,
    ON_VALIDATION_AUTH_NUMBER_REQUEST,
    ON_VALIDATION_AUTH_NUMBER_SUCCESS
} from "../action/modal.action";

const initialState: IModalState = {
    isOpenConnectModal: false,
    isOpenNoticeModal: false,
    isOpenLoadingModal: false,
    isOpenEmailModal: false,
    isOpenValidModal: false,

    noticeMessage: '',
}

const ModalReducer = createReducer<IModalState, IModalAction>(initialState, {
    [ON_TOGGLE_CONNECT_MODAL]: (state, action) => ({
        ...state,
        isOpenConnectModal: !state.isOpenConnectModal
    }),
    [ON_TOGGLE_NOTICE_MODAL]: (state, action) => ({
        ...state,
        isOpenNoticeModal: !state.isOpenNoticeModal
    }),
    [ON_CHANGE_NOTICE_MASSAGE]: (state, action) => ({
        ...state,
        noticeMessage: action.payload
    }),
    [ON_TOGGLE_EMAIL_MODAL]: (state, action) => ({
        ...state,
        isOpenEmailModal: !state.isOpenEmailModal
    }),
    [ON_TOGGLE_VALID_MODAL]: (state, action) => ({
        ...state,
        isOpenValidModal: !state.isOpenValidModal
    }),
    [ON_CHANGE_EMAIL]: (state, action) => ({
        ...state,
        email: action.payload
    }),
    [ON_TOGGLE_LOADING_MODAL]: (state, action) => ({
        ...state,
        isOpenLoadingModal: action.payload
    }),
    [ON_VALIDATION_AUTH_NUMBER_FAILURE]: (state, action) => ({
        ...state,
        authFail: true
    }),
    [ON_VALIDATION_AUTH_NUMBER_REQUEST]: (state, action) => ({
        ...state,
        authFail: undefined
    }),
    [ON_VALIDATION_AUTH_NUMBER_SUCCESS]: (state, action) => ({
        ...state,
        authFail: undefined
    })
})

export default ModalReducer;