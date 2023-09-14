export const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract Funding",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "Create",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "goal",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "nftPrice",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "nftAmount",
                "type": "uint256[]"
            },
            {
                "internalType": "string[]",
                "name": "uris",
                "type": "string[]"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            }
        ],
        "name": "createFunding",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];