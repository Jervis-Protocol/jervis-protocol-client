/**
 * Returns an injected provider
 * @param walletType 'isMetaMask' | 'isCoinbaseWallet'
 * @returns Provider
 */
export function provider() {
    console.log('provider', window.ethereum.providers);
    if (!window.ethereum) { throw new Error("No injected ethereum object."); }
    return Array.isArray(window.ethereum.providers)
        ? window.ethereum.providers.find((provider: any) => provider['isMetaMask'])
        : window.ethereum;
}

export async function requestAccount() {
    try {
        const accounts = await provider().request({
            method: 'eth_requestAccounts',
        });
        return accounts[0];
    } catch (error) {
        console.error('User denied account access');
        return null;
    }
}

//size book search announce razor quantum undo crack vehicle inherit stamp shuffle depth arrange space august faculty toward label utility final blast alpha travel