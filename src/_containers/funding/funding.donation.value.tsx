import {useLocation} from "react-router-dom";
import {networkInfo} from "../../helper/network-handler";
import {useDispatch} from "react-redux";
import {onChangeDonationValueAction} from "../../action/funding.action";

const FundingDonationValue = () => {
    const dispatch = useDispatch();
    const {state} = useLocation();

    return (
        <>
            <h3 className="mt-6">펀딩 목표 금액</h3>
            <div className="input-group">
                <input
                    type="number"
                    className={`form-control`}
                    id="detail-funding-value"
                    placeholder="펀딩 목표 금액을 입력해주세요."
                    onWheel={event => event.currentTarget.blur()}
                    onChange={(e) => dispatch(onChangeDonationValueAction(parseFloat(e.target.value)))}
                />
                <span className="input-group-text" id="basic-addon1">{networkInfo[state.networkId].symbol}</span>
            </div>
            <p className="text-muted">
                - 아래의 원화 환전 예상 금액을 참고할 수 있습니다.<br/>
                - 실제 모집 금액은 환율에 따라 다소 차이가 있을 수 있습니다.
            </p>
        </>
    )
}

export default FundingDonationValue;