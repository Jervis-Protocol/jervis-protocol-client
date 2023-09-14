import CreateInput from "./create.input";
import CreatePreview from "./create.preview";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const CreateContainer = () => {
    const {user} = useSelector((state: RootState) => state.HeaderReducer);
    // useScript("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",false);
    // useScript("/assets/vendor/node_modules/js/jquery.min.js", false);
    // useScript("/assets/vendor/node_modules/js/swiper-bundle.min.js", false);
    // useScript("/assets/vendor/node_modules/js/choices.min.js", false);
    // useScript("/assets/vendor/node_modules/js/jquery.countdown.min.js", false);
    // useScript("assets/vendor/node_modules/js/jquery.validate.min.js", false);
    // useScript("/assets/vendor/summernote/summernote-lite.js");
    // useScript("/assets/vendor/summernote/summernote-ko-KR.js");

    //<script src="https://code.jquery.com/jquery3.5.1.min.js"></script>
    //
    // <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet"/>
    // <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    //
    // <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet"/>
    // <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>

    // useScript("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js")
    //<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet"/>
    // <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    // useScript("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/lang/summernote-ko-KR.min.js", false);
    // useStylesheet("https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css");
    // useScript("/assets/js/editor.js", false);
    if (!user)
        return <></>
    else
        return (
            <section className="position-relative pt-10 pt-lg-12">
                <div className="container pt-lg-6 position-relative">
                    <div className="row pb-8 pb-lg-11">
                        <CreateInput/>
                        <CreatePreview/>
                    </div>
                </div>
            </section>
        )
}

export default CreateContainer;