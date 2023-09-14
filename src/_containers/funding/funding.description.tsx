import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const FundingDescriptionComponent = () => {
    const { funding } = useSelector((state: RootState) => state.FundingReducer);

    return (
        <div className="bg-white rounded-3 p-5 mt-5">
            <h1>펀딩 소개</h1>
            <p className="mt-4">
                {funding!.description}
            </p>
        </div>
    )
}

export default FundingDescriptionComponent;