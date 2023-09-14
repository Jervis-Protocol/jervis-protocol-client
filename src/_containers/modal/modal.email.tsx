import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {SubmitHandler, useForm} from "react-hook-form";
import {onChangeEmailAction, onSendAuthNumberAction, onToggleEmailModalAction} from "../../action/modal.action";

type IInputEmail = {
    email?: string;
}

const ModalEmail = () => {
    const dispatch = useDispatch();
    const {isOpenEmailModal} = useSelector((state: RootState) => state.ModalReducer);
    const {register, handleSubmit, watch, formState: {errors}, setValue} = useForm<IInputEmail>();
    const onSubmit: SubmitHandler<IInputEmail> = data => {
        dispatch(onSendAuthNumberAction.request(data.email!));
        dispatch(onChangeEmailAction(data.email!));
        setValue('email', undefined);
    };

    return (
        <Modal show={isOpenEmailModal} centered={true}>
            <ModalHeader>
                <button type="button" className="btn-close" data-bs-dismiss="modal"
                        onClick={() => dispatch(onToggleEmailModalAction())}></button>
            </ModalHeader>
            <ModalBody>
                <div className="modal-body text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>지갑 연결이 완료되었습니다.<br/>
                            각종 알림을 받기 위한 메일 주소를 등록해주세요.</h5>
                        <div className="form-floating w-100 mb-2">
                            <input
                                {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                                type="email"
                                className={errors.email?.type === 'required' || errors.email?.type === 'pattern' ? "form-control is-invalid" : "form-control"}
                                placeholder="메일주소를 입력해주세요."
                            />
                            <label htmlFor="floatingInput">메일주소를 입력해주세요.</label>
                            <div className="invalid-feedback">{errors.email?.type === 'required' && "이메일 주소를 입력해주세요."}{errors.email?.type === 'pattern' && "이메일 주소를 다시 확인해주세요."}</div>
                        </div>
                        <button type={'submit'} className="btn btn-primary">인증번호 발송하기</button>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ModalEmail;