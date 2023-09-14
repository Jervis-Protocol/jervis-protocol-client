import {IUser} from "./user.type";

export type ResponseType = {
    state: boolean;
    data?: any;
    message?: string
}

export type IAuthResponse = {
    user: IUser;
    token: string
}