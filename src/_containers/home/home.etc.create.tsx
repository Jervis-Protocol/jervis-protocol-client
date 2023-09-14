import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeNoticeMessageAction, onToggleNoticeModalAction} from "../../action/modal.action";

const HomeETCCreate = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    const onClickCreate = () => {
        if (user)
            navigator("/create");
        else {
            dispatch(onChangeNoticeMessageAction("로그인 후 이용 가능합니다."));
            dispatch(onToggleNoticeModalAction());
        }
    }

    return (
        <div className="col-lg-6 mb-7 mb-lg-0" data-aos="fade-up">
            <a href={"#!"} onClick={() => onClickCreate()}>
                <div className="card border-0 shadow-sm hover-lift pt-md-6 p-7 p-md-10 text-white"
                     style={{backgroundImage: "url('assets/img/img5.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundColor:'#00a393', backgroundPositionY: 'center'}}>
                    <div
                        className="me-4 position-absolute start-0 ms-4 mt-n4 top-0 flex-shrink-0 size-4 shadow d-flex align-items-center justify-content-center rounded-circle bg-style-1 text-black">
                        <span className="material-icons fs-3 align-middle text-secondary">create</span>
                    </div>
                    <h3 className="mb-4 mt-4 position-relative">Create Funding</h3>
                    <p className="mb-0">
                        아이디어나 콘텐츠가 있으신가요?<br/>
                        암호화폐로 펀딩을 받아보세요
                    </p>
                </div>
            </a>
        </div>
    )
}

export default HomeETCCreate;