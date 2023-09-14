import {IUpdateUser} from "../_data/user.type";
import * as action from "../../action/edit.action";
import {ActionType} from "typesafe-actions";
import {NavigateFunction} from "react-router-dom";

export type IEditState = {
    nicknameValid?: boolean;
    nickname: string;
    email: string;
    description: string;
    image: string;
}

export type IEditEmailModalState = {
    isOpenEmailModal: boolean
    email: string;
    error?: boolean
}

export type IEditValidModalState = {
    isOpenValidModal: boolean,
    input?: number;
    error?: boolean;
}

export type IEditSubmitParams = {
    user: IUpdateUser,
    navigator: NavigateFunction
}

export type IValid = {
    input: string;
    error?: boolean;
}

export type IEditAction = ActionType<typeof action>;