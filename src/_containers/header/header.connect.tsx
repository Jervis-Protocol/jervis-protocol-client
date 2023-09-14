import {onToggleConnectModalAction} from "../../action/modal.action";
import {useDispatch} from "react-redux";

const HeaderConnectComponent = () => {
    const dispatch = useDispatch();

    return (
        <ul className="d-flex order-lg-last ms-auto ms-lg-4 me-1 me-lg-0 flex-row navbar-nav align-items-center">
            <li className="nav-item">
                <a href="#!" className="nav-link" data-bs-toggle="modal" data-bs-target="#modal-connect-wallet"
                   onClick={() => dispatch(onToggleConnectModalAction())}>
                    <span className="material-icons align-middle">account_balance_wallet</span>
                </a>
            </li>
        </ul>
    )
}

export default HeaderConnectComponent;