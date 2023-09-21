import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import {onChangeQueryAction, onChangeStateAction} from "../../action/search.action";
import {RootState} from "../../reducers/root.reducer";
import {useEffect} from "react";

const SearchFilterState = () => {
    const dispatch = useDispatch();
    const navi = useNavigate();
    const [query] = useSearchParams();
    const {state} = useSelector((state: RootState) => state.SearchReducer);

    const onClickState = (state: string) => {
        if (query.get('state') !== state) {
            query.delete('state');
            query.append('state', state);
        } else
            query.delete('state');
        navi(`/search?${query.toString()}`);
        dispatch(onChangeQueryAction.request(query ? query.toString() : ''));
        dispatch(onChangeStateAction(query.has('state') ? query.get('state')! : ''));
    }

    useEffect(() => {
        if (query.has('state'))
            dispatch(onChangeStateAction(query.get('state')!))
    }, [])


    return (
        <div className="accordion-item">
            <div className="accordion-header" id="filterOne">
                <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#search-state-body"
                        aria-expanded="false">
                    State
                </button>
            </div>
            <div id="search-state-body" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input"
                               onChange={() => onClickState('active')}
                               checked={state === 'active'}
                               id="search-state-active"  />
                        <label className="form-check-label d-block cursor-pointer" htmlFor="search-state-active">Active</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input"
                               checked={state === 'success'}
                               onChange={() => onClickState('success')}
                               name="search-state-success"   />
                        <label className="form-check-label d-block cursor-pointer" htmlFor="search-state-success">Success</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" name="search-state-closed"
                               onChange={() => onClickState('end')}
                               checked={state === 'end'} />
                        <label className="form-check-label d-block cursor-pointer"
                               htmlFor="search-state-closed">Closed</label>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" name="search-state-todo"
                               onChange={() => onClickState('ready')}
                               checked={state === 'ready'} />
                        <label className="form-check-label d-block cursor-pointer"
                               htmlFor="search-state-todo">{'ToDo'}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterState;