import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const FundingStoryComponent = () => {
    const {story} = useSelector((state: RootState) => state.FundingReducer);
    return (
        <div className="bg-white rounded-3 p-5 mt-5">
            <h1>펀딩에 담긴 스토리</h1>
            <div dangerouslySetInnerHTML={{ __html: story}} ></div>
        </div>
    )
}

export default FundingStoryComponent;
