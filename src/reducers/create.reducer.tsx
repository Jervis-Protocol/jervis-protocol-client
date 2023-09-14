import {ICreateAction, ICreateState} from "../type/_container/create.type";
import {createReducer} from "typesafe-actions";
import {
    ON_ADD_NFT,
    ON_CHANGE_CATEGORY,
    ON_CHANGE_COMMUNITY,
    ON_CHANGE_DESCRIPTION,
    ON_CHANGE_EDATE,
    ON_CHANGE_GOAL,
    ON_CHANGE_RECEIVER,
    ON_CHANGE_SDATE,
    ON_CHANGE_STORY,
    ON_CHANGE_SYMBOL,
    ON_CHANGE_TITLE,
    ON_CHANGE_TYPE,
    ON_UPLOAD_BACKGROUND_IMAGE_SUCCESS,
    ON_UPLOAD_NFT_IMAGE_SUCCESS
} from "../action/create.action";

const initialState: ICreateState = {
    title: undefined,
    description: undefined,
    community: undefined,
    category: Array(),
    type: undefined,
    edate: undefined,
    sdate: undefined,
    symbol: undefined,
    goal: undefined,
    address: undefined,
    background: undefined,
    nfts: Array(),
    story: undefined,
    beneficiary: undefined,

    nftImage: undefined,
}

const CreateReducer = createReducer<ICreateState, ICreateAction>(initialState, {
    [ON_CHANGE_TITLE]: (state, action) => ({
        ...state,
        title: action.payload
    }),
    [ON_CHANGE_DESCRIPTION]: (state, action) => ({
        ...state,
        description: action.payload
    }),
    [ON_CHANGE_COMMUNITY]: (state, action) => ({
        ...state,
        community: action.payload
    }),
    [ON_CHANGE_TYPE]: (state, action) => ({
        ...state,
        type: action.payload
    }),
    [ON_CHANGE_EDATE]: (state, action) => ({
        ...state,
        edate: action.payload
    }),
    [ON_CHANGE_SDATE]: (state, action) => ({
        ...state,
        sdate: action.payload
    }),
    [ON_CHANGE_GOAL]: (state, action) => ({
        ...state,
        goal: action.payload
    }),
    [ON_CHANGE_RECEIVER]: (state, action) => ({
        ...state,
        beneficiary: action.payload
    }),
    [ON_CHANGE_STORY]: (state, action) => ({
        ...state,
        story: action.payload
    }),
    [ON_CHANGE_CATEGORY]: (state, action) => ({
        ...state,
        category: state.category.indexOf(action.payload) === -1 ? [...state.category, action.payload] : state.category.filter(e => e !== action.payload)
    }),
    [ON_CHANGE_SYMBOL]: (state, action) => ({
        ...state,
        symbol: action.payload
    }),
    [ON_UPLOAD_BACKGROUND_IMAGE_SUCCESS]: (state, action) => ({
        ...state,
        background: action.payload
    }),
    [ON_UPLOAD_NFT_IMAGE_SUCCESS]: (state, action) => ({
        ...state,
        nftImage: action.payload
    }),
    [ON_ADD_NFT]: (state, action) => ({
        ...state,
        nfts: [... state.nfts!, ...[{...action.payload, ...{ index: state.nfts!.length }}]],
        nftImage: undefined
    })
})

export default CreateReducer;