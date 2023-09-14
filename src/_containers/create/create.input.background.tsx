import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onUploadBackgroundImageAction} from "../../action/create.action";

const CreateInputBackground = () => {
    const dispatch = useDispatch();
    const {background} = useSelector((state: RootState) => state.CreateReducer);
    const backgroundInput = useRef<HTMLInputElement>(null);

    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="250">
            <h6 className="mb-2">Representative Image</h6>
            <div>
                <div id="background-wrap-div"
                     className="image-upload-wrap ratio ratio-21x9 text-center border-dashed rounded-4" style={{display: background ? 'none' : 'block'}}>
                    <div className="g-pos-abs" style={{paddingTop: '15%', cursor: 'pointer'}} onClick={() => backgroundInput.current?.click()}>
                        <i className="bi bi-images h3"></i>
                        <p>이미지 파일을 여기로 <br/>드래그해서 업로드하세요.</p>
                    </div>
                    <input
                        className="w-100 fade"
                        type="file"
                        accept="image/*"
                        ref={backgroundInput}
                        style={{height: 0}}
                        onChange={(e) => dispatch(onUploadBackgroundImageAction.request(e.target.files![0]))}
                    />
                </div>
                <div id="background-load-div" className={background ? "text-center" : "d-none text-center"}>
                    <img id="background-preview-image" className="file-upload-image  w-100" src={background}/>
                </div>
                <button id="input-background-btn" className="btn btn-secondary mt-3" type="button" onClick={() => backgroundInput.current?.click()}>Upload</button>
            </div>
        </div>
    )
}

export default CreateInputBackground;