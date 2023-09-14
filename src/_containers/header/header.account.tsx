import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Link} from "react-router-dom";
import {onLogoutAction} from "../../action/header.action";

const HeaderAccountComponent = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    return (
        <ul className="d-flex order-lg-last ms-auto ms-lg-4 me-1 me-lg-0 flex-row navbar-nav align-items-center">
            <li className="nav-item ms-3 ms-lg-2 dropdown">
                <a href="#!" data-bs-toggle="dropdown" data-bs-auto-close="outside" className="nav-link">
                    <span className="material-icons align-middle">account_circle</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end position-absolute">
                    <Link to={'/profile'} state={{networkId: user!.networkId, address: user!.address}}
                          className="dropdown-item">
                        <span className="material-icons align-middle me-2">account_circle</span> Mypage
                    </Link>
                    <Link to={'/profile'} state={{networkId: user!.networkId, address: user!.address}}
                          className="dropdown-item">
                        <span className="material-icons align-middle me-2">favorite</span> Favorites
                    </Link>
                    <Link to={'/profile'} state={{networkId: user!.networkId, address: user!.address}}
                          className="dropdown-item">
                        <span className="material-icons align-middle me-2">manage_accounts</span> Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={() => dispatch(onLogoutAction())}>
                        <span className="material-icons align-middle me-2">logout</span> Logout
                    </div>
                </div>
            </li>
            <li className="ms-3 d-lg-none">
                <a href="#modal_search" data-bs-toggle="modal" className="nav-link">
                    <span className="material-icons align-middle">search</span>
                </a>
            </li>
        </ul>
    )
}

export default HeaderAccountComponent;