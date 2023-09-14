import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onToggleDonationModalAction} from "../../action/funding.action";

// const FundingInfoComponent = () => {
//     const dispatch = useDispatch();
//     const {state} = useLocation();
//     const {funding} = useSelector((state: RootState) => state.FundingReducer);
//     const {user} = useSelector((state: RootState) => state.HeaderReducer);
//     const getDate = (sDate: Date, eDate: Date) => {
//         const newSDate = new Date(sDate);
//         const newEDate = new Date(eDate);
//         return `${newSDate.getFullYear()}.${newSDate.getMonth()+1}.${newSDate.getDate()} ~ ${newEDate.getFullYear()}.${newEDate.getMonth()+1}.${newEDate.getDate()}`
//     }
//
//     const getDonationButton = () => {
//         if(!user)
//             return <button className="w-100 btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-participation" disabled={true}>로그인 후 이용가능합니다.</button>;
//         else if (funding!.networkId !== user!.networkId)
//             return <button className="w-100 btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-participation" disabled={true}>{networkInfo[funding!.networkId].name}으로 로그인 후 이용가능합니다.</button>;
//         else
//             return <button className="w-100 btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-participation" onClick={() => dispatch(onToggleDonationModalAction())}>참여하기</button>
//     }
//
//     return (
//         <div className="col-lg-4 ms-lg-auto order-lg-1 order-0">
//             <div className="sticky-top py-5">
//                 <div className="bg-transparent py-5"></div>
//                 <div className="bg-style-2 p-5 rounded-4">
//                     <h3>펀딩 정보</h3>
//                     <div className="py-3">
//                         <p>목표 금액 : {funding!.goal} {networkInfo[state.networkId].symbol}</p>
//                         <p>펀딩 기간 : {getDate(funding!.sdate, funding!.edate)}</p>
//                         <p>펀딩 타입 : {funding!.type === 12001 ? "목표달성" : "기간달성"}</p>
//                     </div>
//                     <h3>펀딩 현황</h3>
//                     <div className="pt-3">
//                         <p>{funding!.donation} {networkInfo[state.networkId].symbol} 모집</p>
//                         <div className="progress bg-light my-3">
//                             <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 style={{width: `${parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}%`}}
//                                 aria-valuenow={parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}
//                                 aria-valuemin={0}
//                                 aria-valuemax={100}
//                             ></div>
//                         </div>
//                         <p>{((funding!.donation / funding!.goal) * 100).toFixed(0)}% 달성</p>
//                     </div>
//                     {getDonationButton()}
//                 </div>
//             </div>
//         </div>
//     )
// }

const FundingInfoComponent = () => {
    const {state} = useLocation();
    const {funding} = useSelector((state: RootState) => state.FundingReducer);
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const getDate = (sDate: Date, eDate: Date) => {
        const newSDate = new Date(sDate);
        const newEDate = new Date(eDate);
        return `${newSDate.getFullYear()}.${newSDate.getMonth()+1}.${newSDate.getDate()} ~ ${newEDate.getFullYear()}.${newEDate.getMonth()+1}.${newEDate.getDate()}`
    }

    return (
        <div className="bg-white rounded-3 p-5 mt-2">
            <h2>펀딩 정보</h2>
            <div className="mt-4 lh-sm">
                <p>목표 금액 : {funding!.goal} {networkInfo[state.networkId].symbol}</p>
                <p>펀딩 기간 : {getDate(funding!.sdate, funding!.edate)}</p>
                <p>펀딩 타입 : {funding!.type === 12001 ? "목표달성" : "기간달성"}</p>
            </div>
        </div>
    )
}

export default FundingInfoComponent;