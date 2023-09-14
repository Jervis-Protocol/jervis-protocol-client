import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {networkInfo} from "../../helper/network-handler";

const SummaryPreviewComponent = () => {
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const inputFunding = useSelector((state: RootState) => state.CreateReducer);

    return (
        <div className="col-lg-4 ms-lg-auto" data-aos="fade-up" data-aos-delay="150">
            <div className="sticky-top">
                <h5 className="mb-4 pt-4">Funding card Preview
                    <span role="button" data-tippy-content="This is how your product will look like on listing page" data-tippy-placement="bottom">
                        <span className="material-icons align-middle">info</span></span>
                </h5>
                <div className="card border-0 p-2 pb-0 card-hover overflow-hidden rounded-4 shadow hover-lift">
                    <div className="position-relative rounded-4 overflow-hidden">
                        <img src={inputFunding.background} className="img-fluid card-img rounded-4 height-400"
                             alt="test image" style={{objectFit: 'cover'}}/>
                        <div
                            className="position-absolute end-0 top-0 px-2 py-2 m-3 d-flex flex-column bg-white bg-opacity-50 rounded-3">
                            <img className="width-30" src={networkInfo[user!.networkId].image}/>
                        </div>
                        <div className="position-absolute start-0 bottom-0 px-3 py-2 mb-3 d-flex flex-column align-items-start ms-3 bg-info text-white rounded">
                            <span className="d-block small">오픈 예정인 펀딩입니다</span>
                        </div>
                    </div>
                    <div className="card-body px-2">
                        <div className="d-flex align-items-center mb-2">
                            <a href="#!" className="d-flex align-items-center flex-shrink-0 position-relative z-index-2">
                                <img src={user!.image} width="24" height="24"
                                     className="rounded-circle flex-shrink-0 me-2"/>
                                <span className="flex-grow-1 small text-muted">
                                                @{user!.nickname}
                                            </span>
                            </a>

                        </div>
                        <h5 className="mb-1 text-truncate">{inputFunding.title}</h5>
                        <small className="d-block mb-3 text-truncate">
                            {inputFunding.description}
                        </small>
                        <div className="d-flex justify-content-between">
                            <div className="js-hr-progress-bar progress height-10 w-100 mt-2">
                                <div className="js-hr-progress-bar-indicator progress-bar bg-blue u-progress-bar--xs" role="progressbar" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                            <p className="text-right mb-1 mx-2">0%</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <small>{inputFunding.goal} {networkInfo[user!.networkId].symbol}</small>
                            <small>0 {networkInfo[user!.networkId].symbol}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SummaryPreviewComponent;