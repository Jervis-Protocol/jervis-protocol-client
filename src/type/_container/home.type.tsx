import {IFunding} from "../_data/funding.type";
import * as actions from "../../action/home.action";
import {ActionType} from "typesafe-actions";

export type IHomeState = {
    mainFunding?: IFunding;
    popularFunding: Array<IFunding>;
    todoFunding: Array<IFunding>
}

export type IHomeAction = ActionType<typeof actions>;