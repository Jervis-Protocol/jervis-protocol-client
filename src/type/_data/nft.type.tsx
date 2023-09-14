export type INFT = {
    index?: number
    name?: string;
    description?: string;
    image?: string;
    max: number;
    price: number;
    issued: number;
    uri: string
    state?: number
}

export type IInputNFT = {
    index?: number
    name?: string;
    description?: string;
    image?: string;
    max?: number
    price?: number
    uri?: string
}
