import {createAction, createAsyncAction} from "typesafe-actions";
import {IGetUserParams} from "../type/_container/profile.type";
import {IUser} from "../type/_data/user.type";
import {AxiosError} from "axios";

export const ON_GET_USER_REQUEST = "profile/ON_GET_USER_REQUEST" as const;
export const ON_GET_USER_SUCCESS = "profile/ON_GET_USER_SUCCESS" as const;
export const ON_GET_USER_FAILURE = "profile/ON_GET_USER_FAILURE" as const;

export const ON_UPDATE_AUTH = "profile/ON_UPDATE_AUTH" as const;

export const onGetUserAction = createAsyncAction(ON_GET_USER_REQUEST, ON_GET_USER_SUCCESS, ON_GET_USER_FAILURE)<IGetUserParams, IUser, AxiosError>();
export const onUpdateAuthAction = createAction(ON_UPDATE_AUTH)<boolean>();