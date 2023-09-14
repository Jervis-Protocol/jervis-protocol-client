import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {networkInfo} from "../../helper/network-handler";
import {onDataProcessingAction} from "../../action/summary.action";
import {useNavigate} from "react-router-dom";

const SummaryInputComponent = () => {
    const {categories, user} = useSelector((state: RootState) => state.HeaderReducer);
    const inputFunding = useSelector((state: RootState) => state.CreateReducer);
    const navigator = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="col-lg-8 col-xl-7 mb-4 mb-lg-0">
            <h1 className="mb-4 mb-lg-5 display-5" data-aos="fade-right" data-aos-delay="100">Check Funding Information</h1>
            <div className="row">
                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="200">
                    <label className="h6" htmlFor="create_title">Title</label>
                    <input value={inputFunding.title!} type="text" name="create_title" id="create_title" className="form-control form-control-lg" placeholder="" readOnly={true}/>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="250">
                    <h6 className="mb-2">Representative Image</h6>
                    <div className="dropzone" >
                        <img id="background-preview-image" className="file-upload-image w-100" src={inputFunding.background!}/>
                    </div>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <label className="h6" htmlFor="create_description">Description</label>
                        </div>
                        <div>
                            <p className="mb-0 small">240</p>
                        </div>
                    </div>
                    <textarea name="create_description" id="create_description" rows={5} className="form-control" readOnly={true}>{inputFunding.description}</textarea>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="mb-2">Categories</h6>
                    {
                        inputFunding.category.map(item => <>
                            <input type="checkbox" className="btn-check" id={categories[item].index.toString()}/>
                            <label className="btn btn-outline-secondary me-1 mb-1 rounded-pill" htmlFor={categories[item].index.toString()}>{categories[item].name}</label>
                        </>)
                    }
                </div>
                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="450">
                    <h6 className="mb-2">Form</h6>
                    <div className="row m-0">
                        <div className="col-md-6 col-lg-6 col-sm-12 p-0">
                            <input type="radio" className="btn-check" name="type" id="type-target"
                                   checked/>
                            <label className="btn u-heading-v9--left g-bg-gray-light-v1 p-4 g-height-200 rounded-0"
                                   htmlFor={"type-target"}>
                                <i className="bi bi-award-fill h4"></i>
                                <p className="h4 py-3">{inputFunding.type === 12001 ? '목표 달성' : '기간 달성'}</p>
                                <p className="small">
                                    {
                                        inputFunding.type === 12001
                                            ? "모집 금액이 목표치에 달성한 경우에만 펀딩이 성사됩니다.<br/>성사되지 못한 경우 모금액이 후원자들에게 환불됩니다."
                                            : "모집 금액 대신 기간이 만료되는 경우 자동으로 성사됩니다.<br/><br/>"
                                    }
                                </p>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4" data-aos="fade-up" data-aos-delay="500">
                    <div className="col-6">
                        <label className="h6" htmlFor="input-startDate">Funding start date</label>
                        <input type="text" className="form-control" name="input-startDate" id="input-startDate"
                               placeholder="" readOnly={true} value={`${inputFunding.sdate?.getFullYear()}.${inputFunding.sdate!.getMonth() + 1}.${inputFunding.sdate?.getDate()}`}/>
                    </div>
                    <div className="col-6">
                        <label className="h6" htmlFor="input-endDate">Funding end date</label>
                        <input type="text" className="form-control" name="input-endDate" id="input-endDate"
                               placeholder="" readOnly={true}  value={`${inputFunding.edate?.getFullYear()}.${inputFunding.edate!.getMonth() + 1}.${inputFunding.edate?.getDate()}`}/>
                    </div>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="550">
                    <label className="h6" htmlFor="create_community">Community</label>
                    <input type="text" name="create_community" id="create_community"
                           className="form-control form-control-lg" placeholder="" readOnly={true} value={inputFunding.community}/>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="600">
                    <label className="h6" htmlFor="create_symbol">NFT Symbol</label>
                    <input type="text" name="create_symbol" id="create_symbol"
                           className="form-control form-control-lg" placeholder="" readOnly={true} value={inputFunding.symbol}/>
                </div>

                <div className="col-12 p-4 mb-4 border rounded-4" data-aos="fade-up" data-aos-delay="650">
                    { inputFunding.nfts?.map( nft => {
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
                                        Issue standard amount : {nft.price} {networkInfo[user!.networkId].symbol}
                                    </p>
                                    <p className="mx-3 lead">
                                        Issued volume : {nft.max} {networkInfo[user!.networkId].symbol}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="700">
                    <label className="h6" htmlFor="create_addresse">Wallet Address</label>
                    <div className="input-group">
                        <span className="input-group-text bg-light py-0" id="basic-addon1">{networkInfo[user!.networkId].wallet}</span>
                        <input id="create_addresse" name="create_addresse" type="text"
                               className="form-control form-control-md" placeholder="" readOnly={true} value={inputFunding.beneficiary}/>
                    </div>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="750">
                    <label className="h6" htmlFor="create_price">Target Amount</label>
                    <input id="create_price" name="create_price" type="text"
                           className="form-control form-control-lg" placeholder="" readOnly={true} value={`${inputFunding.goal} ${networkInfo[user!.networkId].symbol}`}/>
                </div>

                <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="800">
                    <p className="bg-light text-black p-4 text-center">
                        펀딩이 발행된 이후에는 내용을 수정할 수 없습니다.
                        내용을 한 번 더 확인해주세요.
                        등록해주신 펀딩은 담당자의 검수 후 시작됩니다.
                        검수가 완료되면 메일로 검수 결과를 알려드립니다.</p>
                </div>
                <div className="errorTxt"></div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="800">
                    <button
                        type="button"
                        className="btn btn-lg btn-primary"
                        onClick={() => dispatch(onDataProcessingAction.request({ funding: inputFunding, navigator: navigator, networkId: user!.networkId }))}
                    >펀딩 등록하기</button>
                </div>
            </div>
        </div>
    )
}

export default SummaryInputComponent;