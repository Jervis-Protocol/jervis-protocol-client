import HomePopularHead from "./home.popular.head";
import HomePopularSwiper from "./home.popular.swiper";
import HomePopularNavi from "./home.popular.navi";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const HomePopularComponent = () => {
    const { popularFunding } = useSelector((state: RootState) => state.HomeReducer);

    return (
        <section className="position-relative">
            <div className="position-absolute start-0 top-0 w-100 h-50 w-md-75 bg-primary rounded-top-end-5"></div>
            <HomePopularHead />
            <div className="overflow-hidden">
                <div className="container pt-5 pb-8 pb-lg-11">
                    <HomePopularSwiper popularFunding={popularFunding} />
                    <HomePopularNavi />
                </div>
            </div>
        </section>
    )
}

export default HomePopularComponent;