import {createAction, createAsyncAction} from "typesafe-actions";
import {IDonationNFT, IDonationRequest, IGetFundingRequest} from "../type/_container/funding.type";
import {IFunding} from "../type/_data/funding.type";
import {AxiosError} from "axios";
import {INFT} from "../type/_data/nft.type";
import {AbiItem} from "web3-utils";
import {IHistory, IInputHistory} from "../type/_data/history.type";
import {NavigateFunction} from "react-router-dom";

export const ON_GET_FUNDING_REQUEST = "funding/ON_GET_FUNDING_REQUEST" as const;
export const ON_GET_FUNDING_SUCCESS = "funding/ON_GET_FUNDING_SUCCESS" as const;
export const ON_GET_FUNDING_FAILURE = "funding/ON_GET_FUNDING_FAILURE" as const;

export const ON_GET_FUNDING_NFT_REQUEST = "funding/ON_GET_FUNDING_NFT_REQUEST" as const;
export const ON_GET_FUNDING_NFT_SUCCESS = "funding/ON_GET_FUNDING_NFT_SUCCESS" as const;
export const ON_GET_FUNDING_NFT_FAILURE = "funding/ON_GET_FUNDING_NFT_FAILURE" as const;

export const ON_GET_FUNDING_STORY_REQUEST = "funding/ON_GET_FUNDING_STORY_REQUEST" as const;
export const ON_GET_FUNDING_STORY_SUCCESS = "funding/ON_GET_FUNDING_STORY_SUCCESS" as const;
export const ON_GET_FUNDING_STORY_FAILURE = "funding/ON_GET_FUNDING_STORY_FAILURE" as const;

export const ON_CHANGE_HISTORY_PAGE = "funding/ON_CHANGE_HISTORY_PAGE" as const;

export const ON_TOGGLE_DONATION_MODAL = "funding/ON_TOGGLE_DONATION_MODAL" as const;
export const ON_SELECT_REWARD = "funding/ON_SELECT_REWARD" as const;
export const ON_CHANGE_DONATION_VALUE = "funding/ON_CHANGE_DONATION_VALUE" as const;
export const ON_CHANGE_BENEFICIARY = "funding/ON_CHANGE_BENEFICIARY" as const;
export const ON_CHANGE_SERVICE_AGREE = "funding/ON_CHANGE_SERVICE_AGREE" as const;
export const ON_CHANGE_PRIVACY_AGREE = "funding/ON_CHANGE_PRIVACY_AGREE" as const;
export const ON_CHANGE_ALL_AGREE = "funding/ON_CHANGE_ALL_AGREE" as const;
export const ON_SUBMIT_DONATION_INPUT = "funding/ON_SUBMIT_DONATION_INPUT" as const;
export const ON_GET_ABI_REQUEST = "funding/ON_GET_ABI_REQUEST" as const;
export const ON_GET_ABI_SUCCESS = "funding/ON_GET_ABI_SUCCESS" as const;
export const ON_GET_ABI_FAILURE = "funding/ON_GET_ABI_FAILURE" as const;
export const ON_SEND_DONATION_REQUEST = "funding/ON_SEND_DONATION_REQUEST" as const;
export const ON_SEND_DONATION_SUCCESS = "funding/ON_SEND_DONATION_SUCCESS" as const;
export const ON_SEND_DONATION_FAILURE = "funding/ON_SEND_DONATION_FAILURE" as const;
export const ON_INSERT_HISTORY_REQUEST = "funding/ON_INSERT_HISTORY_REQUEST" as const;
export const ON_INSERT_HISTORY_SUCCESS = "funding/ON_INSERT_HISTORY_SUCCESS" as const;
export const ON_INSERT_HISTORY_FAILURE = "funding/ON_INSERT_HISTORY_FAILURE" as const;

export const onGetFundingAction = createAsyncAction(ON_GET_FUNDING_REQUEST, ON_GET_FUNDING_SUCCESS, ON_GET_FUNDING_FAILURE)<IGetFundingRequest, IFunding, AxiosError>();
export const onGetFundingNFTAction = createAsyncAction(ON_GET_FUNDING_NFT_REQUEST, ON_GET_FUNDING_NFT_SUCCESS, ON_GET_FUNDING_NFT_FAILURE)<IGetFundingRequest, Array<INFT>, AxiosError>();
export const onGetFundingStoryAction = createAsyncAction(ON_GET_FUNDING_STORY_REQUEST, ON_GET_FUNDING_STORY_SUCCESS, ON_GET_FUNDING_STORY_FAILURE)<string, string, AxiosError>();
export const onChangeHistoryPageAction = createAction(ON_CHANGE_HISTORY_PAGE)<number>();
export const onToggleDonationModalAction = createAction(ON_TOGGLE_DONATION_MODAL)<undefined>();
export const onSelectRewardAction = createAction(ON_SELECT_REWARD)<IDonationNFT>();
export const onChangeDonationValueAction = createAction(ON_CHANGE_DONATION_VALUE)<number>();
export const onChangeBeneficiaryAction = createAction(ON_CHANGE_BENEFICIARY)<string>();
export const onChangeAllAgreeAction = createAction(ON_CHANGE_ALL_AGREE)<undefined>();
export const onChangeServiceAgreeAction = createAction(ON_CHANGE_SERVICE_AGREE)<undefined>();
export const onChangePrivacyAgreeAction = createAction(ON_CHANGE_PRIVACY_AGREE)<undefined>();
export const onSubmitDonationInputAction = createAction(ON_SUBMIT_DONATION_INPUT)<IDonationRequest>();
export const onGetABIAction = createAsyncAction(ON_GET_ABI_REQUEST, ON_GET_ABI_SUCCESS, ON_GET_ABI_FAILURE)<IDonationRequest, Array<AbiItem>, AxiosError>();
export const onSendDonationAction = createAsyncAction(ON_SEND_DONATION_REQUEST, ON_SEND_DONATION_SUCCESS, ON_SEND_DONATION_FAILURE)<IDonationRequest, IInputHistory, AxiosError>();
export const onInsertHistoryAction = createAsyncAction(ON_INSERT_HISTORY_REQUEST, ON_INSERT_HISTORY_SUCCESS, ON_INSERT_HISTORY_FAILURE)<{ history: IHistory, navigator: NavigateFunction }, boolean, AxiosError>();