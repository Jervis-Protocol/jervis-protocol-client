const FooterComponent = () => {
    return (
        <footer className="footer border-top position-relative text-white"
                style={{backgroundImage: "url('assets/img/img1.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundColor:'#002658', backgroundPositionY: 'center'}}>
            <div className="container pt-8 pb-5 pt-lg-11">
                <div className="row justify-content-between">
                    <div className="col-md-5 col-xl-4 mb-5">
                        <div className="row mb-5">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div
                                        className="flex-shrink-0 size-3 bg-pink text-white d-flex align-items-center justify-content-center rounded-pill me-3">
                                        <span className="material-icons fs-3 align-middle">star</span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 data-countup='{"startVal": 0,"suffix":"K"}' data-to="274" data-aos
                                            data-aos-id="countup:in" className="fw-bolder mb-1">0</h3>
                                        <div className="text-light small">Total items</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div
                                        className="flex-shrink-0 size-3 bg-primary text-white d-flex align-items-center justify-content-center rounded-pill me-3">
                                        <span className="material-icons fs-3 align-middle">group</span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h3 data-countup='{"startVal": 0,"suffix":"K"}' data-to="874" data-aos
                                            data-aos-id="countup:in" className="fw-bolder mb-1">0</h3>
                                        <div className="text-light small">Total members</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6 mb-5">
                        <h5 className="mb-2">Join Now For Early Access</h5>
                        <p className="mb-4">
                            Join the mailing list to receive the latest news from Keedari Funding.
                        </p>
                        <form>
                            <div className="position-relative d-flex flex-column flex-md-row">
                                <input type="text" className="form-control mb-2 mb-md-0 me-md-2"
                                       placeholder="Your work email" required/>
                                <button type="submit" className="btn btn-primary flex-shrink-0">I'm In</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="mt-0 mb-5"/>
                <span className="d-block lh-sm small">
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    © JervisLabs Co., Ltd. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default FooterComponent;