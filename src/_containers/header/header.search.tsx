const HeaderSearchComponent = () => {
    return (
        <>
            <a className="navbar-brand width-110" href="/">
                <img src="assets/img/logo.png" alt="logo" className="img-fluid logo-light"/>
                <img src="assets/img/logo-white.png" alt="logo" className="img-fluid logo-dark"/>
            </a>
            <div className="d-flex align-items-center order-last order-lg-1 ms-lg-5">
                <div className="position-relative">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#modal_search"
                            className="form-control d-none d-lg-flex position-relative d-flex align-items-center">
                        <span className="material-icons align-middle fs-4 opacity-75">search</span>
                        <span className="d-none d-sm-block align-items-center small opacity-75 mx-2">Search...</span>
                    </button>
                </div>
                <button className="navbar-toggler p-0 border-0 shadow-none ms-3 ms-lg-0" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </>
    )
}

export default HeaderSearchComponent;