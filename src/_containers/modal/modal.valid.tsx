import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {
    onResendAuthNumberAction,
    onToggleValidModalAction,
    onValidationAuthNumberAction,
} from "../../action/modal.action";
import {SubmitHandler, useForm} from "react-hook-form";

type IInputValid = {
    number?: number;
}

const ModalValid = () => {
    const dispatch = useDispatch();
    const {email, isOpenValidModal, authFail} = useSelector((state: RootState) => state.ModalReducer);
    const {register, handleSubmit, watch, formState: {errors}, setValue} = useForm<IInputValid>();
    const onSubmit: SubmitHandler<IInputValid> = data => {
        dispatch(onValidationAuthNumberAction.request(data.number!));
        setValue('number', undefined);
    }

    return (
        <Modal show={isOpenValidModal} centered={true}>
            <ModalHeader>
                <button type="button" className="btn-close" data-bs-dismiss="modal"
                        onClick={() => dispatch(onToggleValidModalAction())}></button>
            </ModalHeader>
            <ModalBody>
                <div className="modal-body text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>입력하신 메일로 발송된 인증번호를 입력해주세요.</h5>
                        <div className="form-floating w-100 mb-2">
                            <input
                                type="number"
                                className={errors.number?.type === 'required' || authFail ? "form-control  is-invalid" : "form-control"}
                                placeholder="인증번호를 입력해주세요."
                                {...register('number', {required: true, valueAsNumber: true})}
                                onWheel={ event => event.currentTarget.blur() }
                            />
                            <label htmlFor="floatingInput">인증번호를 입력해주세요.</label>
                            <div id="verification-invalid-feedback " className="invalid-feedback">
                                {authFail && `인증번호를 확인해주세요. 인증번호를 받지 못했다면 인증번호 재발송을 눌러주세요.`}
                                {errors.number?.type === 'required' && "인증번호를 입력해주세요."}
                            </div>
                        </div>
                        <button className="btn btn-primary mb-2" type={'submit'}>인증번호 확인</button>
                    </form>
                    <small className="text-muted d-block" style={{cursor: "pointer"}} onClick={() => dispatch(onResendAuthNumberAction.request(email!))}>인증번호 재발송</small>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalValid;