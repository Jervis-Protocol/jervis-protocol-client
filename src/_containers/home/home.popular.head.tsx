import {Link} from "react-router-dom";

const HomePopularHead = () => {
    return (
        <div className="container pt-8 pt-lg-11 position-relative">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
                <div className="d-flex flex-sm-row flex-column align-items-center mb-5 mb-md-0" data-aos="fade-down"
                     data-aos-delay="200">
                    <h2 className="mb-3 mb-sm-0 me-sm-3 text-white display-6" data-aos="fade-down"
                        data-aos-delay="100">Popular Fundings</h2>
                </div>
                <Link  to={"/search"} className="btn btn-white btn-hover" data-aos="fade-down" data-aos-delay="150">
                    <span className="material-icons align-middle me-2 hover-translate">arrow_forward</span>Check All
                    Fundings
                </Link>
            </div>
        </div>
    )
}

export default HomePopularHead;