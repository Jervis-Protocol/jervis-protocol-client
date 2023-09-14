import {IHeaderAction, IHeaderState} from "../type/_container/header.type";
import {createReducer} from "typesafe-actions";
import {ON_DISCONNECT_WALLET_SUCCESS, ON_GET_CATEGORY_SUCCESS, ON_GET_USER_SUCCESS} from "../action/header.action";

const initialState: IHeaderState = {
    user: undefined,
    categories: Array()
}

const HeaderReducer = createReducer<IHeaderState, IHeaderAction>(initialState, {
    [ON_GET_USER_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload
    }),
    [ON_DISCONNECT_WALLET_SUCCESS]: (state, action) => ({
        ...state,
        user: undefined
    }),
    [ON_GET_CATEGORY_SUCCESS]: (state, action) => ({
        ...state,
        categories: action.payload
    })
})

export default HeaderReducer;