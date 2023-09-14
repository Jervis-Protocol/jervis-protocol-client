import {IFunding} from "./funding.type";

export type IReceipt = {
    _id: string,
    funding: IFunding,
    state: boolean,
    transactionHash?: string,
    createdAt: Date
}