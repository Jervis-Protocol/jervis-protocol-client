import Web3 from "web3";
import {getKaikasAuthMessage, getMetamaskAuthMessage} from "../helper/connect-message";
import {IWalletAuth} from "../type/_data/wallet.auth";
import {post} from "../helper/axios-handler";
import {WALLET_CONNECT_OPTION} from "../helper/network-handler";
import {INetworkConnectInfo} from "../type/_data/network.type";
import {provider} from "../helper/wallet.provider.ts";


export const onConnect = (networkId: number) => onConnectMetamask(networkId);
export const onChangeNetwork = (networkId: number) => onChangeNetworkMetamask(networkId);
export const onLogin = (walletAuth: IWalletAuth) => post("/api/user/connect", walletAuth);

const onConnectKlaytn = async (networkId: number): Promise<IWalletAuth> => {
    // @ts-ignore
    await window.klaytn.enable();
    // @ts-ignore
    const caver = new Caver(window.klaytn);
    const message = getKaikasAuthMessage(networkId);
    // @ts-ignore
    if (!window.klaytn.selectedAddress) {
        // @ts-ignore
        await window.klaytn.enable();
    }

    // @ts-ignore
    const signedMessage = await caver.klay.sign(message, window.klaytn.selectedAddress);
    console.log(signedMessage)
    // @ts-ignore
    return { networkId: networkId, address: window.klaytn.selectedAddress.toLowerCase(), sign: signedMessage };
}

async function requestAccount() {
    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        return accounts[0];
    } catch (error) {
        console.error('User denied account access');
        return null;
    }
}

const onConnectMetamask = async (networkId: number): Promise<IWalletAuth> => {
    await requestAccount();
    // @ts-ignore
    await provider().enable();
    // @ts-ignore
    const web3 = new Web3(provider());
    const message = getMetamaskAuthMessage(networkId);
    // @ts-ignore
    const address = provider().selectedAddress
    // @ts-ignore
    const signedMessage = await provider().request({method: 'eth_signTypedData_v4', params: [address, message]})
    console.log(signedMessage);

    return { networkId: networkId, address: address.toLowerCase(), sign: signedMessage };
}
export const onAddNetwork = async (networkId: number) => {
    const addOptions: INetworkConnectInfo  = WALLET_CONNECT_OPTION[networkId]
    // @ts-ignore
    await provider().request({method: 'wallet_addEthereumChain', params: [addOptions]});
    return true;
}

export const onChangeNetworkMetamask = async (networkId: number) => {
    // @ts-ignore
    if (typeof window.ethereum === 'undefined')
        throw ({code: 60000, message: "메타마스크를 설치해주세요."})

    // @ts-ignore
    await provider().request({method: 'wallet_switchEthereumChain', params: [{chainId: WALLET_CONNECT_OPTION[networkId].chainId}]});
    return true;
}


export const onChangeNetworkKaikas = async (networkId: number) => {
    // @ts-ignore
    if (typeof window.klaytn === 'undefined')
        throw ({ code: 60000, message: "카이카스를 설치해주세요."});
    // @ts-ignore
    await window.klaytn.request({method: 'wallet_switchEthereumChain', params: [{ chainId: `0x${networkId.toString(16)}`}]});
    return true;
}
