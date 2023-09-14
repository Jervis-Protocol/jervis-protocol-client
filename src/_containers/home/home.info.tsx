import HomeInfoText from "./home.info.text";
import HomeInfoCard from "./home.info.card";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const HomeInfoComponent = () => {
    const { mainFunding } = useSelector((state: RootState) => state.HomeReducer);

    return (
        <section className="position-relative overflow-hidden">
            <div className="container position-relative py-8">
                <div className="row pt-6 align-items-start justify-content-center">
                    <HomeInfoText />
                    { mainFunding && <HomeInfoCard funding={mainFunding}/>}
                </div>
            </div>
        </section>
    )
}

export default HomeInfoComponent;