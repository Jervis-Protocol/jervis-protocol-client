import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeBeneficiaryAction} from "../../action/funding.action";
import {useEffect} from "react";

const FundingDonationBeneficiary = () => {
    const dispatch = useDispatch();
    const {state} = useLocation();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    useEffect(() => {dispatch(onChangeBeneficiaryAction(user ? user.address : ''))}, []);

    return (
        <>
            <h3 className="mt-6">NFT 리워드 발행 주소</h3>
            <div className="input-group border-danger">
                <span className="input-group-text" id="funding-detail-modal-network">{networkInfo[state.networkId].wallet}</span>
                <input
                    id="detail-client"
                    name="client"
                    type="text"
                    className="form-control"
                    placeholder="펀딩 NFT 리워드를 받을 지갑 주소를 입력해주세요."
                    onChange={(e) => dispatch(onChangeBeneficiaryAction(e.target.value))}
                    value={user ? user.address : ''}/>
            </div>
            <p className="text-muted">
                - NFT리워드는 앱 지갑에서 보실 수 있습니다.&nbsp;&nbsp;
                [<a href="https://medium.com/@wisestonster/kaikas-%EC%95%B1-%EC%A7%80%EA%B0%91-%EC%84%A4%EC%B9%98-%EB%B0%A9%EB%B2%95-629d79e463b6" target="_blank"><span>설치방법</span></a>]
            </p>
        </>
    )
}

export default FundingDonationBeneficiary;