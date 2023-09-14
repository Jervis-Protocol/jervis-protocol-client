import {ISearchAction, ISearchState} from "../type/_container/search.type";
import {IFunding} from "../type/_data/funding.type";
import {createReducer} from "typesafe-actions";
import {
    ON_CHANGE_QUERY_REQUEST,
    ON_CHANGE_QUERY_SUCCESS,
    ON_CHANGE_STATE_REQUEST,
    ON_GET_FUNDING_FAILURE,
    ON_GET_FUNDING_REQUEST,
    ON_GET_FUNDING_SUCCESS,
    ON_TOGGLE_LOADING
} from "../action/search.action";

const initialState: ISearchState = {
    fundingList: Array<IFunding>(),
    query: "",
    isLoading: false,
    state: '',
    pageIndex: 0
}

const SearchReducer = createReducer<ISearchState, ISearchAction>(initialState, {
    [ON_GET_FUNDING_REQUEST]: (state, action) => ({
       ...state,
        fundingList: action.payload.pageIndex === 0 ? Array() : state.fundingList
    }),
    [ON_GET_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        fundingList: [...state.fundingList, ...action.payload],
        pageIndex: state.pageIndex + 1
    }),
    [ON_GET_FUNDING_FAILURE]: (state, action) => ({
        ...state,
    }),
    [ON_TOGGLE_LOADING]: (state, action) => ({
        ...state,
        isLoading: action.payload
    }),
    [ON_CHANGE_QUERY_REQUEST]: (state, action )=> ({
        ...state,
        fundingList: Array<IFunding>(),
        pageIndex: 0
    }),
    [ON_CHANGE_QUERY_SUCCESS]: (state, action) => ({
        ...state,
        query: action.payload,
    }),
    [ON_CHANGE_STATE_REQUEST]: (state, action) => ({
        ...state,
        fundingList: Array<IFunding>(),
        pageIndex: 0,
        state: action.payload
    }),
})

export default SearchReducer