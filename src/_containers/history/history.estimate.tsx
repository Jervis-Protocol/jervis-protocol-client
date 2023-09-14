import {useSelector} from "react-redux";
import {networkInfo} from "../../helper/network-handler";
import {RootState} from "../../reducers/root.reducer";

const HistoryEstimateComponent = () => {
    const {funding} = useSelector((state: RootState) => state.HistoryReducer);

    return (
        <section className="position-relative overflow-hidden bg-style-1 py-10">
            <div className="container position-relative">
                <h1 className="lh-1 mb-6" data-aos="fade-right" data-aos-delay="100">
                    Scheduled settlement details
                </h1>
                <div className="border-top border-bottom border-2 border-dark">
                    <div className="row border-bottom mx-1 pt-3" data-aos="fade-up" data-aos-delay="200">
                        <p className="col-5">Funding amount</p>
                        <p className="col-7 text-end">{funding!.goal} {networkInfo[funding!.networkId].symbol}</p>
                    </div>
                    <div className="row border-bottom mx-1 pt-3" data-aos="fade-up" data-aos-delay="250">
                        <p className="col-5">NFT issuance fee</p>
                        <p className="col-7 text-end">0.3 {networkInfo[funding!.networkId].symbol}</p>
                    </div>
                    <div className="row border-bottom mx-1 pt-3" data-aos="fade-up" data-aos-delay="300">
                        <p className="col-5">Funding fee</p>
                        <p className="col-7 text-end">0 {networkInfo[funding!.networkId].symbol}</p>
                    </div>
                </div>
                <h5 className="text-end mx-2 pt-4" data-aos="fade-up" data-aos-delay="400">{funding!.goal + 0.3 + 0} {networkInfo[funding!.networkId].symbol}</h5>
            </div>
        </section>
    )
}

export default HistoryEstimateComponent;