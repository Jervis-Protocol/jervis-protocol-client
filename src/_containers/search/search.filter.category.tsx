import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {useNavigate, useSearchParams} from "react-router-dom";
import {onGetFundingAction} from "../../action/search.action";

const SearchFilterCategory = () => {
    const {categories} = useSelector((state: RootState) => state.HeaderReducer);
    const [query] = useSearchParams()
    const dispatch = useDispatch();
    const navi = useNavigate();

    const onClickCategory = (index: number) => {
        if (query.getAll('category').indexOf(index.toString()) !== -1) {
            const cQuery = query.getAll('category').filter(cQuery => cQuery !== index.toString());
            query.delete('category');
            for(const category of  cQuery)
                query.append('category', category.toString())
        } else
            query.append('category', index.toString());


        navi(`/search?${query.toString()}`);
        dispatch(onGetFundingAction.request({ query: query.toString(), pageIndex: 0 }));
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id='search-category-header'>
                <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#search-category-body"
                        aria-expanded="false" aria-controls="search-category-body">
                    Categories
                </button>
            </h2>
            <div id="search-category-body" aria-labelledby="search-category-header" data-bs-parent={"accordionExample"} className="accordion-collapse collapse">
                <div className="accordion-body">
                    {
                        categories.map( category => {
                            return (
                                <div className="form-check mb-3" key={`category-div-${category.index}`}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="category_premium"
                                        defaultChecked={query.getAll('category').indexOf(category.index.toString()) !== -1}
                                        onClick={() => onClickCategory(category.index)}
                                        id={`category-${category.index}`}
                                        key={`category-input-${category.index}`}
                                    />
                                    <label className="form-check-label d-block cursor-pointer"
                                           htmlFor={`category-${category.index}`} key={`category-label-${category.index}`}>{category.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchFilterCategory;