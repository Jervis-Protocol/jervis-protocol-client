import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";
import useStylesheet from "../../helper/useStylesheet.tsx";

// const FundingNftComponent = () => {
//     const {nfts} = useSelector((state: RootState) => state.FundingReducer);
//     const {state} = useLocation();
//     return (
//         <div classNameName="container mt-5 mb-7">
//             <h4>리워드 NFT 정보</h4>
//             <div classNameName="mt-4">
//                 {
//                     nfts.map(nft => {
//                         return (
//                             <div
//                                 classNameName="row mb-4 border border-dark border-opacity-25 rounded-3 p-4 justify-content-center justify-content-lg-around">
//                                 <div classNameName="position-relative overflow-hidden"
//                                      style={{width: "250px", height: "250px"}}>
//                                     <img classNameName="rounded-4 w-100 h-100 position-absolute" src={nft.image} alt=""
//                                          style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
//                                 </div>
//                                 <div classNameName="col-12 col-md-6 position-relative">
//                                     <p classNameName="fs-4 mt-2">{nft.name}</p>
//                                     <small classNameName="text-black-50">NFT Description</small>
//                                     <p classNameName="fs-6">{nft.description}</p>
//                                     <div
//                                         classNameName="position-lg-absolute position-relative bottom-0 w-100 d-flex justify-content-between gap-3 pe-md-3">
//                                         <small
//                                             classNameName="text-center text-muted border border-dark border-opacity-50 rounded-3 w-100">
//                                             <p classNameName="pt-2 mb-0">Issue standard amount</p>
//                                             <p classNameName="pb-2 mb-0">{nft.price} {networkInfo[parseInt(state.networkId)].symbol}</p>
//                                         </small>
//                                         <small
//                                             classNameName="text-center text-muted border border-dark border-opacity-50 rounded-3 w-100">
//                                             <p classNameName="pt-2 mb-0">Issued volume</p>
//                                             <p classNameName="pb-2 mb-0">{nft.max} {networkInfo[parseInt(state.networkId)].symbol}</p>
//                                         </small>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

const FundingNftComponent = () => {
    const {nfts} = useSelector((state: RootState) => state.FundingReducer);
    const {state} = useLocation();
    useStylesheet("/assets/css/custom.css");
    
    return (
        <div className="container mt-5 mb-7">
            <h4>리워드 NFT 정보</h4>
            <div className="mt-4">
                <ul className="cards">
                    {
                        nfts.map(nft => {
                            return <li>
                                <div className="card">
                                    <div className={"square"}>
                                        <img src={nft.image} className="card__image" alt="" />
                                    </div>
                                    <div className="card__overlay">
                                        <div className="card__header">
                                            <div className="card__header-text">
                                                <h3 className="card__title"># {nft.index}</h3>
                                                <span className="card__status">{nft.name}</span><br/>
                                                <span className="card__status_2">{nft.description}</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p className="card__description">Issue standard amount</p>
                                        <p className="card__value">{nft.price} {networkInfo[parseInt(state.networkId)].symbol}</p>
                                        <p className="card__description">Issued volume</p>
                                        <p className="card__value">{nft.max} {networkInfo[parseInt(state.networkId)].symbol}</p>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FundingNftComponent;