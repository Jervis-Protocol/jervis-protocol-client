import {createAsyncAction} from "typesafe-actions";
import {IFunding, IInputFunding} from "../type/_data/funding.type";
import {NavigateFunction} from "react-router-dom";
import {AxiosError} from "axios";
import {IFundingFactory} from "../type/_data/contract.type";

export const ON_DATA_PROCESSING_REQUEST = "summary/ON_DATA_PROCESSING_REQUEST" as const;
export const ON_DATA_PROCESSING_SUCCESS = "summary/ON_DATA_PROCESSING_SUCCESS" as const;
export const ON_DATA_PROCESSING_FAILURE = "summary/ON_DATA_PROCESSING_FAILURE" as const;

export const ON_FUNDING_CREATE_REQUEST = "summary/ON_FUNDING_CREATE_REQUEST" as const;
export const ON_FUNDING_CREATE_SUCCESS = "summary/ON_FUNDING_CREATE_SUCCESS" as const;
export const ON_FUNDING_CREATE_FAILURE = "summary/ON_FUNDING_CREATE_FAILURE" as const;

export const ON_FUNDING_DEPLOY_REQUEST = "summary/ON_FUNDING_DEPLOY_REQUEST" as const;
export const ON_FUNDING_DEPLOY_SUCCESS = "summary/ON_FUNDING_DEPLOY_SUCCESS" as const;
export const ON_FUNDING_DEPLOY_FAILURE = "summary/ON_FUNDING_DEPLOY_FAILURE" as const;

export const ON_GET_FACTORY_REQUEST = "summary/ON_GET_FACTORY_REQUEST" as const;
export const ON_GET_FACTORY_SUCCESS = "summary/ON_GET_FACTORY_SUCCESS" as const;
export const ON_GET_FACTORY_FAILURE = "summary/ON_GET_FACTORY_FAILURE" as const;


export const onDataProcessingAction = createAsyncAction(ON_DATA_PROCESSING_REQUEST, ON_DATA_PROCESSING_SUCCESS, ON_DATA_PROCESSING_FAILURE)<{ funding: IInputFunding, networkId: number, navigator: NavigateFunction }, IInputFunding, AxiosError>()
export const onFundingDeployAction = createAsyncAction(ON_FUNDING_DEPLOY_REQUEST, ON_FUNDING_DEPLOY_SUCCESS, ON_FUNDING_DEPLOY_FAILURE)<{ funding: IInputFunding, networkId: number, navigator: NavigateFunction, factory: IFundingFactory }, any, string>();
export const onFundingCreateAction = createAsyncAction(ON_FUNDING_CREATE_REQUEST, ON_FUNDING_CREATE_SUCCESS, ON_FUNDING_CREATE_FAILURE)<{ funding: IInputFunding, navigator: NavigateFunction }, IFunding, string>();
export const onGetFactoryAction = createAsyncAction(ON_GET_FACTORY_REQUEST, ON_GET_FACTORY_SUCCESS, ON_GET_FACTORY_FAILURE)<{ funding: IInputFunding, networkId: number, navigator: NavigateFunction }, IFundingFactory, string>();