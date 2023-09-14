import {useDispatch} from "react-redux";
import {onChangeSymbolAction} from "../../action/create.action";

const CreateInputNftSymbol = () => {
    const dispatch = useDispatch();
    return (
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="650">
            <label className="h6" htmlFor="create_symbol">NFT Symbol</label>
            <input
                type="text"
                name="create_symbol"
                className="form-control form-control-lg"
                placeholder=""
                max={4}
                onChange={(e) => dispatch(onChangeSymbolAction(e.target.value))}
            />
            <small className="text-muted">﹒ 발행하는 NFT 고유의 심볼을 정해주세요. 알파벳만 가능하며 최대 4글자입니다.</small>
        </div>
    )
}

export default CreateInputNftSymbol;