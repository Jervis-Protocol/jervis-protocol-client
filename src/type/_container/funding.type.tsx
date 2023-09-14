import * as actions from "../../action/funding.action";
import {ActionType} from "typesafe-actions";
import {IFunding} from "../_data/funding.type";
import {INFT} from "../_data/nft.type";
import {AbiItem} from "web3-utils";
import {NavigateFunction} from "react-router-dom";

export type IGetFundingRequest = {
    networkId: number,
    address: string
}

export type IFundingState = {
    funding?: IFunding,
    nfts: Array<INFT>,
    story: string,
    historyPage: number;
    init: boolean;
}

export type IFundingDonationState = {
    isOpenDonationModal: boolean;
    reward: IDonationNFT;
    agree: boolean
    agreePrivacy: boolean,
    agreeService: boolean,
    value: number;
    beneficiary: string;
}

export type IDonationInput = {
    agree: boolean;
    beneficiary: string;
    value: number;
    reward: IDonationNFT;
}

export type IDonationNFT = {
    index: number;
    price: number;
}

export type IDonationRequest = {
    input: IDonationInput,
    funding: IFunding,
    abi?: Array<AbiItem>,
    navigator: NavigateFunction
}

export type IFundingAction = ActionType<typeof actions>;