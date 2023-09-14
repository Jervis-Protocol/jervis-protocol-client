import {IFundingAction, IFundingDonationState} from "../type/_container/funding.type";
import {createReducer} from "typesafe-actions";
import {
    ON_CHANGE_ALL_AGREE,
    ON_CHANGE_BENEFICIARY,
    ON_CHANGE_DONATION_VALUE,
    ON_CHANGE_PRIVACY_AGREE,
    ON_CHANGE_SERVICE_AGREE,
    ON_SELECT_REWARD,
    ON_TOGGLE_DONATION_MODAL
} from "../action/funding.action";

const initialState: IFundingDonationState = {
    isOpenDonationModal: false,

    agree: false,
    agreePrivacy: false,
    agreeService: false,
    beneficiary: "",
    reward: { index: 0 , price: 0 },
    value: 0,

}

const FundingDonationReducer = createReducer<IFundingDonationState, IFundingAction>(initialState, {
    [ON_TOGGLE_DONATION_MODAL]: (state, action) => ({
        ...initialState,
        isOpenDonationModal: !state.isOpenDonationModal,
    }),
    [ON_SELECT_REWARD]: (state, action) => ({
        ...state,
        reward: action.payload
    }),
    [ON_CHANGE_DONATION_VALUE]: (state, action) => ({
        ...state,
        value: action.payload
    }),
    [ON_CHANGE_BENEFICIARY]: (state, action) => ({
        ...state,
        beneficiary: action.payload
    }),
    [ON_CHANGE_SERVICE_AGREE]: (state, action) => ({
        ...state,
        agreeService: !state.agreeService,
        agree: state.agreePrivacy === true && !state.agreeService === true ? true : false
    }),
    [ON_CHANGE_PRIVACY_AGREE]: (state, action) => ({
        ...state,
        agreePrivacy: !state.agreePrivacy,
        agree:  state.agreeService === true && !state.agreePrivacy === true ? true : false
    }),
    [ON_CHANGE_ALL_AGREE]: (state, action) => ({
        ...state,
        agreeService: !state.agree,
        agreePrivacy: !state.agree,
        agree: !state.agree
    })
})

export default FundingDonationReducer