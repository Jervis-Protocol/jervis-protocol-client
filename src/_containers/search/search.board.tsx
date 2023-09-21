import SearchBoardSort from "./search.board.sort";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import SearchBoardCard from "./search.board.card";
import SearchBoardLoading from "./search.board.loading";
import useScript from "../../helper/useScript";

const SearchBoardComponent = () => {
    const {fundingList,isLoading} = useSelector((state: RootState) => state.SearchReducer);
    useScript("/assets/vendor/lib/js/choices.min.js", false);
    useScript("/assets/js/search.js")
    return (
        <div className="col-lg-8 col-xl-9 h-100 pt-lg-8 pb-5">
            <SearchBoardSort />
            <div className={'row'} >
                {fundingList.map( funding => <SearchBoardCard funding={funding} key={funding._id} /> )}
                { isLoading && <SearchBoardLoading/>}
            </div>
        </div>
    )
}

export default SearchBoardComponent;