import {AbiItem as eAbiItem} from "web3-utils"

export type IFundingFactory = {
    networkId: number;
    address: string;
    abi: Array<eAbiItem>
}