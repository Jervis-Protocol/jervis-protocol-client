import {onChangeQueryAction} from "../../action/search.action";
import {useDispatch} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";

const SearchBoardSort = () => {
    const [query] = useSearchParams()
    const dispatch = useDispatch();
    const navi = useNavigate();

    const onClickSort = (sort: string) => {
        query.delete('sort');
        query.set('sort', sort);
        navi(`/search?${query.toString()}`);
        dispatch(onChangeQueryAction.request(query ? query.toString() : ''));

        // dispatch(onGetFundingAction.request({ query: query.toString(), pageIndex: 0 }));
    }

    return (
        <div className="col-12 text-end my-3" data-aos="fade-up" data-aos-delay="150">
            <div className="d-table ms-lg-auto">
                <select className="btn btn-secondary"
                        onChange={(e) => onClickSort(e.target.value)}
                        defaultValue={query.has('sort') ? query.get('sort')! : 'latest'}
                        data-choices='{"searchEnabled":false, "allowHTML":true,"itemSelectText":""}'>
                    <option value="latest">Recently Listed</option>
                    <option value="closing">Ending Soon</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBoardSort;