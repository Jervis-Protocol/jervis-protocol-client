const CreateInputNftInfo = () => {
    return(
        <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay={600}>
            <h3 className="mb-2">리워드 NFT 등록</h3>
            <p className="">후원자들에게 제공할 NFT를 등록해주세요.</p>
            <p className="text-muted bg-style-3 rounded-3 p-3">
                [유의 사항]<br/>
                - 발행하는 NFT에 대한 모든 책임은 본인에게 있습니다.<br/>
                - NFT 등록 후에는 수정이 불가하니 신중하게 등록해주세요.<br/>
                - 타인의 저작물을 등록할 경우 법적 분쟁이 발생할 수 있으며 본인 소유의 저작물만 등록할 수 있습니다.<br/>
                - 타인에게 혐오감을 주거나 미풍양속에 어긋나는 저작물은 등록 불가합니다.
            </p>
        </div>
    )
}

export default CreateInputNftInfo;