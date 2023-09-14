import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onToggleNoticeModalAction} from "../../action/modal.action";

const ModalNotice = () => {
    const dispatch = useDispatch();
    const {isOpenNoticeModal, noticeMessage} = useSelector((state: RootState) => state.ModalReducer);

    return (
        <Modal show={isOpenNoticeModal} centered={true}>
            <ModalHeader>
                <button type="button" className="btn-close" onClick={() => dispatch(onToggleNoticeModalAction())}></button>
            </ModalHeader>
            <ModalBody>
                <div className="modal-body text-center">
                    <h5 id="validation-message">{noticeMessage}</h5>
                    <button id="validation-btn" className="btn btn-primary" onClick={() => dispatch(onToggleNoticeModalAction())}>확인</button>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalNotice;