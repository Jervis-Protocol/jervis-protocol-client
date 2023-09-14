import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";


const FundingBannerComponent = () => {
    const { funding } = useSelector((state: RootState) => state.FundingReducer);
    return (
        <section className="position-relative overflow-hidden">
            <div className="position-absolute start-0 top-0 w-100 height-400 my-6 my-lg-10" style={{backgroundImage: `url(${funding!.background})`}}></div>
            <div className="position-absolute start-0 top-0 w-100 height-400 bg-opacity-75 bg-dark mt-6 mt-lg-10"></div>

            <div className="container position-relative pt-12 text-center">
                <div className="row m-0 pt-lg-8 pt-5">
                    <h1 className="display-5 mt-8 text-white keep-all">{funding!.title}</h1>
                    <div className="d-flex mt-lg-8 my-5 justify-content-center">
                        <img src={funding!.owner.image} alt="profile-img"
                             className="border border-2 rounded-circle size-2"/>
                        <p className="fs-5 mx-2 fw-bold text-white">{funding!.owner.nickname}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FundingBannerComponent;