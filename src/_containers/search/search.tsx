import SearchFilter from "./search.filter";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onGetFundingAction, onToggleLoadingAction} from "../../action/search.action";
import SearchBoard from "./search.board";
import {RootState} from "../../reducers/root.reducer";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const {search} = useLocation();
    const { query} = useSelector((state: RootState) => state.SearchReducer);
    let page = 0;
    let flag = false;

    const scrollHandler = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && flag === false) {
            page += 1;
            flag = true;
            dispatch(onToggleLoadingAction(true));
            setTimeout(() => {dispatch(onGetFundingAction.request({query: search, pageIndex: page}));}, 1500);
            setTimeout(() => {flag = false}, 2000);
        }
        return;
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {window.removeEventListener('scroll', scrollHandler)}
    }, [query])

    useEffect(() => {
        page = 0;
        dispatch(onGetFundingAction.request({query: query, pageIndex: 0}))
    }, [query]);

    return (
        <div className="position-relative pt-9 pt-lg-12" onScroll={scrollHandler}>
            <div className="container-fluid px-xl-5 position-relative">
                <div className="row">
                    <SearchFilter />
                    <SearchBoard />
                </div>
            </div>
        </div>
    )
}

export default SearchContainer;