import {IFunding} from "../_data/funding.type";
import * as actions from "../../action/search.action";
import {ActionType} from "typesafe-actions";

export type ISearchQuery = {
    pageIndex: number;
    query: string;
}

export type ISearchState = {
    fundingList: Array<IFunding>;
    query: string;
    pageIndex: number;
    isLoading: boolean,
    state: string;
}

export type ISearchAction = ActionType<typeof actions>;