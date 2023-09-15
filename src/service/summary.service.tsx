import {IFunding, IInputFunding} from "../type/_data/funding.type";
import {get, post} from "../helper/axios-handler";
import {IInputNFT} from "../type/_data/nft.type";
import Web3 from "web3";
import {Contract} from "web3-eth-contract"
import {AbiItem} from "web3-utils";
import {IFundingFactory} from "../type/_data/contract.type";
import bigDecimal from "js-big-decimal";
import {ABI} from '../abis/factory.abi';
import {provider, requestAccount} from "../helper/wallet.provider.ts";
declare global {
    interface Window {
        ethereum: any;
        klaytn: any;
    }
}

export const onDataProcessing = (funding: IInputFunding): Promise<IInputFunding> => post('/api/funding/processing', funding);
export const onFundingCreate = (funding: IInputFunding): Promise<IFunding> => post('/api/funding/create', funding);
export const onGetFactory = (networkId: number): Promise<IFundingFactory> => get(`/api/funding/getFactory/${networkId}`);
// export const onFundingDeploy = (networkId: number, funding: IInputFunding, contractInfo: IFundingFactory): Promise<string> => networkId === 1001 || networkId === 8217
//     // ? onDeployKlaytn(setNFTValud(funding), contractInfo)
//     : onDeployBlockChain(setNFTValud(funding), contractInfo);
export const onFundingDeploy = (_networkId: number, funding: IInputFunding, contractInfo: IFundingFactory): Promise<string> => onDeployBlockChain(setNFTValud(funding), contractInfo);

const setNFTValud = (funding: IInputFunding) => {
    funding.nfts = funding.nfts!.map( nft => {
        nft.price = parseInt(Web3.utils.toWei(new bigDecimal(nft.price).getValue(), 'ether'));
        return nft;
    })
    return funding;
}
//
// const onDeployKlaytn = async (funding: IInputFunding, contractInfo: IFundingFactory) => {
//     console.log("funding: ", funding);
//     console.log(contractInfo);
//     // @ts-ignore
//     await window.klaytn.enable();
//     // @ts-ignore
//     const caver = new Caver(window.klaytn);
//     const factory = new caver.klay.Contract(ABI as ContractA, contractInfo.address);
//     const transaction = await setTransaction(funding, factory);
//     const transactionOptions = getTransactionOptions(contractInfo.networkId, contractInfo.address);
//     const receipts = await transaction.send(transactionOptions);
//     console.log(receipts);
//
//     return receipts!.events.Create.returnValues.addr
// }

const onDeployBlockChain = async (funding: IInputFunding, contractInfo: IFundingFactory) => {
    await provider().enable();
    console.log("ContractInfo: ", contractInfo);
    const web3 = new Web3(provider());
    const account = await requestAccount();
    const factory = new web3.eth.Contract(ABI as Array<AbiItem>, contractInfo.address);
    const transaction = await setTransaction(funding, factory);
    const transactionOptions = getTransactionOptions(contractInfo.networkId, contractInfo.address, account);
    const receipts = await transaction.send(transactionOptions);
    return receipts!.events.Create.returnValues.addr
}
const setTransaction = async (funding: IInputFunding, factory: Contract) => await factory.methods.createFunding(funding.goal, new Date(funding.sdate!).getTime() / 1000, new Date(funding.edate!).getTime() / 1000, getNFTPrice(funding.nfts!), getNFTAmount(funding.nfts!), getNFTURI(funding.nfts!), funding.title, funding.symbol!);
const getNFTPrice = (nfts: Array<IInputNFT>): Array<string> => nfts.map(nft => nft.price!.toString());
const getNFTAmount = (nfts: Array<IInputNFT>): Array<number> => nfts.map(nft => nft.max!);
const getNFTURI = (nfts: Array<IInputNFT>): Array<string> => nfts.map(nft => nft.uri!);

const parseToWei = (value: string) => parseInt(Web3.utils.toWei(new bigDecimal(value).getValue(), 'ether'));
export const getTransactionOptions = (networkId: number, to: string, from?: string) => {
    switch (networkId) {
        case 1001:
        case 8217: return {
            type: 'SMART_CONTRACT_EXECUTION',
            gas: '4300000',
            value: 0,
            to: to,
            from: window.klaytn.selectedAddress
        }
        default:
            return {
                gas: 8000000,
                value: 0,
                to: to,
                from: from
            }
    }
}
