import {IFundingAction, IFundingState} from "../type/_container/funding.type";
import {createReducer} from "typesafe-actions";
import {
    ON_GET_FUNDING_NFT_REQUEST,
    ON_GET_FUNDING_NFT_SUCCESS,
    ON_GET_FUNDING_REQUEST,
    ON_GET_FUNDING_STORY_REQUEST,
    ON_GET_FUNDING_STORY_SUCCESS,
    ON_GET_FUNDING_SUCCESS
} from "../action/funding.action";

const initialState: IFundingState = {
    funding: undefined,
    historyPage: 1,
    nfts: Array(),
    story: "",
    init: false,
}

const FundingReducer = createReducer<IFundingState, IFundingAction>(initialState, {
    [ON_GET_FUNDING_REQUEST]: (state, action) => ({
        ...state,
        funding: undefined,
        onSelectedReward: 0
    }),
    [ON_GET_FUNDING_SUCCESS]: (state, action) => ({
        ...state,
        funding: action.payload,
        init: state.nfts.length > 0 && state.story.length > 0
    }),
    [ON_GET_FUNDING_NFT_REQUEST]: (state, action) => ({
        ...state,
        nfts: Array()
    }),
    [ON_GET_FUNDING_NFT_SUCCESS]: (state, action) => ({
        ...state,
        nfts: action.payload,
        init: state.story.length > 0
    }),
    [ON_GET_FUNDING_STORY_REQUEST]: (state, action) => ({
        ...state,
        story: '',
    }),
    [ON_GET_FUNDING_STORY_SUCCESS]: (state, action) => ({
        ...state,
        story: action.payload,
        init: state.nfts.length > 0
    }),
})

export default FundingReducer;