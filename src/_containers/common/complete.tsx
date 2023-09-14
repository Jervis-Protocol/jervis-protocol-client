import {useLocation} from "react-router-dom";

const CompleteContainer = () => {
    const { state } = useLocation();

    return (
        <section className="position-relative py-12">
            <div className="container px-xl-5 position-relative pt-10 text-center">
                <div className="d-flex justify-content-center my-6" data-aos="fade-up" data-aos-delay="100">
                    <h1 className="border border-3 border-primary rounded-4 p-8 text-dark">{state.message}</h1>
                </div>
                <a href="/" className="btn btn-lg btn-primary mb-10" data-aos="fade-up"
                   data-aos-delay="200">Home</a>
            </div>
        </section>
    )
}

export default CompleteContainer;