import {createAction, createAsyncAction} from "typesafe-actions";
import {AxiosError} from "axios";
import {IInputNFT} from "../type/_data/nft.type";
import {IInputFunding} from "../type/_data/funding.type";
import {NavigateFunction} from "react-router-dom";

export const ON_CHANGE_TITLE = "create/ON_CHANGE_TITLE" as const;
export const ON_CHANGE_DESCRIPTION = "create/ON_CHANGE_DESCRIPTION" as const;
export const ON_CHANGE_CATEGORY = "create/ON_CHANGE_CATEGORY" as const;
export const ON_CHANGE_SDATE = "create/ON_CHANGE_SDATE" as const;
export const ON_CHANGE_EDATE = "create/ON_CHANGE_EDATE" as const;
export const ON_CHANGE_RECEIVER = "create/ON_CHANGE_RECEIVER" as const;
export const ON_CHANGE_GOAL = "create/ON_CHANGE_GOAL" as const;
export const ON_CHANGE_COMMUNITY = "create/ON_CHANGE_COMMUNITY" as const;
export const ON_CHANGE_TYPE = "create/ON_CHANGE_TYPE" as const;
export const ON_CHANGE_STORY = "create/ON_CHANGE_STORY" as const;
export const ON_CHANGE_SYMBOL = "create/ON_CHANGE_SYMBOL" as const;

export const ON_UPLOAD_STORY_IMAGE_REQUEST = "create/ON_UPLOAD_STORY_IMAGE_REQUEST" as const;
export const ON_UPLOAD_STORY_IMAGE_SUCCESS = "create/ON_UPLOAD_STORY_IMAGE_SUCCESS" as const;
export const ON_UPLOAD_STORY_IMAGE_FAILURE = "create/ON_UPLOAD_STORY_IMAGE_FAILURE" as const;
export const ON_UPLOAD_BACKGROUND_IMAGE_REQUEST = "create/ON_UPLOAD_BACKGROUND_IMAGE_REQUEST" as const;
export const ON_UPLOAD_BACKGROUND_IMAGE_SUCCESS = "create/ON_UPLOAD_BACKGROUND_IMAGE_SUCCESS" as const;
export const ON_UPLOAD_BACKGROUND_IMAGE_FAILURE = "create/ON_UPLOAD_BACKGROUND_IMAGE_FAILURE" as const;
export const ON_UPLOAD_NFT_IMAGE_REQUEST = "create/ON_UPLOAD_NFT_IMAGE_REQUEST" as const;
export const ON_UPLOAD_NFT_IMAGE_SUCCESS = "create/ON_UPLOAD_NFT_IMAGE_SUCCESS" as const;
export const ON_UPLOAD_NFT_IMAGE_FAILURE = "create/ON_UPLOAD_NFT_IMAGE_FAILURE" as const;

export const ON_ADD_NFT = "create/ON_ADD_NFT" as const;
export const ON_INPUT_VALIDATION = "create/ON_INPUT_VALIDATION" as const;

export const onChangeTitleAction = createAction(ON_CHANGE_TITLE)<string>();
export const onChangeDescriptionAction = createAction(ON_CHANGE_DESCRIPTION)<string>();
export const onChangeCategoryAction = createAction(ON_CHANGE_CATEGORY)<number>();
export const onChangeSDateAction = createAction(ON_CHANGE_SDATE)<Date>();
export const onChangeEDateAction = createAction(ON_CHANGE_EDATE)<Date>();
export const onChangeReceiverAction = createAction(ON_CHANGE_RECEIVER)<string>();
export const onchangeGoalAction = createAction(ON_CHANGE_GOAL)<string>();
export const onChangeCommunityAction = createAction(ON_CHANGE_COMMUNITY)<string>();
export const onChangeTypeAction = createAction(ON_CHANGE_TYPE)<number>();
export const onChangeStoryAction = createAction(ON_CHANGE_STORY)<string>();
export const onChangeSymbolAction = createAction(ON_CHANGE_SYMBOL)<string>();

export const onUploadStoryImageAction = createAsyncAction(ON_UPLOAD_STORY_IMAGE_REQUEST, ON_UPLOAD_STORY_IMAGE_SUCCESS, ON_UPLOAD_STORY_IMAGE_FAILURE)<File, string, AxiosError>();
export const onUploadBackgroundImageAction = createAsyncAction(ON_UPLOAD_BACKGROUND_IMAGE_REQUEST, ON_UPLOAD_BACKGROUND_IMAGE_SUCCESS, ON_UPLOAD_BACKGROUND_IMAGE_FAILURE)<File, string, AxiosError>()
export const onUploadNFTImageAction = createAsyncAction(ON_UPLOAD_NFT_IMAGE_REQUEST, ON_UPLOAD_NFT_IMAGE_SUCCESS, ON_UPLOAD_NFT_IMAGE_FAILURE)<File, string, AxiosError>();
export const onAddNFTAction = createAction(ON_ADD_NFT)<IInputNFT>();

export const onInputValidationAction = createAction(ON_INPUT_VALIDATION)<{ input: IInputFunding, navigator: NavigateFunction }>();