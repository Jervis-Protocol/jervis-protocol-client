import {useDispatch} from "react-redux";
import {onChangeEDateAction, onChangeSDateAction} from "../../action/create.action";

const CreateInputDate = () => {
    const dispatch = useDispatch();
    return (
        <div className="row mb-4" data-aos="fade-up" data-aos-delay="500">
            <div className="col-6">
                <label className="h6" htmlFor="input-startDate">Funding start date</label>
                <input type="date" className="form-control" name="input-startDate" id="input-startDate" placeholder="" onChange={(e) => dispatch(onChangeSDateAction(e.target.valueAsDate!))}/>
            </div>
            <div className="col-6">
                <label className="h6" htmlFor="input-endDate">Funding end date</label>
                <input type="date" className="form-control" name="input-endDate" id="input-endDate" placeholder="" onChange={(e) => dispatch(onChangeEDateAction(e.target.valueAsDate!))}/>
            </div>
        </div>
    )
}

export default CreateInputDate;