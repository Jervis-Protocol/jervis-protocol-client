import {useDispatch, useSelector} from "react-redux";
import {onToggleEmailModalAction} from "../../action/edit.action";
import {RootState} from "../../reducers/root.reducer";

const EditEmailComponent = () => {
    const dispatch = useDispatch();
    const {email} = useSelector((state: RootState) => state.EditReducer);
    return (
        <div className="col-md-6 col-12">
            <div className="valid-feedback">사용할 수 있는 닉네임입니다.</div>
            <div className="invalid-feedback">사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해주세요.</div>
            <label htmlFor="user-email" className="form-label d-block fs-4">Email</label>
            <div className="d-flex justify-content-between">
                <p id="profile-edit-email" className="user-email flex-grow-1">{email}</p>
                <small className="user-email-vaild mx-2 text-primary">인증됨</small>
                <a type="submit" data-bs-toggle="modal" data-bs-target="#modal-edit-email" onClick={() => dispatch(onToggleEmailModalAction())}>수정하기</a>
            </div>
        </div>
    )
}

export default EditEmailComponent;