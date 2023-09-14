import {useDispatch, useSelector} from "react-redux";
import {onSubmitDonationInputAction, onToggleDonationModalAction} from "../../action/funding.action";
import {RootState} from "../../reducers/root.reducer";
import {useNavigate} from "react-router-dom";

const FundingDonationAction = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.FundingDonationReducer);
    const {funding} = useSelector((state: RootState) => state.FundingReducer);
    const navigator = useNavigate();
    return (
        <div className="col-12 text-center mt-6">
            <p className="text-muted bg-style-2 p-5 rounded-4 text-black">
                [안내]<br/>
                펀딩하신 가상자산은 펀딩 성공 시에 프로젝트 개설자에게 지급됩니다. <br/>
                NFT는 펀딩 성공 후 후원자님의 지갑으로 일괄 발행됩니다. <br/>
            </p>
            <div className="d-grid gap-2 d-md-block align-content-center">
                <button className="btn btn-secondary" style={{marginRight: 3}} type="button" onClick={() => dispatch(onToggleDonationModalAction())}>취소하기</button>
                <button className="btn btn-primary" type="submit" id="detail-funding-btn" onClick={() => dispatch(onSubmitDonationInputAction({input: state, funding: funding!, navigator: navigator}))}>펀딩하기</button>
            </div>
        </div>
    )
}

export default FundingDonationAction;