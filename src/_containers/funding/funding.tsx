import FundingDescription from "./funding.description";
import FundingStory from "./funding.story";
import FundingNft from "./funding.nft";
import FundingHistory from "./funding.history";
import FundingInfo from "./funding.info";
import FundingBanner from "./funding.banner";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {onGetFundingAction, onGetFundingNFTAction} from "../../action/funding.action";
import {IGetFundingRequest} from "../../type/_container/funding.type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import FundingDonation from "./funding.donation";
import FundingBottomBar from "./funding.bottom.bar.tsx";
import {onToggleLoadingAction} from "../../action/search.action.tsx";
import FundingSticky from "./funding.sticky.tsx";

const FundingContainer = () => {
    const {state} = useLocation();
    const dispatch = useDispatch();
    const {funding, nfts, init} = useSelector((state: RootState) => state.FundingReducer);
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    useEffect(() => {
        dispatch(onGetFundingAction.request(state as IGetFundingRequest));
        dispatch(onGetFundingNFTAction.request(state as IGetFundingRequest));
    }, [state]);

    return (
        <>
            {
                funding && nfts.length !== 0 &&
                <>
                    <section className="position-relative mb-12">
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col-lg-8 col-xl-7 pt-0 pt-lg-8 order-lg-0 order-1">
                                    <FundingInfo/>
                                    <hr/>
                                    <FundingStory/>
                                    <FundingNft/>
                                    <FundingHistory/>
                                </div>
                                <FundingSticky/>
                            </div>
                        </div>
                    </section>
                    <FundingDonation nfts={nfts}/>
                </>
                    // <div style={{backgroundColor: "#F2F4F5"}}>
                    //     <FundingBanner />
                    //     <section className="position-relative d-flex justify-content-center mx-3 mx-lg-0" style={{paddingBottom: "10rem"}}>
                    //         <div style={{maxWidth: "1000px"}}>
                    //             {/*<FundingInfo/>*/}
                    //             {/*<FundingDescription/>*/}
                    //             <FundingStory/>
                    //             <FundingNft/>
                    //             <FundingHistory/>
                    //         </div>
                    //     </section>
                    //     <FundingBottomBar/>
                    //     <FundingDonation nfts={nfts}/>
                    // </div>
            }
        </>
    )

    // if (funding && nfts.length !== 0) {
    //     dispatch(onToggleLoadingAction(false));
    //     return (
    //         <>
    //             <div style={{backgroundColor: "#F2F4F5"}}>
    //                 <FundingBanner />
    //                 <section className="position-relative d-flex justify-content-center mx-3 mx-lg-0" style={{paddingBottom: "10rem"}}>
    //                     <div style={{maxWidth: "1000px"}}>
    //                         <FundingInfo/>
    //                         <FundingDescription/>
    //                         <FundingStory/>
    //                         <FundingNft/>
    //                         <FundingHistory/>
    //                     </div>
    //                 </section>
    //                 <FundingBottomBar/>
    //                 <FundingDonation nfts={nfts}/>
    //             </div>
    //         </>
    //     )
    // }
    // else
    //     return <div style={{backgroundColor: "#F2F4F5", height: 700}}></div>
}

export default FundingContainer;