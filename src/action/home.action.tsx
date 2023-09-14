import {createAsyncAction} from "typesafe-actions";
import {IFunding} from "../type/_data/funding.type";
import {AxiosError} from "axios";

export const ON_GET_MAIN_FUNDING_REQUEST = "home/ON_GET_MAIN_FUNDING_REQUEST" as const;
export const ON_GET_MAIN_FUNDING_SUCCESS = "home/ON_GET_MAIN_FUNDING_SUCCESS" as const;
export const ON_GET_MAIN_FUNDING_FAILURE = "home/ON_GET_MAIN_FUNDING_FAILURE" as const;

export const ON_GET_POPULAR_FUNDING_REQUEST = "home/ON_GET_POPULAR_FUNDING_REQUEST" as const;
export const ON_GET_POPULAR_FUNDING_SUCCESS = "home/ON_GET_POPULAR_FUNDING_SUCCESS" as const;
export const ON_GET_POPULAR_FUNDING_FAILURE = "home/ON_GET_POPULAR_FUNDING_FAILURE" as const;

export const ON_GET_TODO_FUNDING_REQUEST = "home/ON_GET_TODO_FUNDING_REQUEST" as const;
export const ON_GET_TODO_FUNDING_SUCCESS = "home/ON_GET_TODO_FUNDING_SUCCESS" as const;
export const ON_GET_TODO_FUNDING_FAILURE = "home/ON_GET_TODO_FUNDING_FAILURE" as const;

export const onGetMainFundingAction = createAsyncAction(ON_GET_MAIN_FUNDING_REQUEST, ON_GET_MAIN_FUNDING_SUCCESS, ON_GET_MAIN_FUNDING_FAILURE)<undefined, IFunding, AxiosError>();
export const onGetPopularFundingAction = createAsyncAction(ON_GET_POPULAR_FUNDING_REQUEST, ON_GET_POPULAR_FUNDING_SUCCESS, ON_GET_POPULAR_FUNDING_FAILURE)<undefined, Array<IFunding>, AxiosError>();
export const onGetTodoFundingAction = createAsyncAction(ON_GET_TODO_FUNDING_REQUEST, ON_GET_TODO_FUNDING_SUCCESS, ON_GET_TODO_FUNDING_FAILURE)<undefined, Array<IFunding>, AxiosError>();