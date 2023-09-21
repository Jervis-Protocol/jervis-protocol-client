import useScript from "../../helper/useScript.tsx";

const HomePopularNavi = () => {
    useScript("/assets/js/home.js");

    return (
        <div className="position-relative align-items-center d-flex justify-content-center">
            <div className="swiper-prev size-3 rounded-pill d-flex align-items-center justify-content-center btn btn-outline-primary position-static m-0">
                <span className="material-icons fs-2">chevron_left</span>
            </div>
            <div className="swiper-pagination w-auto mx-3 position-static"></div>
            <div className="swiper-next position-static m-0 rounded-pill size-3 d-flex align-items-center justify-content-center btn btn-outline-primary">
                <span className="material-icons fs-2">chevron_right</span>
            </div>
        </div>
    )
}

export default HomePopularNavi;