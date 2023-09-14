import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {onChangeQueryAction, onGetFundingAction} from "../../action/search.action";

const SearchFilterCurrency = () => {
    const dispatch = useDispatch();
    const navi = useNavigate();
    const [query] = useSearchParams()

    const onClickCurrency = (currency: string) => {
        if (query.getAll('currency').includes(currency)) {
            const cQuery = query.getAll('currency').filter(cQuery => cQuery !== currency);
            query.delete('currency');
            for (const currency of cQuery)
                query.append('currency', currency);
        } else
            query.append('currency', currency);

        navi(`/search?${query.toString()}`);
        dispatch(onChangeQueryAction.request(query ? query.toString() : ''));
        dispatch(onGetFundingAction.request({ query: query.toString(), pageIndex: 0 }));
    }

    return (
        <div className="accordion-item">
            <div className="accordion-header" id="filterOne">
                <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#search-state-currency"
                        aria-expanded="false" aria-controls="search-state-currency">
                    Currency
                </button>
            </div>
            <div id="search-state-currency" aria-labelledby={"filterOne"} className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" checked={query.getAll('currency').indexOf(import.meta.env.VITE_APP_ETHEREUM_NETWORKID!) !== -1}
                               name="currency_eth" id="currency_eth" onChange={() => onClickCurrency(import.meta.env.VITE_APP_ETHEREUM_NETWORKID!)}/>
                        <label className="form-check-label d-block cursor-pointer"
                               htmlFor="currency_eth">ETH</label>
                    </div>
                    {/*<div className="form-check mb-3">*/}
                    {/*    <input type="checkbox" className="form-check-input" name="currency_ape" checked={query.getAll('currency').indexOf(import.meta.env.VITE_APP_KLAYTN_NETWORKID!) !== -1}*/}
                    {/*           id="currency_ape" onChange={() => onClickCurrency(import.meta.env.VITE_APP_KLAYTN_NETWORKID!)}/>*/}
                    {/*    <label className="form-check-label d-block cursor-pointer"*/}
                    {/*           htmlFor="currency_ape">KLAY</label>*/}
                    {/*</div>*/}
                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" name="currency_cube" checked={query.getAll('currency').indexOf(import.meta.env.VITE_APP_POLYGON_NETWORKID!) !== -1}
                               id="currency_cube" onChange={() => onClickCurrency(import.meta.env.VITE_APP_POLYGON_NETWORKID!)}/>
                        <label className="form-check-label d-block cursor-pointer"
                               htmlFor="currency_cube">MATIC</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchFilterCurrency;