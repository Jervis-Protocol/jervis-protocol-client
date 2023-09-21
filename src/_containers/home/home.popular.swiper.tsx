import CardItem from "../common/card";
import {IFunding} from "../../type/_data/funding.type";
import { Swiper, SwiperSlide } from 'swiper/react';

export type IHomePopularState = {
    popularFunding: Array<IFunding>
}

const HomePopularSwiper = (state: IHomePopularState) => {
    const {popularFunding} = state;
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={12}
            keyboard={{
                enabled: true,
            }}
            loop={false}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                }
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
            }}
            navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            }}
            className="swiper swiper-container overflow-visible swiper-popular"
        >
            { popularFunding.map( funding => <SwiperSlide key={funding._id} className="swiper-slide" data-aos="fade-up" data-aos-delay="300"><CardItem key={funding._id} funding={funding}/></SwiperSlide>)}
        </Swiper>
    )
}

export default HomePopularSwiper;