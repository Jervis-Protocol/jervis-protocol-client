export type IHistory = {
    _id?: string,
    funding: string,
    transactionHash: string;
    value: number;
    createdAt: Date;
    sender: string;
    refundHash?: string;
    beneficiary: string;
}

export type IInputHistory = {
    funding?: string,
    transactionHash: string;
    value?: number;
    createdAt?: Date;
    sender: string;
    beneficiary?: string;
}