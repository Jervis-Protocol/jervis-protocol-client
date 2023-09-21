import {createAction, createAsyncAction} from "typesafe-actions";
import {IEditSubmitParams, IValid} from "../type/_container/edit.type";
import {AxiosError} from "axios";
import {IUser} from "../type/_data/user.type";

export const ON_CHANGE_NICKNAME_REQUEST = "edit/ON_CHANGE_NICKNAME_REQUEST" as const;
export const ON_CHANGE_NICKNAME_SUCCESS = "edit/ON_CHANGE_NICKNAME_SUCCESS" as const;
export const ON_CHANGE_NICKNAME_FAILURE = "edit/ON_CHANGE_NICKNAME_FAILURE" as const;
export const ON_CHANGE_IMAGE_REQUEST = "edit/ON_CHANGE_IMAGE_REQUEST" as const;
export const ON_CHANGE_IMAGE_SUCCESS = "edit/ON_CHANGE_IMAGE_SUCCESS" as const;
export const ON_CHANGE_IMAGE_FAILURE = "edit/ON_CHANGE_IMAGE_FAILURE" as const;
export const ON_UPDATE_EMAIL = "edit/ON_UPDATE_EMAIL" as const;
export const ON_CHANGE_DESCRIPTION = "edit/ON_CHANGE_DESCRIPTION" as const;
export const ON_EDIT_SUBMIT_REQUEST = "edit/ON_EDIT_SUBMIT_REQUEST" as const;
export const ON_EDIT_SUBMIT_SUCCESS = "edit/ON_EDIT_SUBMIT_SUCCESS" as const;
export const ON_EDIT_SUBMIT_FAILURE = "edit/ON_EDIT_SUBMIT_FAILURE" as const;

export const ON_TOGGLE_EMAIL_MODAL = "edit/ON_TOGGLE_EMAIL_MODAL" as const;
export const ON_CHANGE_EMAIL_REQUEST = "edit/ON_CHANGE_EMAIL_REQUEST" as const;
export const ON_CHANGE_EMAIL_SUCCESS = "edit/ON_CHANGE_EMAIL_SUCCESS" as const;
export const ON_CHANGE_EMAIL_FAILURE = "edit/ON_CHANGE_EMAIL_FAILURE" as const;
export const ON_SEND_AUTH_NUMBER_REQUEST = "edit/ON_SEND_AUTH_NUMBER_REQUEST" as const;
export const ON_SEND_AUTH_NUMBER_SUCCESS = "edit/ON_SEND_AUTH_NUMBER_SUCCESS" as const;
export const ON_SEND_AUTH_NUMBER_FAILURE = "edit/ON_SEND_AUTH_NUMBER_FAILURE" as const;

export const ON_TOGGLE_VALID_MODAL = "edit/ON_TOGGLE_VALID_MODAL" as const;
export const ON_CHANGE_VALID_NUMBER = "edit/ON_CHANGE_VALID_NUMBER" as const;
export const ON_VALIDATION_AUTH_NUMBER_REQUEST = "edit/ON_VALIDATION_AUTH_NUMBER_REQUEST" as const;
export const ON_VALIDATION_AUTH_NUMBER_SUCCESS = "edit/ON_VALIDATION_AUTH_NUMBER_SUCCESS" as const;
export const ON_VALIDATION_AUTH_NUMBER_FAILURE = "edit/ON_VALIDATION_AUTH_NUMBER_FAILURE" as const;
export const ON_RESEND_AUTH_NUMBER_REQUEST = "edit/ON_RESEND_AUTH_NUMBER_REQUEST" as const;
export const ON_RESEND_AUTH_NUMBER_SUCCESS = "edit/ON_RESEND_AUTH_NUMBER_SUCCESS" as const;
export const ON_RESEND_AUTH_NUMBER_FAILURE = "edit/ON_RESEND_AUTH_NUMBER_FAILURE" as const;

export const onChangeNicknameAction = createAsyncAction(ON_CHANGE_NICKNAME_REQUEST, ON_CHANGE_NICKNAME_SUCCESS, ON_CHANGE_NICKNAME_FAILURE)<string, IValid, any>();
export const onChangeImageAction = createAsyncAction(ON_CHANGE_IMAGE_REQUEST, ON_CHANGE_IMAGE_SUCCESS, ON_CHANGE_IMAGE_FAILURE)<File, string, AxiosError>();
export const onEditSubmitAction = createAsyncAction(ON_EDIT_SUBMIT_REQUEST, ON_EDIT_SUBMIT_SUCCESS, ON_EDIT_SUBMIT_FAILURE)<IEditSubmitParams, IUser, AxiosError>();
export const onChangeDescriptionAction = createAction(ON_CHANGE_DESCRIPTION)<string>();
export const onUpdateEmailAction = createAction(ON_UPDATE_EMAIL)<string>();

export const onToggleEmailModalAction = createAction(ON_TOGGLE_EMAIL_MODAL)<undefined>();
export const onChangeEmailAction = createAsyncAction(ON_CHANGE_EMAIL_REQUEST, ON_CHANGE_EMAIL_SUCCESS, ON_CHANGE_EMAIL_FAILURE)<string, IValid, any>();
export const onSendAuthNumberAction = createAsyncAction(ON_SEND_AUTH_NUMBER_REQUEST, ON_SEND_AUTH_NUMBER_SUCCESS, ON_SEND_AUTH_NUMBER_FAILURE)<string, boolean, AxiosError>();

export const onToggleValidModalAction = createAction(ON_TOGGLE_VALID_MODAL)<undefined>();
export const onChangeValidNumberAction = createAction(ON_CHANGE_VALID_NUMBER)<number>();
export const onValidationAuthNumberAction = createAsyncAction(ON_VALIDATION_AUTH_NUMBER_REQUEST, ON_VALIDATION_AUTH_NUMBER_SUCCESS, ON_VALIDATION_AUTH_NUMBER_FAILURE)<{ number: number, email: string }, boolean, AxiosError>();
export const onResendAuthNumberAction = createAsyncAction(ON_RESEND_AUTH_NUMBER_REQUEST, ON_RESEND_AUTH_NUMBER_SUCCESS, ON_RESEND_AUTH_NUMBER_FAILURE)<string, boolean, AxiosError>();