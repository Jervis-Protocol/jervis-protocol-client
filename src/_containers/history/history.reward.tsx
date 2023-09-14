import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const HistoryRewardComponent = () => {
    const {nfts} = useSelector((state: RootState) => state.HistoryReducer);

    return (
        <section className="position-relative overflow-hidden py-10">
            <div className="container position-relative">
                <div className="container-fluid position-relative z-index-1">
                    {
                        nfts!.map( nft => {
                            return (
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0">
                                        <div className="position-relative" data-aos="fade-up" data-aos-delay="100">
                                            <img className="img-fluid position-relative rounded-block shadow-lg" alt="NFT image"
                                                 src={nft.image}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 offset-xl-1">
                                        <h1 className="lh-1 mb-6 splitting-left" data-aos="fade-up-left" data-aos-delay="150">
                                            Reward NFT
                                        </h1>
                                        <p className="mb-4 mx-3 lead" data-aos="fade-up" data-aos-delay="200">
                                            NFT Title : {nft.name}
                                        </p>
                                        <p className="mb-4 mx-3 lead" data-aos="fade-up" data-aos-delay="250">
                                            NFT Description : {nft.description}
                                        </p>
                                        <p className="mb-4 mx-3 lead" data-aos="fade-up" data-aos-delay="300">
                                            Issue standard amount : {nft.price}
                                        </p>
                                        <p className="mb-6 mx-3 lead" data-aos="fade-up" data-aos-delay="350">
                                            Issued volume: {nft.max}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HistoryRewardComponent;