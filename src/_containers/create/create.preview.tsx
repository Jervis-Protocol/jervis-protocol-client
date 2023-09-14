import CreatePreviewCard from "./create.preview.card";

const CreatePreviewComponent = () => {
    return(
        <div className="col-lg-4 ms-lg-auto" data-aos="fade-up" data-aos-delay="150">
            <div className="sticky-top">
                <h5 className="mb-4 pt-4">Funding card Preview
                    <span role="button" data-tippy-content="This is how your product will look like on listing page" data-tippy-placement="bottom">
                        <span className="material-icons align-middle">info</span>
                        <CreatePreviewCard />
                    </span>
                </h5>
            </div>
        </div>
    )
}

export default CreatePreviewComponent;