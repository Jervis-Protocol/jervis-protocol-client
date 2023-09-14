import {IFunding} from "../../type/_data/funding.type";
import {FUNDING_STATE} from "../../helper/funding-state-handler";
import {networkInfo} from "../../helper/network-handler";
import {Link} from "react-router-dom";

export type ICardState = {
    funding: IFunding
}

const CardItem = (state: ICardState) => {
    const { funding } = state;

    return (
        <div className="card border-0 p-2 pb-0 card-hover overflow-hidden rounded-4 shadow hover-lift">
            <div className="position-relative rounded-4 overflow-hidden">
                <img src={funding.background} className="img-fluid card-img rounded-4 height-400" style={{objectFit: 'cover'}}/>
                <div className="position-absolute end-0 top-0 px-2 py-2 m-3 d-flex flex-column bg-white bg-opacity-50 rounded-3">
                    <img className="width-30" src={networkInfo[funding.networkId].image} alt="crypto_klaytn"/>
                </div>
                <div className="position-absolute start-0 bottom-0 px-3 py-2 mb-3 d-flex flex-column align-items-start ms-3 bg-info text-white rounded">
                    <span className="d-block small">{FUNDING_STATE[funding.state].sentence}</span>
                </div>
            </div>
            <div className="card-body px-2">
                <div className="d-flex align-items-center mb-2">
                    <a href="#!" className="d-flex align-items-center flex-shrink-0 position-relative z-index-2">
                        <img src={funding.owner.image} width="24" height="24" className="rounded-circle flex-shrink-0 me-2"/>
                        <span className="flex-grow-1 small text-muted">@{funding.owner.nickname}</span>
                    </a>

                </div>
                <h5 className="mb-1 text-truncate">{funding.title}</h5>
                <small className="d-block mb-3 text-truncate">{funding.description}</small>
                <div className="d-flex justify-content-between">
                    <div className="js-hr-progress-bar progress height-10 w-100 mt-2">
                        <div
                            className="js-hr-progress-bar-indicator progress-bar bg-blue u-progress-bar--xs"
                            role="progressbar" style={{width: `${((funding.donation / funding.goal) * 100).toFixed(0)}%`}}
                            aria-valuenow={parseInt(((funding.donation / funding.goal) * 100).toFixed(0))}
                            aria-valuemin={0}
                            aria-valuemax={100}></div>
                    </div>
                    <p className="text-right mb-1 mx-2">{((funding.donation / funding.goal) * 100).toFixed(0)}%</p>
                </div>
                <div className="d-flex justify-content-between">
                    <small>{funding.goal} {networkInfo[funding.networkId].symbol} 목표</small>
                    <small>{funding.donation.toFixed(2)} {networkInfo[funding.networkId].symbol} 모집</small>
                </div>
            </div>
            <Link to={'/funding'} state={{ address: funding.address, networkId: funding.networkId }}  className="stretched-link"></Link>
        </div>
    )
}

export default CardItem;