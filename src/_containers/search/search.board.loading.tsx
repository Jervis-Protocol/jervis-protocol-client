const SearchBoardLoading = () => {
    return (
        <div className="col-12 pt-2 text-center">
            <button className="btn bg-style-3 border-0" type="button" disabled>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default SearchBoardLoading;