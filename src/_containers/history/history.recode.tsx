import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {getDateKRString} from "../../helper/date-string";

const HistoryRecodeComponent = () => {
    const {funding} = useSelector((state: RootState) => state.HistoryReducer);

    return (
        <section className="position-relative overflow-hidden bg-style-2 py-10">
            <div className="container position-relative">
                <h1 className="lh-1 mb-4 splitting-left" data-aos="fade-left" data-aos-delay="250">
                    History
                </h1>
                <div className="">
                    <div className="row" data-aos="fade-up" data-aos-delay="300">
                        <p className="col-6 col-md-3">Date</p>
                        <p className="col-6 col-md-3">Amount</p>
                        <p className="col-12 col-md-6">Issued address</p>
                    </div>

                    <div className="border-top border-2 border-dark">
                        {
                            funding!.history.map( item => {
                                return(
                                    <div className="row border-bottom border-1 border-secondary mx-1 pt-3" data-aos="fade-up"
                                         data-aos-delay="350">
                                        <p className="col-6 col-md-3">{getDateKRString(item.createdAt)}</p>
                                        <p className="col-6 col-md-3">{item.value}</p>
                                        <p className="col-12 col-md-6">{item.sender}<i className="bi bi-box-arrow-up-right g-color-primery g-pl-5"></i></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryRecodeComponent;