import {IInputNFT} from "../../type/_data/nft.type";

export type IInputNFTPreviewState = {
    nft: IInputNFT
}

const CreateInputNftPreview = (state: IInputNFTPreviewState) => {
    const {nft} = state;

    return (
        <div className="row mb-4">
            <img className="col-12 col-md-5" src={nft.image} alt=""/>
            <div className="col-12 col-md-7">
                <p className="my-4 mx-3 lead">
                    NFT Title : {nft.name}
                </p>
                <p className="mb-4 mx-3 lead">
                    NFT Description : {nft.description}
                </p>
                <p className="mb-4 mx-3 lead">
                    Issue standard amount : {nft.price}
                </p>
                <p className="mx-3 lead">
                    Issued volume : {nft.max}
                </p>
            </div>
        </div>
    )
}

export default CreateInputNftPreview;