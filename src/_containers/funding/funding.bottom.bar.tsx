import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {RootState} from "../../reducers/root.reducer.tsx";
import {onToggleDonationModalAction} from "../../action/funding.action.tsx";
import {networkInfo} from "../../helper/network-handler.tsx";

const FundingBottomBar = () => {
    const dispatch = useDispatch();
    const {state} = useLocation();
    const {funding} = useSelector((state: RootState) => state.FundingReducer);
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    const getDonationButton = () => {
        if(!user)
            return <button className="col-12 col-md-2 btn btn-sm btn-secondary" type="button" disabled={true}>로그인 후 이용가능합니다.</button>;
        else if (funding!.networkId !== user!.networkId)
            return <button className="col-12 col-md-2 btn btn-sm btn-secondary" type="button" disabled={true}>{networkInfo[funding!.networkId].name}으로 로그인 후 이용가능합니다.</button>;
        else
            return <button className="col-12 col-md-2 btn btn-sm btn-secondary" type="button" onClick={() => dispatch(onToggleDonationModalAction())}>참여하기</button>
    }
    return(
        <section className="w-100 position-fixed bottom-0" style={{left: "50%", transform: "translateX(-50%)", maxWidth: "1400px"}}>
            <div className="row justify-content-around bg-primary rounded-top-end-4 rounded-top-start-4 p-3 gap-4">
                <h4 className="col-2 col-md-2 text-center p-0 m-0" style={{transform: "translateY(30%)"}}>펀딩 현황</h4>
                <div className="col-8 col-md-7 lh-lg">
                    <div className="d-flex justify-content-between">
                        <p className="m-0">{funding!.donation.toFixed(2)} {networkInfo[state.networkId].symbol}</p>
                        <p className="m-0">{funding!.goal.toFixed(2)} {networkInfo[state.networkId].symbol}</p>
                    </div>
                    <div className="progress bg-white">
                        <div className="progress-bar bg-yellow" role="progressbar"
                             style={{width: `${parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}%`}}
                             aria-valuenow={parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}
                             aria-valuemin={0}
                             aria-valuemax={100}>{parseInt(((funding!.donation / funding!.goal) * 100).toFixed(0))}%</div>
                    </div>
                </div>
                {getDonationButton()}
            </div>
        </section>
    )
}

export default FundingBottomBar;