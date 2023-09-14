import SearchFilterCurrency from "./search.filter.currency";
import SearchFilterCategory from "./search.filter.category";
import SearchFilterState from "./search.filter.state";

const SearchFilterComponent = () => {
    return (
        <div className="col-lg-4 col-xl-3">
            <div className="sticky-lg-top">
                <div className="offcanvas-lg py-lg-5 d-lg-block offcanvas-filter offcanvas-end" tabIndex={-1}
                     id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
                    <div className="offcanvas-header pt-lg-2 pb-lg-0 d-lg-block" data-aos="fade-down"
                         data-aos-delay="100">
                        <h5 className="offcanvas-title" id="offcanvasFilterLabel"><span
                            className="material-icons align-middle me-2">filter_list</span> Filter</h5>
                        <button type="button" className="btn-close d-lg-none" data-bs-dismiss="offcanvas"
                                data-bs-target="#offcanvasFilter" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" data-aos="fade-right" data-aos-delay="200">
                        <div className="accordion-list py-lg-3 pe-lg-4 w-100" id={'accordionExample'}>
                            <SearchFilterState />
                            <SearchFilterCurrency />
                            <SearchFilterCategory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterComponent;