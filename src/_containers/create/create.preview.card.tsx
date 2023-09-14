import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {networkInfo} from "../../helper/network-handler";

export const CreatePreviewCard = () => {
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {title, description, goal, background} = useSelector((state: RootState) => state.CreateReducer);
    return (
        <div className="card border-0 p-2 pb-0 card-hover overflow-hidden rounded-4 shadow hover-lift">
            <div className="position-relative rounded-4 overflow-hidden">
                <img src={!background ? "assets/img/test-img.jpg" : background} className="img-fluid card-img rounded-4" alt="test image"/>
            </div>
            <div className="card-body px-2">
                <div className="d-flex align-items-center mb-2">
                    <a href="#!" className="d-flex align-items-center flex-shrink-0 position-relative z-index-2">
                        <img src={user!.image} width="24" height="24" className="rounded-circle flex-shrink-0 me-2"/>
                        <span className="flex-grow-1 small text-muted">@{user!.nickname}</span>
                    </a>
                </div>
                <h5 className="mb-1 text-truncate">{!title ? "Title" : title}</h5>
                <small className="d-block mb-3 text-truncate">{!description ? "Description" : description}</small>
                <div className="d-flex justify-content-between">
                    <div className="js-hr-progress-bar progress height-10 w-100 mt-2">
                        <div className="js-hr-progress-bar-indicator progress-bar bg-blue u-progress-bar--xs"
                             role="progressbar"
                             style={{width: '0%'}}
                             aria-valuenow={0}
                             aria-valuemin={0}
                             aria-valuemax={100}></div>
                    </div>
                    <p className="text-right mb-1 mx-2">0%</p>
                </div>
                <div className="d-flex justify-content-between">
                    <small>{!goal ? "Target Amount" : goal} {networkInfo[user!.networkId].symbol}</small>
                    <small>0 {networkInfo[user!.networkId].symbol}</small>
                </div>
            </div>
        </div>
    )
}

export default CreatePreviewCard;