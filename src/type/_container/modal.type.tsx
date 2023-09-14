import * as actions from "../../action/modal.action";
import {ActionType} from "typesafe-actions";

export type IModalState = {
    isOpenConnectModal: boolean;
    isOpenNoticeModal: boolean;
    isOpenLoadingModal: boolean;
    isOpenEmailModal: boolean;
    isOpenValidModal: boolean;

    noticeMessage: string;
    email?: string;
    authFail?: boolean;
}

export type IModalAction = ActionType<typeof actions>;