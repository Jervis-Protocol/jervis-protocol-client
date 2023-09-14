import {createAction, createAsyncAction} from "typesafe-actions";
import {ISearchQuery} from "../type/_container/search.type";
import {IFunding} from "../type/_data/funding.type";
import {AxiosError} from "axios";

export const ON_GET_FUNDING_REQUEST = "search/ON_GET_FUNDING_REQUEST" as const;
export const ON_GET_FUNDING_SUCCESS = "search/ON_GET_FUNDING_SUCCESS" as const;
export const ON_GET_FUNDING_FAILURE = "search/ON_GET_FUNDING_FAILURE" as const;

export const ON_CHANGE_QUERY_REQUEST = "search/ON_CHANGE_QUERY_REQUEST" as const;
export const ON_CHANGE_QUERY_SUCCESS = "search/ON_CHANGE_QUERY_SUCCESS" as const;
export const ON_CHANGE_QUERY_FAILURE = "search/ON_CHANGE_QUERY_FAILURE" as const;

export const ON_CHANGE_STATE_REQUEST = "search/ON_CHANGE_STATE_REQUEST" as const;

export const ON_TOGGLE_LOADING = "search/ON_TOGGLE_LOADING" as const;

export const onGetFundingAction = createAsyncAction(ON_GET_FUNDING_REQUEST, ON_GET_FUNDING_SUCCESS, ON_GET_FUNDING_FAILURE)<ISearchQuery, Array<IFunding>, AxiosError>();
export const onChangeQueryAction = createAsyncAction(ON_CHANGE_QUERY_REQUEST, ON_CHANGE_QUERY_SUCCESS, ON_CHANGE_QUERY_FAILURE)<string, string, AxiosError>();
export const onChangeStateAction = createAction(ON_CHANGE_STATE_REQUEST)<string>();
export const onToggleLoadingAction = createAction(ON_TOGGLE_LOADING)<boolean>();