import {IEditAction, IEditEmailModalState} from "../type/_container/edit.type";
import {createReducer} from "typesafe-actions";
import {ON_CHANGE_EMAIL_SUCCESS, ON_TOGGLE_EMAIL_MODAL} from "../action/edit.action";

const initialState: IEditEmailModalState = {
    isOpenEmailModal: false,
    email: '',
    error: undefined
}

const EditEmailReducer = createReducer<IEditEmailModalState, IEditAction>(initialState, {
    [ON_CHANGE_EMAIL_SUCCESS]: (state, action) => ({
        ...state,
        email: action.payload.input,
        error: action.payload.error
    }),
    [ON_TOGGLE_EMAIL_MODAL]: (state, _action) => ({
        ...state,
        isOpenEmailModal: !state.isOpenEmailModal,
        email:  !state.isOpenEmailModal === true ? '' : state.email
    })
})

export default EditEmailReducer;