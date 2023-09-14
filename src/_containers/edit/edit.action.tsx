import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onEditSubmitAction} from "../../action/edit.action";
import {useNavigate} from "react-router-dom";

const EditActionComponent = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {email, image, nickname, description} = useSelector((state: RootState) => state.EditReducer);

    return (
        <div className="mb-12 text-center" data-aos="fade-up" data-aos-delay="500">
            <div className="d-grid gap-2 d-md-block">
                <a href="mypage.html" className="btn btn-secondary me-md-2" onClick={() => navigator(-1)}>뒤로가기</a>
                <button className="btn btn-primary" type="button" onClick={() => dispatch(onEditSubmitAction.request({user: {
                    _id: user!._id,
                    networkId: user!.networkId,
                    email: email,
                    image: image,
                    address: user!.address,
                    description: description,
                    nickname: nickname
                }, navigator: navigator }))}>수정하기</button>
            </div>
        </div>
    )
}

export default EditActionComponent;