import {IHistory} from "../../type/_data/history.type";
import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";

export type IFundingHistoryRowState = {
    history: IHistory
}

const FundingHistoryRow = (props: IFundingHistoryRowState) => {
    const history = props.history;
    const { state } = useLocation();
    const getDate = (date: Date) => {
        const newDate = new Date(date);
        return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
    }
    const onClick = () => window.open(`${networkInfo[state.networkId].scan}${history.transactionHash}`, "_blank")
    return (
        <div className="row border-bottom pt-3">
            <small className="col-6 col-md-2 col-xl-3">{getDate(history.createdAt)}</small>
            <small className="col-6 col-md-2 col-xl-2 text-md-center text-end">{history.value} {networkInfo[state.networkId].symbol}</small>
            <p className="col-12 col-md-8 col-xl-7 text-break">
                <small className="d-flex">{history.sender}
                    <a href="javascript:void(0);">
                        <i className="bi bi-arrow-up-right-square mx-1" onClick={() => onClick()}></i>
                    </a>
                </small>
                {
                    history.beneficiary !== history.sender &&
                        <>
                            <i className="bi bi-arrow-right"></i>
                            <i className="bi bi-person-fill"></i>
                            <small>{history.beneficiary}</small>
                        </>
                }
            </p>
        </div>
    )
}

export default FundingHistoryRow;