import HeaderSearch from "./header.search";
import HeaderAccount from "./header.account";
import HeaderNavi from "./header.navi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onGetCategoryAction, onGetUserAction} from "../../action/header.action";
import useScript from "../../helper/useScript";
import {RootState} from "../../reducers/root.reducer";
import HeaderConnect from "./header.connect";

const HeaderComponent = () => {
    useScript("/assets/js/theme.bundle.js", false);
    useScript("/assets/vendor/lib/js/swiper-bundle.min.js", false);
    useScript("/assets/vendor/lib/js/choices.min.js");
    useScript("/assets/vendor/lib/js/jquery.min.js");
    useScript("/assets/vendor/lib/js/jquery.countdown.min.js");
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    useEffect(() => {
        dispatch(onGetUserAction.request());
        dispatch(onGetCategoryAction.request());
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-sticky navbar-light py-1">
            <div className="container-fluid px-xl-0 mx-xl-6">
                <HeaderSearch />

                <HeaderNavi />
                {!user && <HeaderConnect />}
                {user && <HeaderAccount/>}
            </div>
        </nav>
    )
}

export default HeaderComponent;