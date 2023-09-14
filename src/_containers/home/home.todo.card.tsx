import CardItem from "../common/card";
import {IFunding} from "../../type/_data/funding.type";

export type IHomeTodoState = {
    todoFunding: Array<IFunding>
}

const HomeTodoCard = (state: IHomeTodoState) => {
    const { todoFunding } = state;

    return (
        <div className="row justify-content-center">
            { todoFunding.map(funding => <div key={funding._id} className="col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200"> <CardItem key={funding._id} funding={funding}/></div>)}
        </div>
    )
}

export default HomeTodoCard;