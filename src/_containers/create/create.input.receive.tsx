import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeReceiverAction} from "../../action/create.action";
import {useEffect} from "react";
import {networkInfo} from "../../helper/network-handler";

const CreateInputReceive = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {beneficiary} = useSelector((state: RootState) => state.CreateReducer);

    useEffect(() => {
        dispatch(onChangeReceiverAction(user!.address))
    }, [])

    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="750">
            <label className="h6" htmlFor="create_addresse">Wallet Address</label>
            <div className="input-group">
                <span className="input-group-text bg-light py-0" id="basic-addon1">{networkInfo[user!.networkId].wallet}</span>
                <input
                    name="create_addresse"
                    type="text"
                    className="form-control form-control-md"
                    placeholder="펀딩받을 지갑 주소를 입력해주세요."
                    value={beneficiary}
                    onChange={(e) => dispatch(onChangeReceiverAction(e.target.value))}
                />
            </div>
            <small className="text-muted">﹒ 자금을 받으실 지갑 주소를 입력해 주세요.</small>
        </div>
    )
}

export default CreateInputReceive;