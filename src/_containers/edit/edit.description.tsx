import {useDispatch} from "react-redux";
import {onChangeDescriptionAction} from "../../action/edit.action";

const EditDescriptionComponent = () => {
    const dispatch = useDispatch();

    return (
        <div className=" mb-4" data-aos="fade-up" data-aos-delay="400">
            <label htmlFor="user-bio" className="form-label d-block fs-4">Introduce</label>
            <textarea typeof="text" className="form-control" id="user-bio" placeholder="소개글을 작성해주세요." onChange={(e) => dispatch(onChangeDescriptionAction(e.target.value))}></textarea>
        </div>
    )
}

export default EditDescriptionComponent;