import {IEditAction, IEditValidModalState} from "../type/_container/edit.type";
import {createReducer} from "typesafe-actions";
import {ON_CHANGE_VALID_NUMBER, ON_TOGGLE_VALID_MODAL, ON_VALIDATION_AUTH_NUMBER_FAILURE} from "../action/edit.action";

const initialState: IEditValidModalState = {
    isOpenValidModal: false,
    error: undefined,
    input: undefined,
}

const EditValidReducer = createReducer<IEditValidModalState, IEditAction>(initialState, {
    [ON_CHANGE_VALID_NUMBER]: (state, action) => ({
        ...state,
        input: action.payload
    }),
    [ON_VALIDATION_AUTH_NUMBER_FAILURE]: (state, _action) => ({
        ...state,
        error: true
    }),
    [ON_TOGGLE_VALID_MODAL]: (state, _action) => ({
        ...state,
        isOpenValidModal: !state.isOpenValidModal
    })
})

export default EditValidReducer;