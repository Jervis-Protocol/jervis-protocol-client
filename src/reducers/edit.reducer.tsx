import {IEditAction, IEditState} from "../type/_container/edit.type";
import {createReducer} from "typesafe-actions";
import {
    ON_CHANGE_DESCRIPTION,
    ON_CHANGE_IMAGE_SUCCESS,
    ON_CHANGE_NICKNAME_SUCCESS,
    ON_UPDATE_EMAIL,
} from "../action/edit.action";

const initialState: IEditState = {
    description: "",
    email: "",
    nickname: "",
    nicknameValid: undefined,
    image: "/assets/img/avatar/1.jpg"
}

const EditReducer = createReducer<IEditState, IEditAction>(initialState, {
    [ON_CHANGE_NICKNAME_SUCCESS]: (state, action) => ({
        ...state,
        nickname: action.payload.input,
    }),
    [ON_CHANGE_DESCRIPTION]: (state, action) => ({
        ...state,
        description: action.payload
    }),
    [ON_CHANGE_IMAGE_SUCCESS]: (state, action) => ({
        ...state,
        image: action.payload
    }),
    [ON_UPDATE_EMAIL]: (state, action) => ({
        ...state,
        email: action.payload
    })
})

export default EditReducer;