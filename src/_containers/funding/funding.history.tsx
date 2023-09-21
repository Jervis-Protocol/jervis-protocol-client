import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import FundingHistoryRow from "./funding.history.row";
import {IHistory} from "../../type/_data/history.type";
import FundingHistoryPage from "./funding.history.page";

const FundingHistoryComponent = () => {
    const { funding, historyPage } = useSelector((state: RootState) => state.FundingReducer);
    const onFilterHistory = (page: number): Array<IHistory> => {
        const showHistory: Array<IHistory> = [];
        for (let i = (page - 1) * 5 ; i < page * 5 ; i++)
            if (funding!.history[i])
                showHistory.push(funding!.history[i])
        return  showHistory;
    }

    return (
        <div className="mx-lg-0 mx-3">
            <h4>최근 펀딩 내역</h4>
            <div className="mt-4">
                <div className="row border-top border-bottom pt-3">
                    <p className="col-6 col-md-2 col-xl-3">펀딩 일시</p>
                    <p className="col-6 col-md-2 col-xl-2 text-md-center text-end">펀딩 금액</p>
                    <p className="col-12 col-md-8 col-xl-7">발송 주소</p>
                </div>

                {
                    funding?.history.length === 0
                        ?   <div className={"text-center m-3"}>
                                내역이 없습니다.
                            </div>
                        :   <div>
                            { onFilterHistory(historyPage).map( item => <FundingHistoryRow history={item} key={item._id} />)}
                            </div>
                }
            </div>
            <FundingHistoryPage />
        </div>
    )
}

export default FundingHistoryComponent;