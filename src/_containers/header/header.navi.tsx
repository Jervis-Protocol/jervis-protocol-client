import {Link, useLocation, useNavigate} from "react-router-dom";
import {onChangeNoticeMessageAction, onToggleNoticeModalAction} from "../../action/modal.action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeQueryAction} from "../../action/search.action";

const HeaderNaviComponent = () => {
    const {pathname} = useLocation();
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

    const onClickSearch = () => {
        dispatch(onChangeQueryAction.request(''));
        navigator("/search");
    }

    return (
        <div className="offcanvas order-lg-2 offcanvas-start" tabIndex={-1} id="offcanvasNavbar2"
             aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className={ pathname === '/' ? "nav-link active" : "nav-link"} to="/">home</Link>
                    </li>
                    <li className="nav-item">
                        <a className={ pathname.includes('/search') || pathname.includes('/funding') ? "nav-link active" : "nav-link"} onClick={() => onClickSearch()} href="#">Funding</a>
                    </li>
                    <li className="nav-item">
                        <a className={ pathname === '/create' || pathname === '/summary' ? "nav-link active" : "nav-link"} href="#" onClick={() => onClickCreate()}>Create Funding</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNaviComponent;