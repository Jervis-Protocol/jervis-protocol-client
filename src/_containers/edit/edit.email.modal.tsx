import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeEmailAction, onSendAuthNumberAction, onToggleEmailModalAction} from "../../action/edit.action";

const EditEmailModal = () => {
    const dispatch = useDispatch();
    const {email, error, isOpenEmailModal} = useSelector((state: RootState) => state.EditEmailReducer);
    return (
        <Modal show={isOpenEmailModal} className={"modal fade"} dialogClassName={"modal-dialog modal-dialog-centered"} centered={true} contentClassName={"modal-content"}>
            <ModalHeader>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => dispatch(onToggleEmailModalAction())}></button>
            </ModalHeader>
            <ModalBody className={"modal-body text-center"} >
                <h5 className="mb-4">수정할 메일 주소를 등록해주세요.</h5>
                <div className="form-floating w-100 mb-4">
                    <input type="email" className={`form-control ${error === false && "is-invalid"} ${error === true && "is-valid"}`} id="editEmail-modal-input" placeholder="메일주소를 입력해주세요." value={email} onChange={(e) => dispatch(onChangeEmailAction.request(e.target.value))}/>
                    <label htmlFor="floatingInput">메일주소를 입력해주세요.</label>
                    { error === false && <div id="check-invalid-feedback" className="invalid-feedback">이메일 주소를 다시 확인해주세요.</div>}
                </div>
                <button className="btn btn-primary"
                        type="submit"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-edit-verification-email"
                        disabled={error !== true}
                        onClick={() => dispatch(onSendAuthNumberAction.request(email))}>인증번호 발송하기</button>
            </ModalBody>
        </Modal>
    )
}

export default EditEmailModal;