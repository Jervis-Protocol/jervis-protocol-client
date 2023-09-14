import {IFundingSubmit, IUpdateReceiveParam} from "../type/_container/history.type";
import {getTransactionOptions} from "./summary.service";
import Web3 from "web3";
import {AbiItem} from "web3-utils";
import {post} from "../helper/axios-handler";

export const onUpdateReceiveHash = (params: IUpdateReceiveParam) => post("/api/funding/updateReceiveHash", params);
// export const onFundingSubmit = (params: IFundingSubmit) => params.funding.networkId === parseInt(process.env.REACT_APP_KLAYTN_NETWORKID!) ? onSubmitKlaytn(params) : onSubmitDefault(params);
export const onFundingSubmit = (params: IFundingSubmit) => onSubmitDefault(params);

const onSubmitKlaytn = async (params: IFundingSubmit) => {
    // @ts-ignore
    await window.klaytn.enable();
    // @ts-ignore
    const caver = new Caver(window.klaytn);
    const funding = new caver.klay.Contract(params.abi!, params.funding.address);
    const transaction = await funding.methods.withdraw();
    const transactionOption = getTransactionOptions(params.funding.networkId, params.funding.address);
    const receipt = await transaction.send(transactionOption);
    return receipt.transactionHash;
}

const onSubmitDefault = async (params: IFundingSubmit) => {
    // @ts-ignore
    await window.klaytn.enable();
    // @ts-ignore
    const web3 = new Web3(window.ethereum);
    const funding = new web3.eth.Contract(params.abi as Array<AbiItem>, params.funding.address);
    const transaction = await funding.methods.withdraw();
    const transactionOption = getTransactionOptions(params.funding.networkId, params.funding.address);
    const receipt = transaction.send(transactionOption);
    return receipt.transactionHash;
}