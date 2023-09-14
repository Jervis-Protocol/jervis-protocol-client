import HistoryInfo from "./history.info";
import HistoryRecode from "./history.recode";
import HistoryReward from "./history.reward";
import HistoryEstimate from "./history.estimate";
import HistoryAction from "./history.action";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onGetFundingAction} from "../../action/history.action";
import {RootState} from "../../reducers/root.reducer";

const HistoryContainer = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {funding, nfts} = useSelector((state: RootState) => state.HistoryReducer);
    useEffect(() => {dispatch(onGetFundingAction.request({networkId: state.networkId, address: state.address}));}, [])

    if (!funding || nfts?.length === 0)
        return <></>
    else
        return (
            <>
                <HistoryInfo/>
                <HistoryRecode/>
                <HistoryReward/>
                <HistoryEstimate/>
                <HistoryAction/>
            </>
        )
}

export default HistoryContainer;