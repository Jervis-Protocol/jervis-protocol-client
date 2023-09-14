import {networkInfo} from "./network-handler";

export const getKaikasAuthMessage = (networkId: number) => `
message: 키다리 펀딩의 인증 메세지에 서명하시겠습니까?\n\n해당 인증은 사용자 인증으로만 사용 합니다.
company
  - name: Jervis Labs,
  - auth: https://funding.jervis.kr,
network
  - chainId: ${networkId},
  - chainName: ${networkInfo[networkId].network},
  - symbol: ${networkInfo[networkId].symbol}
wallet: 'Kaikas'
`


export const getMetamaskAuthMessage = (networkId: number) => {
    return JSON.stringify({
        domain: {
            // Defining the chain aka Rinkeby testnet or Ethereum Main Net
            chainId: networkId,
            // Give a user friendly name to the specific contract you are signing for.
            name: 'KeeDaRi Funding',
            // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
            verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
            // Just let's you know the latest version. Definitely make sure the field name is correct.
            version: '1',
        },

        // Defining the message signing data content.
        message: {
            /*
             - Anything you want. Just a JSON Blob that encodes the data you want to send
             - No required fields
             - This is DApp Specific
             - Be as explicit as possible when building out the message schema.
            */
            message: '키다리 펀딩의 인증 메세지에 서명하시겠습니까?\n\n해당 인증은 사용자 인증으로만 사용 합니다.',
            company: {
                name: 'Jervis Labs',
                auth: 'https://funding.jervis.kr',
            },
            network: {
                chainId: networkId,
                chainName: networkInfo[networkId].network,
                symbol: networkInfo[networkId].symbol
            },
            wallet: 'MetaMask'
        },
        // Refers to the keys of the *types* object below.
        primaryType: 'Auth',
        types: {
            // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
            EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
                { name: 'chainId', type: 'uint256' },
                { name: 'verifyingContract', type: 'address' },
            ],
            // Refer to PrimaryType
            Auth: [
                { name: 'message', type: 'string' },
                { name: 'company', type: 'Company' },
                { name: 'network', type: 'NetworkInfo' },
                { name: 'wallet', type: 'string' },
            ],
            Company: [
                { name: 'name', type: 'string' },
                { name: 'auth', type: 'string' },
            ],
            NetworkInfo: [
                { name: 'chainId', type: 'uint256' },
                { name: 'chainName', type: 'string' },
                { name: 'symbol', type: 'string' },
            ]
        },
    });
}

