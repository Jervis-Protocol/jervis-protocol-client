export type INetworkInfo = {
    symbol: string;
    name: string;
    network: string;
    wallet: string;
    scan: string;
    image: string;
}

export type INetworkConnectInfo = {
    chainId: string;
    chainName?: string;
    nativeCurrency?: any;
    rpcUrls?: Array<string>;
    blockExplorerUrls?: Array<string>;
}

export type INetwork = {
    [networkId: number]: INetworkInfo ;
    1001: INetworkInfo
    8217: INetworkInfo;
    80001: INetworkInfo;
    137: INetworkInfo;
    1: INetworkInfo;
    5: INetworkInfo;
}

export type INetworkConnect = {
    [networkId: number]: INetworkConnectInfo ;
    80001: INetworkConnectInfo;
    137: INetworkConnectInfo;
    1: INetworkConnectInfo;
    5: INetworkConnectInfo;
}
