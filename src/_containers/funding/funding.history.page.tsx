import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeHistoryPageAction} from "../../action/funding.action";

const FundingHistoryPage = () => {
    const { historyPage } = useSelector((state: RootState) => state.FundingReducer);
    const [pages, setPages] = useState(Array<number>);
    useEffect(() => {
        for (let i = 1 ; i <= historyPage ; i++)
            setPages([...pages, ...[i]]);
    }, [])

    return (
        <div className="text-center mt-3">
            <i className="bi bi-chevron-left"></i>
            { pages.map( index => <a key={index} href="#" className={historyPage === index ? "text-black active" : "text-black"} onClick={() => onChangeHistoryPageAction(index)}>{index}</a>)}
            <i className="bi bi-chevron-right"></i>
        </div>
    )
}

export default FundingHistoryPage;