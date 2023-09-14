import CardItem from "../common/card";
import {IFunding} from "../../type/_data/funding.type";

export type IHomePopularState = {
    popularFunding: Array<IFunding>
}

const HomePopularSwiper = (state: IHomePopularState) => {
    const { popularFunding } = state;

    return (
        <div className="swiper swiper-container overflow-visible swiper-popular">
            <div className="swiper-wrapper mb-5">
                { popularFunding.map( funding => <div key={funding._id} className="swiper-slide" data-aos="fade-up" data-aos-delay="300"><CardItem key={funding._id} funding={funding}/></div>)}
                {/*{ popularFunding.map( funding => <div key={funding._id} className="swiper-slide" data-aos="fade-up" data-aos-delay="300"><CardItem key={funding._id} funding={funding}/></div>)}*/}
            </div>
        </div>
    )
}

export default HomePopularSwiper;