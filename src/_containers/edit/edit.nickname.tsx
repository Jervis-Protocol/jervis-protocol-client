import {useDispatch, useSelector} from "react-redux";
import {onChangeNicknameAction} from "../../action/edit.action";
import {RootState} from "../../reducers/root.reducer";

const EditNicknameComponent = () => {
    const dispatch = useDispatch();
    const {nicknameValid, nickname} = useSelector((state: RootState) => state.EditReducer);
    return (
        <div className="col-md-6 col-12 mb-4">
            <label htmlFor="user-nickname" className="form-label d-block fs-4">Nickname</label>
            <input className={`form-control ${nicknameValid === true && "is-valid"} ${nicknameValid === false && "is-invalid"}`} id="user-nickname" placeholder="닉네임을 입력해주세요." value={nickname}  onChange={(e) => dispatch(onChangeNicknameAction.request(e.target.value))}/>
            {nicknameValid === true && <div className="valid-feedback">사용할 수 있는 닉네임입니다.</div>}
            {nicknameValid === false && <div className="invalid-feedback">사용할 수 없는 닉네임입니다. 다른 닉네임을 입력해주세요.</div>}
        </div>
    )
}

export default EditNicknameComponent;