import {IFunding} from "../../type/_data/funding.type";
import {Link} from "react-router-dom";

export type IHomeInfoCardState = {
    funding: IFunding
}

const HomeInfoCard = (state: IHomeInfoCardState) => {
    const { funding } = state;

    return (
        <div className="col-lg-6 col-md-9 ms-lg-auto" data-aos="fade-left" data-aos-delay="200">
            <div className="position-relative ps-lg-9 pb-lg-5">
                <div className="card border-0 rounded-4 shadow-sm hover-lift">
                    <div className="position-relative">
                        <img src={funding.background} className="img-fluid rounded-4 rounded-bottom-0" alt="test image"/>
                    </div>
                    <div className="card-body px-4">
                        <div className="d-flex align-items-center mb-2">
                            <a href="#!" className="d-flex align-items-center flex-shrink-0 position-relative z-index-2">
                                <span className="flex-grow-1 fw-bold">@{funding.owner.nickname ? funding.owner.nickname : ''}</span>
                            </a>
                        </div>
                        <h5 className="mb-0 text-truncate">{funding.title}</h5>
                    </div>
                    <Link to="/funding" state={{networkId: funding.networkId, address: funding.address}} className="stretched-link"></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeInfoCard;