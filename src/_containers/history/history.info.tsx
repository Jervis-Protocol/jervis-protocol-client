import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {FUNDING_STATE} from "../../helper/funding-state-handler";
import {networkInfo} from "../../helper/network-handler";
import {getDateKRString} from "../../helper/date-string";

const HistoryInfoComponent = () => {
    const {funding} = useSelector((state: RootState) => state.HistoryReducer);

    return (
        <section className="position-relative overflow-hidden py-md-10 py-5">
            <div className="container position-relative">
                <h1 className="mt-7 display-3 me-lg-n4 position-relative z-index-1" data-aos="fade-down"
                    data-aos-delay="100">Funding History</h1>
                <h1 className="mt-5 lh-1 mb-4 splitting-left" data-aos="fade-left" data-aos-delay="150">
                    Overview
                </h1>
                <ul className="border-top border-bottom border-dark pt-3 px-3">
                    <li className="row" data-aos="fade-left" data-aos-delay="200">
                        <p className="col-12 col-md-3">Title</p>
                        <p className="col-12 col-md-9 text-muted">{funding?.title}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="250">
                        <p className="col-12 col-md-3">Status</p>
                        <p className="col-12 col-md-9 text-muted">{FUNDING_STATE[funding!.state].word}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="300">
                        <p className="col-12 col-md-3">Goal</p>
                        <p className="col-12 col-md-9 text-muted">{funding!.goal} {networkInfo[funding!.networkId].symbol}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="350">
                        <p className="col-12 col-md-3">Period</p>
                        <p className="col-12 col-md-9 text-muted">{getDateKRString(funding!.sdate)} ~ {getDateKRString(funding!.edate)}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="400">
                        <p className="col-12 col-md-3">Wallet address</p>
                        <p className="col-12 col-md-9 text-muted">{funding!.beneficiary}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="500">
                        <p className="col-12 col-md-3">Recruitment amount</p>
                        <p className="col-12 col-md-9 text-muted">{funding!.goal} {networkInfo[funding!.networkId].symbol}</p>
                    </li>
                    <li className="row" data-aos="fade-left" data-aos-delay="450">
                        <p className="col-12 col-md-3">Target amount</p>
                        <p className="col-12 col-md-9 text-muted">{funding!.donation} {networkInfo[funding!.networkId].symbol}</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HistoryInfoComponent;