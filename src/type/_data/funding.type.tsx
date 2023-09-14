import {IHistory} from "./history.type";
import {IInputNFT, INFT} from "./nft.type";
import {IUser} from "./user.type";

export type IFunding = {
    _id: string;
    type: number;
    networkId: number;
    address: string;
    owner: IUser;
    title: string;
    description: string;
    category: Array<number>;
    story: string;
    background: string;
    community: string;
    donation: number;
    goal: number;
    state: number;
    sdate: Date;
    edate: Date;
    createdAt: Date;
    carousel: boolean;
    popular: boolean;
    latest: boolean;
    beneficiary: string;
    receiveHash: string;
    history: Array<IHistory>;
    sColor?: string;
    eColor?: string;
    nfts?: Array<INFT>
}

export type IInputFunding = {
    type?: number;
    title?: string;
    address?: string;
    description?: string;
    category?: Array<number>;
    story?: string;
    background?: string;
    community?: string;
    goal?: string;
    symbol?: string;
    beneficiary?: string;
    sdate?: Date;
    edate?: Date;
    nfts?: Array<IInputNFT>
}