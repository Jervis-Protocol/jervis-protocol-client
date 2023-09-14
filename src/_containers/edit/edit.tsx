import EditImage from "./edit.image";
import EditNickname from "./edit.nickname";
import EditEmail from "./edit.email";
import EditDescription from "./edit.description";
import EditAction from "./edit.action";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useEffect} from "react";
import {
    onChangeDescriptionAction,
    onChangeImageAction,
    onChangeNicknameAction,
    onUpdateEmailAction
} from "../../action/edit.action";
import EditEmailModal from "./edit.email.modal";
import EditEmailValidModal from "./edit.email.valid";

const EditContainer = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state: RootState) => state.HeaderReducer);

    useEffect(() => {
        if (user) {
            dispatch(onChangeImageAction.success(user.image));
            dispatch(onChangeDescriptionAction(user.description));
            dispatch(onUpdateEmailAction(user.email));
            dispatch(onChangeNicknameAction.success({input: user.nickname, error: undefined}));
        }
    }, [user])

    if (!user)
        return <></>;
    else
        return (
            <>
                <section className="position-relative overflow-hidden">
                    <div
                        className="position-absolute start-0 top-0 w-100 height-350 w-md-75 bg-primary rounded-top-end-5 rounded-bottom-end-5 my-10"></div>
                    <div className="container position-relative pt-12">
                        <div className="row m-0">
                            <h1 className="mb-3 mb-lg-4 display-4 mt-12 text-white text-uppercase" data-aos="fade-down"
                                data-aos-delay="100">Edit Profile</h1>
                            <EditImage/>
                            <div className="row mb-4" data-aos="fade-up" data-aos-delay="300">
                                <EditNickname/>
                                <EditEmail/>
                            </div>
                            <EditDescription/>
                            <EditAction/>
                        </div>
                    </div>
                </section>
                <EditEmailModal />
                <EditEmailValidModal />
            </>
        )
}

export default EditContainer;