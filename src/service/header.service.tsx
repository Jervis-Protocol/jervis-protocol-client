import {get} from "../helper/axios-handler";
import {provider} from "../helper/wallet.provider.ts"

export const onDisconnectWallet = () => get('/api/user/unConnect');
export const onGetUser = async () => get("/api/user/selfV2");
export const onGetCategory = () => get("/api/common/category");

export const onSetWalletListener = (networkId: number) => networkId === 1001 || networkId === 8217 ? setListenerKaiKas() : setListenerMetaMask();
const setListenerKaiKas = () => new Promise(resolve => {
    // @ts-ignore
    window.klaytn.on('accountsChanged',() => resolve(true));
    // @ts-ignore
    window.klaytn.on('networkChanged',() => resolve(true));
})

const setListenerMetaMask = () => new Promise(resolve => {
    // @ts-ignore
    provider().on('accountsChanged',() => resolve(true));
    // @ts-ignore
    provider().on('networkChanged',() => resolve(true));
})