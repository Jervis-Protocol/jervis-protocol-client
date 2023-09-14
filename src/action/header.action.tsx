import {createAction, createAsyncAction} from "typesafe-actions";
import {IUser} from "../type/_data/user.type";
import {AxiosError} from "axios";
import {ICategory} from "../type/_data/category.type";

export const ON_GET_USER_REQUEST = "header/ON_GET_USER_REQUEST" as const;
export const ON_GET_USER_SUCCESS = "header/ON_GET_USER_SUCCESS" as const;
export const ON_GET_USER_FAILURE = "header/ON_GET_USER_FAILURE" as const;

export const ON_GET_CATEGORY_REQUEST = "header/ON_GET_CATEGORY_REQUEST" as const;
export const ON_GET_CATEGORY_SUCCESS = "header/ON_GET_CATEGORY_SUCCESS" as const;
export const ON_GET_CATEGORY_FAILURE = "header/ON_GET_CATEGORY_FAILURE" as const;

export const ON_DISCONNECT_WALLET_REQUEST = "header/ON_DISCONNECT_WALLET_REQUEST" as const;
export const ON_DISCONNECT_WALLET_SUCCESS = "header/ON_DISCONNECT_WALLET_SUCCESS" as const;
export const ON_DISCONNECT_WALLET_FAILURE = "header/ON_DISCONNECT_WALLET_FAILURE" as const;

export const ON_LOGOUT = "header/ON_LOGOUT" as const;

export const ON_SET_NETWORK_LISTENER = "header/ON_SET_NETWORK_LISTENER" as const;


export const onGetUserAction = createAsyncAction(ON_GET_USER_REQUEST, ON_GET_USER_SUCCESS, ON_GET_USER_FAILURE)<undefined, IUser|undefined, AxiosError>();
export const onGetCategoryAction = createAsyncAction(ON_GET_CATEGORY_REQUEST, ON_GET_CATEGORY_SUCCESS, ON_GET_CATEGORY_FAILURE)<undefined, Array<ICategory>, AxiosError>();
export const onDisconnectWalletAction = createAsyncAction(ON_DISCONNECT_WALLET_REQUEST, ON_DISCONNECT_WALLET_SUCCESS, ON_DISCONNECT_WALLET_FAILURE)<undefined, undefined, AxiosError>();
export const onLogoutAction = createAction(ON_LOGOUT)<undefined>();
export const onSetNetworkListenerAction = createAction(ON_SET_NETWORK_LISTENER)<number>();