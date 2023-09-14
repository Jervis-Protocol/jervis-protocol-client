import * as actions from "../../action/header.action";
import {IUser} from "../_data/user.type";
import {ICategory} from "../_data/category.type";
import {ActionType} from "typesafe-actions";

export type IHeaderState = {
    user?: IUser;
    categories: Array<ICategory>
}

export type IHeaderAction = ActionType<typeof actions>