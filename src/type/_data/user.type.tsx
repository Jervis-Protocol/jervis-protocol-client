import {IReceipt} from "./receipt.type";
import {IFunding} from "./funding.type";

export type IUser = {
    _id: string;
    networkId: number;
    address: string;
    sign: string;
    email: string;
    nickname: string;
    image: string;
    description: string;
    receipts: Array<IReceipt>;
    create: Array<IFunding>;
    createdAt: Date;
}

export type IUpdateUser = {
    _id?: string,
    networkId: number;
    address: string;
    email: string;
    nickname: string;
    image: string;
    description: string;
}