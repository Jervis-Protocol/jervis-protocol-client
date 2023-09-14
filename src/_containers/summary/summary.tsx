import SummaryInput from "./summary.input";
import SummaryPreview from "./summary.preview";
import {useEffect} from "react";

const SummaryContainer = () => {
    useEffect(() => window.onbeforeunload = () => window.scrollTo(0, 0), []);

    return(
        <section className="position-relative pt-10 pt-lg-12">
            <div className="container pt-lg-6 position-relative">
                <div className="row pb-8 pb-lg-11">
                    <SummaryInput />
                    <SummaryPreview />
                </div>
            </div>
        </section>
    )
}

export default SummaryContainer;