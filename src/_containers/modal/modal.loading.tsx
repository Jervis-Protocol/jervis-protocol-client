import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import useScript from "../../helper/useScript";
import useStylesheet from "../../helper/useStylesheet";

const ModalLoading = () => {
    const {isOpenLoadingModal} = useSelector((state: RootState) => state.ModalReducer);
    useScript("https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js", false);
    useStylesheet("/assets/css/custom.css");
    return(
        <div className="loading" style={{display: isOpenLoadingModal ? 'block' : 'none', zIndex: 9999 }}>
        <div className="loading-lottie">
                {/*// @ts-ignore*/}
                <lottie-player src="/assets/img/loading.json" background="transparent" speed="1" style={{width: '100px', height: '100px'}} loop autoplay></lottie-player>
            </div>
        </div>
    )
}

export default ModalLoading;