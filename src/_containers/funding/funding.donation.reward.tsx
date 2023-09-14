import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onSelectRewardAction} from "../../action/funding.action";
import {IFundingDonationModalState} from "./funding.donation";
import {networkInfo} from "../../helper/network-handler";
import {IDonationNFT} from "../../type/_container/funding.type";


const FundingDonationReward = (state: IFundingDonationModalState) => {
    const dispatch = useDispatch();
    const {reward} = useSelector((state: RootState) => state.FundingDonationReducer);
    const {funding} = useSelector((state: RootState) => state.FundingReducer);
    const dummyNFT: IDonationNFT = {
        index: 0,
        price: 0,
    }

    return (
        <>
            <h3 className="mt-3">리워드를 선택</h3>
            <table className="">
                <tr className="row">
                    <td className="col-4" key={"funding-reward-key-none"}>
                        <input type="radio"
                               className="btn-check"
                               name="type"
                               id={`funding-reward-none`}
                               autoComplete="off"
                               // onChange={() => dispatch(onSelectRewardAction(dummyNFT))}
                               checked={reward.index === 0}/>
                        <label className="btn p-0 w-100 h-100 rounded-2" htmlFor="funding-reward-none">
                            <div className="position-relative overflow-hidden" style={{width: "220px", height: "220px"}}>
                                <button type="button"
                                        className="rounded-2 w-100 h-100 position-absolute fs-4"
                                        style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
                                        onClick={() => dispatch(onSelectRewardAction(dummyNFT))}>선택 안함</button>
                            </div>
                        </label>
                    </td>
                    {
                        state.nfts.map( nft => {
                            return (
                                <td className="col-4" key={`funding-reward-key-${nft.index}`}>
                                    <input type="radio"
                                           className="btn-check"
                                           name="type"
                                           id={`funding-reward-${nft.index}`}
                                           autoComplete="off"
                                           disabled={nft.issued === nft.max}
                                           onChange={() => dispatch(onSelectRewardAction({index: nft.index!, price: nft.price }))}
                                           checked={reward.index === nft.index}/>
                                    <label className="btn p-0 jb-hover" htmlFor={`funding-reward-${nft.index}`}>
                                        <div className="position-relative overflow-hidden" style={{width: "220px", height: "220px"}}>
                                            <img className="rounded-2 w-100 h-100 position-absolute" src={nft.image} style={{top: "50%", left: "50%", transform: "translate(-50%, -50%"}}/>
                                        </div>
                                        <div className="jb-text rounded-2">
                                            <h5 style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', color: '#fff'}}>
                                                Amount : {nft.price} {networkInfo[funding!.networkId].symbol}<br/>
                                                Volume : {nft.max} {networkInfo[funding!.networkId].symbol}
                                            </h5>
                                        </div>
                                    </label>
                                </td>
                            )
                        })
                    }
                </tr>
            </table>
        </>
    )
}

export default FundingDonationReward;