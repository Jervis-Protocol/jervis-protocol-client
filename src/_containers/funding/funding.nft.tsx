import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";

const FundingNftComponent = () => {
    const {nfts} = useSelector((state: RootState) => state.FundingReducer);
    const {state} = useLocation();
    return (
        <div className="bg-white rounded-3 p-5 mt-5">
            <h1>리워드 NFT 정보</h1>
            <div className="mt-4">
                {
                    nfts.map( nft => {
                        return (
                            <div className="row mb-4 bg-style-3 rounded-3 p-4 mx-md-5 justify-content-center justify-content-lg-around">
                                <div className="position-relative overflow-hidden" style={{width: "350px", height: "350px"}}>
                                    <img className="rounded-4 w-100 h-100 position-absolute" src={nft.image} alt="" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} />
                                </div>
                                <div className="col-12 col-md-6 ms-md-3 position-relative">
                                    <p className="fs-4 mt-6">{nft.name}</p>
                                    <small className="text-black-50">NFT Description</small>
                                    <p className="fs-6">{nft.description}</p>
                                    <div className="position-absolute bottom-0 w-100 d-flex justify-content-between gap-3 pb-5">
                                        <small className="text-center text-muted border border-dark border-opacity-50 rounded-3 w-100">
                                            <p className="pt-2 mb-0">Issue standard amount</p>
                                            <p className="pb-2 mb-0">{nft.price} {networkInfo[parseInt(state.networkId)].symbol}</p>
                                        </small>
                                        <small className="text-center text-muted border border-dark border-opacity-50 rounded-3 w-100">
                                            <p className="pt-2 mb-0">Issued volume</p>
                                            <p className="pb-2 mb-0">{nft.max} {networkInfo[parseInt(state.networkId)].symbol}</p>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FundingNftComponent;