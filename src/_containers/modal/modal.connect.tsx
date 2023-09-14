import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {onConnectAction, onToggleConnectModalAction} from "../../action/modal.action";
import {RootState} from "../../reducers/root.reducer";

const ModalConnect = () => {
    const dispatch = useDispatch();
    const {isOpenConnectModal} = useSelector((state: RootState) => state.ModalReducer);
    return (
        <Modal show={isOpenConnectModal} className={"modal fade"} dialogClassName={"modal-dialog"} centered={true} contentClassName={"modal-content shadow"}>
            <ModalHeader>
                <button type="button" className="btn-close" onClick={() => dispatch(onToggleConnectModalAction())}></button>
            </ModalHeader>
            <ModalBody className={"modal-body text-center"}>
                <h5>지갑을 이용해 키다리펀딩에 로그인합니다.<br/>아래 지갑 중 사용할 지갑을 선택해주세요.</h5>
                <div>
                    <button className="btn btn-light py-3" type="submit" onClick={() => dispatch(onConnectAction.request(parseInt(import.meta.env.VITE_APP_POLYGON_NETWORKID)))}>
                        <img src="/assets/img/polygon.svg" width="20px" height="20px"/>&#160;&#160;Polygon Network 메타마스크로 연결
                    </button>
                    <p className="visually-hidden valldition">Metamask가 설치되지 않았습니다.</p>
                </div>
                <div>
                    <button className="btn btn-light py-3" type="submit" disabled={true} onClick={() => dispatch(onConnectAction.request(parseInt(import.meta.env.VITE_APP_ETHEREUM_NETWORKID)))}>
                        <img src="/assets/img/ethereum.svg" width="20px" height="20px"/>&#160;&#160;Ethereum Network 메타마스크로 연결
                    </button>
                    <p className="visually-hidden valldition">Metamask가 설치되지 않았습니다.</p>
                </div>
                <p className="text-muted mt-5">사용 중인 지갑이 없으신가요? <a
                    href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko"
                    target="_blank">Kaikas 설치</a></p>
            </ModalBody>
        </Modal>
    )
}

export default ModalConnect;