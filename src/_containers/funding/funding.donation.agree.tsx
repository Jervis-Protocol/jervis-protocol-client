import {useDispatch, useSelector} from "react-redux";
import {
    onChangeAllAgreeAction,
    onChangePrivacyAgreeAction,
    onChangeServiceAgreeAction
} from "../../action/funding.action";
import {RootState} from "../../reducers/root.reducer";

const FundingDonationAgree = () => {
    const dispatch = useDispatch();
    const {agreePrivacy, agreeService, agree} = useSelector((state:RootState) => state.FundingDonationReducer);
    return (
        <>
            <h3 className="mt-6">이용 약관 및 동의</h3>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center bg-style-1">
                    <div className="form-check" onClick={() => dispatch(onChangeAllAgreeAction())}>
                        <input className="form-check-input" type="checkbox" value="" id="terms_all" checked={agree}/>
                        <label className="form-check-label" htmlFor="terms_all">
                            전체 약관에 동의합니다.
                        </label>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check"  onClick={() => dispatch(onChangeServiceAgreeAction())}>
                        <input className="form-check-input" type="checkbox" value="" id="terms" checked={agreeService}/>
                        <label className="form-check-label" htmlFor="terms">
                            서비스 이용약관에 동의합니다.
                        </label>
                    </div>
                    <span
                        className="btn btn-sm btn-primary"
                        typeof={"button"}
                        data-bs-toggle="modal"
                        data-bs-target="#modal-terms">보기</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check" onClick={() => dispatch(onChangePrivacyAgreeAction())}>
                        <input className="form-check-input" type="checkbox" value="" id="privacy" checked={agreePrivacy}/>
                        <label className="form-check-label" htmlFor="privacy">
                            개인정보 이용약관에 동의합니다.
                        </label>
                    </div>
                    <span
                        className="btn btn-sm btn-primary"
                        typeof={"button"}
                        data-bs-toggle="modal"
                        data-bs-target="#modal-privacy">보기</span>
                </li>
            </ul>
        </>
    )
}

export default FundingDonationAgree;