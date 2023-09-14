import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeTitleAction} from "../../action/create.action";

const CreateInputTitle = () => {
    const dispatch = useDispatch();
    const {title} = useSelector((state: RootState) => state.CreateReducer);

    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="200">
            <label className="h6" htmlFor="create_title">Title</label>
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="eg. keedari-funding"
                value={title}
                onChange={(event) => dispatch(onChangeTitleAction(event.target.value))}
            />
        </div>
    )
}

export default CreateInputTitle;