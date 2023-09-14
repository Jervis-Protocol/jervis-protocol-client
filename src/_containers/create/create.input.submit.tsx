import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useNavigate} from "react-router-dom";
import {onInputValidationAction} from "../../action/create.action";

const CreateInputSubmit = () => {
    const state = useSelector((state: RootState) => state.CreateReducer);
    const navi = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="850">
            <button type="submit" className="btn btn-lg btn-primary" onClick={() => dispatch(onInputValidationAction({ input: state, navigator: navi}))}>정보 입력 완료</button>
        </div>
    )
}
export default CreateInputSubmit;