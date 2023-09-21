import {useDispatch} from "react-redux";


import HomeInfo from "./home.info";
import HomePopular from "./home.popular";
import useScript from "../../helper/useScript";
import HomeTodo from "./home.todo";
import HomeEtc from "./home.etc";
import {useEffect} from "react";
import {onGetMainFundingAction, onGetPopularFundingAction, onGetTodoFundingAction} from "../../action/home.action";

const HomeContainer = () => {
    useScript('/assets/js/home.js');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onGetMainFundingAction.request());
        dispatch(onGetPopularFundingAction.request());
        dispatch(onGetTodoFundingAction.request());
    }, [])

    return (
        <>
            <HomeInfo />
            <HomePopular />
            <HomeTodo />
            <HomeEtc />
        </>
    )
}

export default HomeContainer;