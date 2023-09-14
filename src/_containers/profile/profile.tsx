import ProfileBanner from "./profile.banner";
import ProfileBoard from "./profile.board";
import ProfileTab from "./profile.tab";
import ProfileContent from "./profile.content";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onGetUserAction, onUpdateAuthAction} from "../../action/profile.action";
import {useLocation} from "react-router-dom";
import {RootState} from "../../reducers/root.reducer";

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const {state} = useLocation();
    const {user} = useSelector((state: RootState) => state.ProfileReducer);
    const header = useSelector((state: RootState) => state.HeaderReducer);
    useEffect(() => {
        console.log(state);
        dispatch(onGetUserAction.request({networkId: parseInt(state.networkId), address: state.address}));
    }, [])
    useEffect(() => {
        if (user && header.user) {
            if (user!.networkId === header.user?.networkId && user!.address === header.user.address)
                dispatch(onUpdateAuthAction(true));
            else
                dispatch(onUpdateAuthAction(false));
        }
    }, [user, header.user]);
    if (!user)
        return <></>
    else
        return (
            <section className="position-relative overflow-hidden">
                <div
                    className="position-absolute start-0 top-0 w-100 height-350 w-md-75 bg-primary rounded-top-end-5 rounded-bottom-end-5 my-10"></div>
                <div className="container position-relative pt-12">
                    <div className="row m-0">
                        <h1 className="mb-3 mb-lg-4 display-4 mt-12 text-white text-uppercase" data-aos="fade-down"
                            data-aos-delay="100">Mypage</h1>
                        <ProfileBanner/>
                        <ProfileBoard/>
                        <ProfileTab/>
                        <ProfileContent/>
                    </div>
                </div>
            </section>
        )
}

export default ProfileContainer;