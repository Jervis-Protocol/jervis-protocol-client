import * as actions from "../../action/create.action";
import {ActionType} from "typesafe-actions";
import {IInputNFT} from "../_data/nft.type";

export type ICreateState = {
    type?: number;
    title?: string;
    address?: string;
    description?: string;
    category: Array<number>;
    story?: string;
    background?: string;
    community?: string;
    goal?: string;
    symbol?: string;
    beneficiary?: string;
    sdate?: Date;
    edate?: Date;
    nfts?: Array<IInputNFT>

    nftTitle?: string,
    nftDescription?: string,
    nftImage?: string,
    nftPrice?: number,
    nftMax?: number
}

export type ICreateAction = ActionType<typeof actions>;
