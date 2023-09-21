import {networkInfo} from "../../helper/network-handler";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {SubmitHandler, useForm} from "react-hook-form";
import {onAddNFTAction, onUploadNFTImageAction} from "../../action/create.action";
import {useEffect, useRef} from "react";
import CreateInputNftPreview from "./create.input.nft-preview";

type ICreateInputNFT = {
    name: string;
    description: string;
    price?: number;
    max?: number;
    image: string;
}

const CreateInputNft = () => {
    const dispatch = useDispatch();
    const imageInput = useRef<HTMLInputElement>(null);
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    const {nftImage, nfts} = useSelector((state: RootState) => state.CreateReducer);
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<ICreateInputNFT>();
    const onSubmit: SubmitHandler<ICreateInputNFT> = data => {
        dispatch(onAddNFTAction(data));
        setValue('name', '');
        setValue('description', '');
        setValue('image', '');
        setValue('price', undefined);
        setValue('max', undefined)
    };

    useEffect(() => setValue('image', nftImage ? nftImage : ''), [nftImage])


    return (
        <div className="col-12 p-4 mb-4 border rounded-4" data-aos="fade-up" data-aos-delay={700}>
            { nfts?.map( nft => <CreateInputNftPreview nft={nft!} key={nft.index} />)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-4">
                    <div className="col-12 col-md-4 text-center">
                        <div className={errors.image?.type === 'required' ? "image-upload-wrap h-75 pb-5 cursor-pointer border-danger border-dashed rounded-4" : "image-upload-wrap h-75 pb-5 cursor-pointer border-dashed rounded-4"}
                             onClick={() => imageInput.current?.click()} style={{ display: nftImage ? 'none' : 'block'}}>
                            <div className="text-center translate-y h-75">
                                <i className="bi bi-images h3"></i>
                                <p className="px-4">이미지 파일을 여기로 드래그해서 업로드하세요.</p>
                            </div>
                            <input ref={imageInput} className="w-100 fade" type="file" accept="image/*" style={{height: 0}} onChange={(e) => dispatch(onUploadNFTImageAction.request(e.target.files![0]))}/>
                            <input className={"d-none"} value={nftImage}  {...register('image', {required: true})}/>
                        </div>
                        <div id="nft-upload-div" className={nftImage ? '' : "d-none"}>
                            <img id="nft-preview-image" className="file-upload-image w-100 h-75" src={nftImage}/>
                        </div>
                        <button id="input-image-btn" className="btn btn-secondary mt-2" type="button" onClick={() => imageInput.current?.click()}>Upload</button>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label d-block">NFT Title</label>
                            <input
                                type="text"
                                className={errors.name?.type === 'required' || errors.name?.type === 'minLength' ? "form-control border-danger" : "form-control"}
                                {...register("name", { required: true, minLength: 1})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label d-block">NFT Description</label>
                            <textarea id="nft-input-description" className={errors.description?.type === 'required' || errors.description?.type === 'minLength' ? "form-control border-danger" : "form-control"} rows={3}
                                      {...register("description", { required: true, minLength: 1})}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label d-block">Issuance standard amount</label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className={errors.price?.type === 'required' || errors.price?.type === 'min' ? "form-control border-danger" : "form-control"}
                                    placeholder=""
                                    step={0.0000000000001}
                                    {...register("price", { required: true, min: 0.000000000001, valueAsNumber: true})}
                                    onWheel={event => event.currentTarget.blur()}
                                />
                                <span className="input-group-text bg-light"
                                      id="create-funding-symbol1">{networkInfo[user!.networkId].symbol}</span>
                            </div>
                            <small className="text-muted">﹒ 기준 금액 이상을 펀딩하는 사람에게 본 NFT를 발행합니다.</small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label d-block">Issue quantity</label>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className={errors.max?.type === 'required' || errors.max?.type === 'min' ? "form-control border-danger" : "form-control"}
                                    step={1}
                                    {...register("max", { required: true, min: 1, valueAsNumber: true})}
                                    onWheel={event => event.currentTarget.blur()}
                                />
                                <span className="input-group-text bg-light py-0">개</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-0">
                    <button className="btn btn-lg btn-primary w-100" type={"submit"} id="nft-add-btn">리워드 NFT 등록</button>
                </div>
            </form>
        </div>
    )
}

export default CreateInputNft;