import {IFunding} from "../_data/funding.type";
import {INFT} from "../_data/nft.type";
import * as actions from "../../action/history.action";
import {ActionType} from "typesafe-actions";
import {AbiItem} from "web3-utils";

export type IHistoryState = {
    funding?: IFunding;
    nfts?: Array<INFT>
}

export type IFundingSubmit = {
    funding: IFunding,
    abi?: Array<AbiItem>
}

export type IUpdateReceiveParam = {
    _id: string,
    transactionHash: string
}

export type IHistoryAction = ActionType<typeof actions>;