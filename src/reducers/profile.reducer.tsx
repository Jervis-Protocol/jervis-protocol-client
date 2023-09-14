import {IProfileAction, IProfileState} from "../type/_container/profile.type";
import {createReducer} from "typesafe-actions";
import {ON_GET_USER_REQUEST, ON_GET_USER_SUCCESS, ON_UPDATE_AUTH} from "../action/profile.action";

const initialState: IProfileState = {
    user: undefined,
    auth: false
}

const ProfileReducer = createReducer<IProfileState, IProfileAction>(initialState, {
    [ON_GET_USER_REQUEST]: (state, action) => ({
        ...initialState
    }),
    [ON_GET_USER_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload
    }),
    [ON_UPDATE_AUTH]: (state, action) => ({
        ...state,
        auth: action.payload
    })
})

export default ProfileReducer;