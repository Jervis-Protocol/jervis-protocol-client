import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const ProfileBoardComponent = () => {
    const {user} = useSelector((state: RootState) => state.ProfileReducer);
    return (
        <div className="row text-left mb-4 mt-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="col-md-3 col-6">
                <p className="fs-4">참여한 펀딩</p>
                <p className="fs-5">{user!.receipts.length}</p>
            </div>
            <div className="col-md-3 col-6">
                <p className="fs-4">개설한 펀딩</p>
                <p className="fs-5">{user!.create.length}</p>
            </div>
        </div>
    )
}

export default ProfileBoardComponent;