import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeDescriptionAction} from "../../action/create.action";

const CreateInputDescription = () => {
    const dispatch = useDispatch();
    const {description} = useSelector((state: RootState) => state.CreateReducer);
    return(
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <label className="h6" htmlFor="create_description">Description</label>
                </div>
                <div>
                    <p className="mb-0 small">240</p>
                </div>
            </div>
            <textarea
                rows={5}
                className="form-control"
                value={description}
                onChange={(event) => dispatch(onChangeDescriptionAction(event.target.value))}
            ></textarea>
        </div>
    )
}

export default CreateInputDescription;