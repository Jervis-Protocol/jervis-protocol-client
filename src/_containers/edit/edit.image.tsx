import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {onChangeImageAction} from "../../action/edit.action";
import {RootState} from "../../reducers/root.reducer";

const EditImageComponent = () => {
    const imageInput = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const {image} = useSelector((state: RootState) => state.EditReducer);

    return (
        <div className="d-flex my-7 p-0" data-aos="fade-up" data-aos-delay="200">
            <img src={image} alt="profile-img" className="border border-5 rounded-circle size-10"/>
            <input className={"fade"} type={"file"} accept={"image/*"} ref={imageInput} style={{height: 0}} onChange={(e) => dispatch(onChangeImageAction.request(e.target.files![0]))}/>
            <button className="btn btn-sm mt-12" onClick={() => imageInput.current?.click()}>Replace</button>
            <button className="btn btn-sm mt-12" onClick={() => dispatch(onChangeImageAction.success("/assets/img/avatar/1.jpg"))}>Delete</button>
        </div>
    )
}

export default EditImageComponent;