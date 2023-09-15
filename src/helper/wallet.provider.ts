/**
 * Returns an injected provider
 * @param walletType 'isMetaMask' | 'isCoinbaseWallet'
 * @returns Provider
 */
export function provider() {
    if (!window.ethereum) { throw new Error("No injected ethereum object."); }
    return Array.isArray(window.ethereum.providers)
        ? window.ethereum.providers.find((provider: any) => provider['isMetaMask'])
        : window.ethereum;
}