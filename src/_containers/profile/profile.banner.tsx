import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Link} from "react-router-dom";

const ProfileBannerComponent = () => {
    const {auth, user} = useSelector((state: RootState) => state.ProfileReducer);

    return (
        <div className="row my-7" data-aos="fade-up" data-aos-delay="200">
            <img src={user!.image} alt="profile-img"
                 className="col-md-3 col-12 border border-5 rounded-circle size-10 p-0"/>
            <div className="col-md-9 col-12 mt-md-10 mt-2">
                <h4 className="col-1 text-center text-uppercase">{user!.nickname}</h4>
                <small className="col-1 text-center text-uppercase text-muted">{user!.address}</small>
                { auth === true && <div className="col-2 text-start mt-2"><Link to={"/edit"} state={{user: user!}} className="btn btn-sm text-secondary height-30 py-0 border-bottom border-3 border-dark">Edit</Link></div> }
            </div>
        </div>
    )
}

export default ProfileBannerComponent;