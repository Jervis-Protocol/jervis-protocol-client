import {IHistoryAction, IHistoryState} from "../type/_container/history.type";
import {createReducer} from "typesafe-actions";
import {ON_GET_FUNDING_SUCCESS, ON_GET_NFT_SUCCESS} from "../action/history.action";

const initialState: IHistoryState = {
    funding: undefined,
    nfts: Array()
}

const HistoryReducer = createReducer<IHistoryState, IHistoryAction>(initialState, {
    [ON_GET_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        funding: action.payload
    }),
    [ON_GET_NFT_SUCCESS]: (state, action) => ({
        ...state,
        nfts: action.payload
    })
})

export default HistoryReducer;