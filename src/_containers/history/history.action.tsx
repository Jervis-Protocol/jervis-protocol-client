import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useNavigate} from "react-router-dom";
import {onGetABIAction} from "../../action/history.action";

const HistoryActionComponent = () => {
    const {funding} = useSelector((state: RootState) => state.HistoryReducer);
    const navigator = useNavigate();
    const dispatch = useDispatch();

    return (
        <section className="position-relative overflow-hidden py-10">
            <div className="container position-relative">
                <div className="text-center bg-light p-5 rounded-4 text-black" data-aos="fade-up" data-aos-delay="100">
                    <h5>[안내]</h5>
                    송금시 수수료를 제외한 금액이 보내집니다. <br/>
                    펀딩한 금액을 환불할 경우 왕복 송금 수수료가 발생하니 신중하게 판단해주세요. <br/>
                    펀딩한 금액은 예치 후 펀딩 완료시 개최자에게 송금됩니다. <br/>
                    NFT는 펀딩 종료 후 일괄 발행됩니다. <br/>
                </div>
                <div className="d-flex justify-content-center mt-5" data-aos="fade-up" data-aos-delay="200">
                    <button className="btn btn-secondary mx-1" type="button" onClick={() => navigator(-1)}>돌아가기</button>
                    {funding!.state === 10003 && <button className="btn btn-primary mx-1" type="button" onClick={() => dispatch(onGetABIAction.request({funding: funding!}))}>정산받기</button>}
                </div>
            </div>
        </section>
    )
}

export default HistoryActionComponent;