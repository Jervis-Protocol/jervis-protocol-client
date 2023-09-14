import {IHomeAction, IHomeState} from "../type/_container/home.type";
import {createReducer} from "typesafe-actions";
import {
    ON_GET_MAIN_FUNDING_SUCCESS,
    ON_GET_POPULAR_FUNDING_SUCCESS,
    ON_GET_TODO_FUNDING_SUCCESS
} from "../action/home.action";

const initialState: IHomeState = {
    mainFunding: undefined,
    popularFunding: Array(),
    todoFunding: Array()
}

const HomeReducer = createReducer<IHomeState, IHomeAction>(initialState, {
    [ON_GET_MAIN_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        mainFunding: action.payload
    }),
    [ON_GET_POPULAR_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        popularFunding: action.payload
    }),
    [ON_GET_TODO_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        todoFunding: action.payload
    })
})

export default HomeReducer;