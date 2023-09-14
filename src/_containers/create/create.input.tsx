import CreateInputTitle from "./create.input.title";
import CreateInputDescription from "./create.input.description";
import CreateInputStory from "./create.input.story";
import CreateInputCategory from "./create.input.category";
import CreateInputType from "./create.input.type";
import CreateInputDate from "./create.input.date";
import CreateInputCommunity from "./create.input.community";
import CreateInputNftInfo from "./create.input.nft-info";
import CreateInputNftSymbol from "./create.input.nft-symbol";
import CreateInputNft from "./create.input.nft";
import CreateInputReceive from "./create.input.receive";
import CreateInputInfo from "./create.input.info";
import CreateInputSubmit from "./create.input.submit";
import CreateInputBackground from "./create.input.background";
import CreateInputGoal from "./create.input.goal";

const CreateInputComponent = () => {
    return (
        <div className="col-lg-8 col-xl-7 mb-4 mb-lg-0">
            <h1 className="mb-4 mb-lg-5 display-5" data-aos="fade-right" data-aos-delay="100">Create New Funding</h1>
            <div className="row">
                <CreateInputTitle/>
                <CreateInputBackground/>
                <CreateInputDescription/>
                <CreateInputStory/>
                <CreateInputCategory/>
                <CreateInputType/>
                <CreateInputDate/>
                <CreateInputCommunity/>
                <CreateInputNftInfo/>
                <CreateInputNftSymbol/>
                <CreateInputNft/>
                <CreateInputReceive/>
                <CreateInputInfo/>
                <CreateInputGoal />
                <CreateInputSubmit/>
            </div>
        </div>
    )
}

export default CreateInputComponent;