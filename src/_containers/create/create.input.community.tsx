import {useDispatch} from "react-redux";
import {onChangeCommunityAction} from "../../action/create.action";

const CreateInputCommunity = () => {
    const dispatch = useDispatch();

    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="550">
            <label className="h6" htmlFor="create_community">Community</label>
            <input
                type="text"
                name="create_community"
                className="form-control form-control-lg"
                placeholder=""
                onChange={(e) => dispatch(onChangeCommunityAction(e.target.value))}
            />
            <small className="text-muted">﹒ 디스코드, 텔레그램, 트위터 등 후원자과 소통 가능한 채널을 등록해주세요.</small>
        </div>
    )
}

export default CreateInputCommunity;