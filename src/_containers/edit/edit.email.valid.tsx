import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {
    onChangeValidNumberAction,
    onResendAuthNumberAction,
    onToggleValidModalAction,
    onValidationAuthNumberAction
} from "../../action/edit.action";

const EditEmailValidModal = () => {
    const dispatch = useDispatch();
    const {isOpenValidModal, input, error} = useSelector((state: RootState) => state.EditValidReducer);
    const {email} = useSelector((state: RootState) => state.EditEmailReducer);

    return (
        <Modal show={isOpenValidModal} centered={true}>
            <ModalHeader>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => dispatch(onToggleValidModalAction())}></button>
            </ModalHeader>
            <ModalBody>
                <div className="modal-body text-center">
                        <h5>입력하신 메일로 발송된 인증번호를 입력해주세요.</h5>
                        <div className="form-floating w-100 mb-2">
                            <input
                                type="number"
                                className={error === true ? "form-control  is-invalid" : "form-control"}
                                placeholder="인증번호를 입력해주세요."
                                value={input}
                                onChange={(e) => dispatch(onChangeValidNumberAction(parseInt(e.target.value)))}
                                onWheel={ event => event.currentTarget.blur() }
                            />
                            <label htmlFor="floatingInput">인증번호를 입력해주세요.</label>
                            <div id="verification-invalid-feedback " className="invalid-feedback">
                                {error && `인증번호를 확인해주세요. 인증번호를 받지 못했다면 인증번호 재발송을 눌러주세요.`}
                            </div>
                        </div>
                        <button className="btn btn-primary mb-2" type={'submit'} onClick={() => dispatch(onValidationAuthNumberAction.request({number: input!, email: email}))}>인증번호 확인</button>
                    <small className="text-muted d-block" style={{cursor: "pointer"}} onClick={() => dispatch(onResendAuthNumberAction.request(email!))}>인증번호 재발송</small>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default EditEmailValidModal;