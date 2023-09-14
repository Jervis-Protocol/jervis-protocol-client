import {useDispatch, useSelector} from "react-redux";
import {onChangeTypeAction} from "../../action/create.action";
import {RootState} from "../../reducers/root.reducer";

const CreateInputType = () => {
    const dispatch = useDispatch();
    const {type} = useSelector((state: RootState) => state.CreateReducer);
    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="450">
            <h6 className="mb-2">Form</h6>
            <div className="row m-0">
                <div className="col-md-6 col-lg-6 col-sm-12 p-0">
                    <input
                        type="radio"
                        className="btn-check"
                        name="type"
                        autoComplete="off"
                        id="type-target"
                        onClick={() => dispatch(onChangeTypeAction(12001))}
                    />
                    <label className={`btn u-heading-v9--left g-bg-gray-light-v1 p-4 g-height-200 rounded-0 ${type === 12001 ? 'g-bg-gray-light-v1' : 'g-bg-gray-light-v5'}`} htmlFor="type-target">
                    <i className="bi bi-award-fill h4"></i>
                        <p className="h4 py-3">목표 달성</p>
                        <p className="small">
                            모집 금액이 목표치에 달성한 경우에만 펀딩이 성사됩니다.
                            성사되지 못한 경우 모금액이 후원자들에게 환불됩니다.
                        </p>
                    </label>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 p-0">
                    <input
                        type="radio"
                        className="btn-check"
                        name="type"
                        autoComplete="off"
                        id="type-date"
                        onClick={() => dispatch(onChangeTypeAction(12002))}
                    />
                    <label className={`btn u-heading-v9--left g-bg-gray-light-v1 p-4 g-height-200 rounded-0 ${type === 12002 ? 'g-bg-gray-light-v1' : 'g-bg-gray-light-v5'}`} htmlFor="type-date">
                        <i className="bi bi-calendar-check h4"></i>
                        <p className="h4 py-3">기간 달성</p>
                        <p className="small">
                            모집 금액 대신 기간이 만료되는 경우 자동으로 성사됩니다.<br/><br/>
                        </p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CreateInputType;