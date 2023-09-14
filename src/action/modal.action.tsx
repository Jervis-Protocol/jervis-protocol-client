import {createAction, createAsyncAction} from "typesafe-actions";
import {IUser} from "../type/_data/user.type";
import {AxiosError} from "axios";

export const ON_TOGGLE_CONNECT_MODAL = "modal/connect/ON_TOGGLE_CONNECT_MODAL" as const;
export const ON_ADD_NETWORK = "modal/connect/ON_ADD_NETWORK" as const;
export const ON_CONNECT_REQUEST = "modal/connect/ON_CONNECT_REQUEST" as const;
export const ON_CONNECT_SUCCESS = "modal/connect/ON_CONNECT_SUCCESS" as const;
export const ON_CONNECT_FAILURE = "modal/connect/ON_CONNECT_FAILURE" as const;


export const ON_TOGGLE_NOTICE_MODAL = "modal/notice/ON_TOGGLE_NOTICE_MODAL" as const;
export const ON_CHANGE_NOTICE_MASSAGE = "modal/notice/ON_CHANGE_NOTICE_MASSAGE" as const;

export const ON_TOGGLE_LOADING_MODAL = "modal/loading/ON_TOGGLE_LOADING_MODAL" as const;

export const ON_TOGGLE_EMAIL_MODAL = "modal/email/ON_TOGGLE_EMAIL_MODAL" as const;
export const ON_SEND_AUTH_NUMBER_REQUEST = "modal/email/ON_SEND_AUTH_NUMBER_REQUEST" as const;
export const ON_SEND_AUTH_NUMBER_SUCCESS = "modal/email/ON_SEND_AUTH_NUMBER_SUCCESS" as const;
export const ON_SEND_AUTH_NUMBER_FAILURE = "modal/email/ON_SEND_AUTH_NUMBER_FAILURE" as const;
export const ON_CHANGE_EMAIL = "modal/email/ON_CHANGE_EMAIL" as const;

export const ON_TOGGLE_VALID_MODAL = "modal/valid/ON_TOGGLE_VALID_MODAL" as const;
export const ON_VALIDATION_AUTH_NUMBER_REQUEST = "modal/valid/ON_VALIDATION_AUTH_NUMBER_REQUEST" as const;
export const ON_VALIDATION_AUTH_NUMBER_SUCCESS = "modal/valid/ON_VALIDATION_AUTH_NUMBER_SUCCESS" as const;
export const ON_VALIDATION_AUTH_NUMBER_FAILURE = "modal/valid/ON_VALIDATION_AUTH_NUMBER_FAILURE" as const;
export const ON_RESEND_AUTH_NUMBER_REQUEST = "modal/valid/ON_RESEND_AUTH_NUMBER_REQUEST" as const;
export const ON_RESEND_AUTH_NUMBER_SUCCESS = "modal/valid/ON_RESEND_AUTH_NUMBER_SUCCESS" as const;
export const ON_RESEND_AUTH_NUMBER_FAILURE = "modal/valid/ON_RESEND_AUTH_NUMBER_FAILURE" as const;



export const onToggleLoadingModal = createAction(ON_TOGGLE_LOADING_MODAL)<boolean>();
export const onToggleConnectModalAction = createAction(ON_TOGGLE_CONNECT_MODAL)<undefined>();
export const onToggleEmailModalAction = createAction(ON_TOGGLE_EMAIL_MODAL)<undefined>();
export const onToggleValidModalAction = createAction(ON_TOGGLE_VALID_MODAL)<undefined>();

export const onAddNetworkAction = createAction(ON_ADD_NETWORK)<number>();
export const onToggleNoticeModalAction = createAction(ON_TOGGLE_NOTICE_MODAL)<undefined>();
export const onChangeNoticeMessageAction = createAction(ON_CHANGE_NOTICE_MASSAGE)<string>();
export const onChangeEmailAction = createAction(ON_CHANGE_EMAIL)<string>();

export const onConnectAction = createAsyncAction(ON_CONNECT_REQUEST, ON_CONNECT_SUCCESS, ON_CONNECT_FAILURE)<number, IUser, AxiosError>();
export const onSendAuthNumberAction = createAsyncAction(ON_SEND_AUTH_NUMBER_REQUEST, ON_SEND_AUTH_NUMBER_SUCCESS, ON_SEND_AUTH_NUMBER_FAILURE)<string, boolean, AxiosError>();
export const onValidationAuthNumberAction = createAsyncAction(ON_VALIDATION_AUTH_NUMBER_REQUEST, ON_VALIDATION_AUTH_NUMBER_SUCCESS, ON_VALIDATION_AUTH_NUMBER_FAILURE)<number, boolean, AxiosError>();
export const onResendAuthNumberAction = createAsyncAction(ON_RESEND_AUTH_NUMBER_REQUEST, ON_RESEND_AUTH_NUMBER_SUCCESS, ON_RESEND_AUTH_NUMBER_FAILURE)<string, boolean, AxiosError>();
