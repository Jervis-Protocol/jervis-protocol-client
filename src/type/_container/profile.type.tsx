import {IUser} from "../_data/user.type";
import * as actions from "../../action/profile.action";
import {ActionType} from "typesafe-actions";

export type IProfileState = {
    user?: IUser,
    auth: boolean,
}

export type IGetUserParams = {
    networkId: number;
    address: string;
}

export type IProfileAction = ActionType<typeof actions>;