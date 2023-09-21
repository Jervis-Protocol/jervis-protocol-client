import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const FundingStoryComponent = () => {
    const {story} = useSelector((state: RootState) => state.FundingReducer);
    return (
        <div className="mb-6">
            <h4 className="mt-6 mb-4">펀딩 스토리</h4>
            <div dangerouslySetInnerHTML={{ __html: story}} ></div>
        </div>
    )
}

export default FundingStoryComponent;
