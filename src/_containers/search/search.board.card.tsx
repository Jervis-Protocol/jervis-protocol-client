import CardItem from "../common/card";
import {IFunding} from "../../type/_data/funding.type";
import {NavigateFunction, useNavigate} from "react-router-dom";

export type ISearchCardState = {
    funding: IFunding;
}

const SearchBoardCard = (state: ISearchCardState) => {
    const navigator: NavigateFunction = useNavigate();

    return (
        <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300" onClick={() => navigator(`/funding`, { state: { address: state.funding.address, networkId: state.funding.networkId }, preventScrollReset: true, relative: 'path'})}>
            <CardItem funding={state.funding} />
        </div>
    )
}

export default SearchBoardCard;