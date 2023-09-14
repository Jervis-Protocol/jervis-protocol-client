import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onchangeGoalAction} from "../../action/create.action";
import {networkInfo} from "../../helper/network-handler";

const CreateInputGoal = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {goal} = useSelector((state: RootState) => state.CreateReducer);
    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="800">
            <label className="h6" htmlFor="create_price">Target Amount</label>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="펀딩 목표 금액을 입력해주세요."
                    value={goal}
                    onChange={(event) => dispatch(onchangeGoalAction(event.target.value))}
                />
                <span className="input-group-text bg-light"
                      id="create-funding-symbol1">{networkInfo[user!.networkId].symbol}</span>
            </div>
        </div>
    )
}

export default CreateInputGoal;