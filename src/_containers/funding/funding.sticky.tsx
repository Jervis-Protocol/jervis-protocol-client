import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer.tsx";
import {networkInfo} from "../../helper/network-handler.tsx";
import {useLocation} from "react-router-dom";
import {onToggleDonationModalAction} from "../../action/funding.action.tsx";

const FundingStickyComponent = () => {
    const dispatch = useDispatch();
    const {funding} = useSelector((state: RootState) => state.FundingReducer);
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {state} = useLocation();
    const getDate = (sDate: Date, eDate: Date) => {
        const newSDate = new Date(sDate);
        const newEDate = new Date(eDate);
        return `${newSDate.getFullYear()}.${newSDate.getMonth()+1}.${newSDate.getDate()} ~ ${newEDate.getFullYear()}.${newEDate.getMonth()+1}.${newEDate.getDate()}`
    }
    const getBetweenDate = (sDate: Date, eDate: Date) => {
        const newSDate = new Date(sDate);
        const nowDate = new Date();
        const newEDate = new Date(eDate);

        if (newSDate.getTime() > nowDate.getTime())
            return ;
        else if (newEDate.getTime() < nowDate.getTime())
            return ;
        const betweenDate = (nowDate.getTime() - newSDate.getTime()) / (1000 * 3600 * 24);
        if (betweenDate.toFixed(0) === "0")
            return ;
        return <small className="text-primary border border-primary border-opacity-25 px-2 ms-1 rounded-pill">{betweenDate.toFixed(0)}일 남음</small>
    }
    const getDonationButton = () => {
        switch (funding!.state) {
            case 10001:
                if(!user)
                    return <button className="w-100 btn btn-primary fs-6 mt-4" type="button" disabled={true}>로그인 후 이용가능합니다.</button>;
                else if (funding!.networkId !== user!.networkId)
                    return <button className="w-100 btn btn-primary fs-6 mt-4" type="button" disabled={true}>{networkInfo[funding!.networkId].name}으로 로그인 후 이용가능합니다.</button>;
                else
                    return <button className="w-100 btn btn-primary fs-6 mt-4" type="button" onClick={() => dispatch(onToggleDonationModalAction())}>참여하기</button>
            default:
                return <button className="w-100 btn btn-primary fs-6 mt-4" type="button" disabled={true}>펀딩 중이 아닙니다.</button>
        }
    }

    const getFundingState = () => {
        switch (funding!.state) {
            case 10001: return "진행중인 펀딩";
            case 10002: return "펀딩 예정";
            default: return "종료된 펀딩";
        }
    }

    return (
        <div className="col-lg-4 ms-lg-auto pt-0 pt-lg-8 mb-0">
            <div className="sticky-top">
                <div>
                    <div className="bg-transparent py-6"></div>
                    <div className={"border border-opacity-25 rounded-3 p-3 shadow"}>
                        <div className="row justify-content-between border-2 border-bottom pb-3 mb-4">
                            <div className="mb-0 col-6 col-lg-12 col-xl-7">
                                <span className="fs-5">{getFundingState()}</span>
                                {getBetweenDate(funding!.sdate, funding!.edate)}
                            </div>
                            <small className="col-6 col-lg-12 col-xl-5 mb-0 mt-2 text-end text-lg-start text-xl-end">{getDate(funding!.sdate, funding!.edate)}</small>
                        </div>

                        <div className="d-flex mb-2">
                            <img src={user?.image} alt="profile-img" className="border border-2 rounded-circle size-2"/>
                            <p className="fs-5 ms-1 fw-bold">{user?.nickname}</p>
                        </div>
                        <h4 className="mb-4">{funding!.title}</h4>
                        <p className="mb-5 text-muted">{funding?.description}</p>
                        <div>
                            <h4 className="mb-1 text-primary">{parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}% <span className="fs-6 fw-light">달성</span></h4>
                            <div className="progress bg-style-3 my-2">
                                <div className="progress-bar" role="progressbar"
                                     style={{width: `${parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}%`}}
                                     aria-valuenow={parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}
                                     aria-valuemin={0}
                                     aria-valuemax={100}>{parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}%</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted">{funding!.donation.toFixed(2)} {networkInfo[state.networkId].symbol}</p>
                                <p className="text-muted">{funding!.goal.toFixed(2)} {networkInfo[state.networkId].symbol}</p>
                            </div>
                        </div>

                        {getDonationButton()}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FundingStickyComponent;