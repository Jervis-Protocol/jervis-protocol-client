import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {RootState} from "../../reducers/root.reducer";
import {onChangeNoticeMessageAction, onToggleNoticeModalAction} from "../../action/modal.action";

const HomeInfoText = () => {
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
        <div className="col-lg-6 col-md-9 mt-lg-6">
            <h1 className="mb-4 display-3 me-lg-n4 position-relative z-index-1" data-aos="fade-down" data-aos-delay="100">Jervis Protocol</h1>
            <p className="mt-lg-5 mb-5 mb-lg-6 lead text-muted" data-aos="fade-up" data-aos-delay="200">
                전세계 후원자들이 모여서 언제, 어디서나, 누구든 자신이 좋아하는 크리에이터에게 직접 후원하고
                서로 소통하고 함께 성장할 수 있도록 WEB 3.0 기반 새로운 문화 컨텐츠 후원 생태계를 구축합니다.
            </p>
            <div className="d-flex mt-lg-8 mb-6 mb-lg-0 align-items-center" data-aos="fade-up" data-aos-delay="300">
                <Link to={"/search"} className="btn btn-primary me-3 px-sm-4 px-lg-5 py-3">Check all Fundings</Link>
                <a href="#" className="btn btn-success px-sm-4 px-lg-5 py-3" onClick={() => onClickCreate()}>
                    <span className="material-icons align-middle fs-4 me-1 mb-1">add</span>
                    Create Funding
                </a>
            </div>
        </div>
    )
}

export default HomeInfoText;