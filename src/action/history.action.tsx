import {createAsyncAction} from "typesafe-actions";
import {IGetFundingRequest} from "../type/_container/funding.type";
import {IFunding} from "../type/_data/funding.type";
import {AxiosError} from "axios";
import {INFT} from "../type/_data/nft.type";
import {IFundingSubmit, IUpdateReceiveParam} from "../type/_container/history.type";

export const ON_GET_FUNDING_REQUEST = "history/ON_GET_FUNDING_REQUEST" as const;
export const ON_GET_FUNDING_SUCCESS = "history/ON_GET_FUNDING_SUCCESS" as const;
export const ON_GET_FUNDING_FAILURE = "history/ON_GET_FUNDING_FAILURE" as const;

export const ON_GET_NFT_REQUEST = "history/ON_GET_NFT_REQUEST" as const;
export const ON_GET_NFT_SUCCESS = "history/ON_GET_NFT_SUCCESS" as const;
export const ON_GET_NFT_FAILURE = "history/ON_GET_NFT_FAILURE" as const;

export const ON_FUNDING_SUBMIT_REQUEST = "history/ON_FUNDING_SUBMIT_REQUEST" as const;
export const ON_FUNDING_SUBMIT_SUCCESS = "history/ON_FUNDING_SUBMIT_SUCCESS" as const;
export const ON_FUNDING_SUBMIT_FAILURE = "history/ON_FUNDING_SUBMIT_FAILURE" as const;

export const ON_GET_ABI_REQUEST = "history/ON_GET_ABI_REQUEST" as const;
export const ON_GET_ABI_SUCCESS = "history/ON_GET_ABI_SUCCESS" as const;
export const ON_GET_ABI_FAILURE = "history/ON_GET_ABI_FAILURE" as const;

export const ON_UPDATE_RECEIVE_HASH_REQUEST = "history/ON_UPDATE_RECEIVE_HASH_REQUEST" as const;
export const ON_UPDATE_RECEIVE_HASH_SUCCESS = "history/ON_UPDATE_RECEIVE_HASH_SUCCESS" as const;
export const ON_UPDATE_RECEIVE_HASH_FAILURE = "history/ON_UPDATE_RECEIVE_HASH_FAILURE" as const;

export const onGetFundingAction = createAsyncAction(ON_GET_FUNDING_REQUEST, ON_GET_FUNDING_SUCCESS, ON_GET_FUNDING_FAILURE)<IGetFundingRequest, IFunding, AxiosError>();
export const onGetNFTAction = createAsyncAction(ON_GET_NFT_REQUEST, ON_GET_NFT_SUCCESS, ON_GET_NFT_FAILURE)<IGetFundingRequest, Array<INFT>, AxiosError>();
export const onFundingSubmitAction = createAsyncAction(ON_FUNDING_SUBMIT_REQUEST, ON_FUNDING_SUBMIT_SUCCESS, ON_FUNDING_SUBMIT_FAILURE)<IFundingSubmit, string, AxiosError>();
export const onUpdateReceiveHashAction = createAsyncAction(ON_UPDATE_RECEIVE_HASH_REQUEST, ON_UPDATE_RECEIVE_HASH_SUCCESS, ON_UPDATE_RECEIVE_HASH_FAILURE)<IUpdateReceiveParam, boolean, AxiosError>();
export const onGetABIAction = createAsyncAction(ON_GET_ABI_REQUEST, ON_GET_ABI_SUCCESS, ON_GET_ABI_FAILURE)<IFundingSubmit, IFundingSubmit, AxiosError>();