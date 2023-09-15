import {IDonationInput, IDonationRequest, IGetFundingRequest} from "../type/_container/funding.type";
import {get, post} from "../helper/axios-handler";
import {onChangeNetwork} from "./modal.connect.service";
import {AbiItem} from "web3-utils";
import {IHistory} from "../type/_data/history.type";
import {INFT} from "../type/_data/nft.type";
import Web3 from "web3";
import bigDecimal from "js-big-decimal";
import {provider, requestAccount} from "../helper/wallet.provider.ts"

export const onGetFunding = (requestParam: IGetFundingRequest) => get(`/api/funding/get/${requestParam.networkId}/${requestParam.address}`).then( response => response.funding);
export const onGetFundingNFT = (requestParam: IGetFundingRequest) => get(`/api/funding/nft/${requestParam.networkId}/${requestParam.address}`).then( nfts => nfts.map((nft: INFT) => {
    nft.price = parseFloat(Web3.utils.fromWei(new bigDecimal(nft.price).getValue(), 'ether'));
    return nft
}));
export const onGetFundingStory = (storyURL: string) => post(`/api/funding/getStory`, { story: storyURL });

export const onSubmitDonationInput = (input: IDonationInput) => {
    if (input.agree !== true)
        throw { message: "약관에 동의해주세요. "};
    else if (input.value < 0.00000000001)
        throw { message: "후원하는 금액을 확인해주세요. "};
    else if (input.value < input.reward.price)
        throw { message: "후원하는 금액이 리워드 후원금액보다 작습니다."};
    else if (input.beneficiary.length !== 42)
        throw { message: "리워드 발행 주소를 확인해주세요. "};
    return;
}
export const onGetAbi = () => get('/api/funding/getABI').then( data => data.abi);
export const onInsertHistory = (history: IHistory) => post('/api/funding/insertHistory', history);
export const onSendDonation = async (input: IDonationRequest) => input.funding.networkId === 1001 || input.funding.networkId === 8217 ? onSendDonationKlaytn(input) : onSendDonationDefault(input);

const onSendDonationKlaytn = async (params: IDonationRequest) => {
    const {funding, abi, input} = params;
    await onChangeNetwork(params.funding.networkId);
    // @ts-ignore
    await window.klaytn.enable();
    // @ts-ignore
    // const caver = new Caver(window.klaytn);
    // const contract = new caver.klay.Contract(abi as Array<KAbiItem>, funding.address);
    // const transaction = await contract.methods.donate(input.reward.index) ;
    // const transactionOption = getTransactionOption(funding.networkId, input.value, funding.address);
    // const receipts = await transaction.send(transactionOption);
    // return { transactionHash: receipts.transactionHash, sender: transactionOption.from };
    return;
}

const onSendDonationDefault = async (params: IDonationRequest) => {
    const {funding, abi, input} = params;
    await onChangeNetwork(params.funding.networkId);
    // @ts-ignore
    await provider().enable();
    // @ts-ignore
    const web3 = new Web3(provider());
    const contract = new web3.eth.Contract(abi as Array<AbiItem>, funding.address);
    const account = await requestAccount();
    const transaction = await contract.methods.donate(input.reward.index);
    const transactionOption = getTransactionOption(funding.networkId, input.value, funding.address, account);
    const receipts = await transaction.send(transactionOption);
    return { transactionHash: receipts.transactionHash, sender: transactionOption.from };
}


const getTransactionOption = (networkId: number, value: number, to: string, from: string) => {
    return {
        gas: '250000',
        value: Web3.utils.toWei(value.toString()),
        to: to,
        // @ts-ignore
        from: from
    }
}
