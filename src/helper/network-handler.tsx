import {INetwork, INetworkConnect} from "../type/_data/network.type";

export const networkInfo: INetwork = {
    1001: {
        symbol: 'KLAY',
        name: "Klaytn",
        wallet: "Kaikas",
        network: "Klaytn Baobab (TEST NET)",
        scan: "https://baobab.klaytnfinder.io/tx/",
        image: "/assets/img/klaytn.svg"
    },
    8217: {
        symbol: 'KLAY',
        name: "Klaytn",
        wallet: "Kaikas",
        network: "Klaytn Cypress (TEST NET)",
        scan: "https://www.klaytnfinder.io/tx/",
        image: "/assets/img/klaytn.svg"
    },
    80001: {
        symbol: 'MATIC',
        name: "Polygon",
        wallet: "metamask",
        network: "Polygon Mumbai (TEST NET)",
        scan: "https://mumbai.polygonscan.com/tx/",
        image: "/assets/img/polygon.svg"
    },
    137: {
        symbol: 'MATIC',
        name: "Polygon",
        wallet: "metamask",
        network: "Polygon Mainnet (MAIN NET)",
        scan: "https://polygonscan.com/tx/",
        image: "/assets/img/polygon.svg"
    },
    1: {
        symbol: 'ETH',
        name: "Ethereum",
        wallet: "metamask",
        network: "Ethereum Mainnet (MAIN NET)",
        scan: "https://etherscan.io/tx/",
        image: "/assets/img/ethereum.svg"
    },
    5: {
        symbol: 'ETH',
        name: "Ethereum",
        wallet: "metamask",
        network: "Ethereum Görli (MAIN NET)",
        scan: "https://goerli.etherscan.io/tx/",
        image: "/assets/img/ethereum.svg"
    },
    0: {
        symbol: '',
        name: "",
        wallet: "",
        network: "",
        scan: "",
        image: "/assets/img/klaytn.svg"
    }
}


export const WALLET_CONNECT_OPTION: INetworkConnect = {
    80001: {
        chainId: `0x${(80001).toString(16)}`,
        chainName: 'Matic Mumbai',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
        blockExplorerUrls: ['https://mumbai.ploygonscan.com']
    },
    137: {
        chainId: `0x${(137).toString(16)}`,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18
        },
        rpcUrls: ['https://polygon-rpc.com'],
        blockExplorerUrls: ['https://ploygonscan.com']
    },
    1:  {
        chainId: `0x${(1).toString(16)}`,
        chainName: 'Ethereum Mainnet',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
        blockExplorerUrls: ['https://mumbai.ploygonscan.com']
    },
    5: {
        chainId: `0x${(5).toString(16)}`,
        chainName: 'Ethereum Görli',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
        blockExplorerUrls: ['https://mumbai.ploygonscan.com']
    }
}