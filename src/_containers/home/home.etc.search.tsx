import {Link} from "react-router-dom";

const HomeETCSearch = () => {
    return (
        <div className="col-lg-6 mb-7 mb-lg-0" data-aos="fade-up">
            <Link to={"/search"}>
                <div className="card border-0 shadow-sm hover-lift pt-md-6 p-7 p-md-10 text-white"
                     style={{backgroundImage: "url('assets/img/img4.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundColor:'#00a393', backgroundPositionY: 'center'}}>
                    <div
                        className="me-4 position-absolute start-0 ms-4 mt-n4 top-0 flex-shrink-0 size-4 shadow d-flex align-items-center justify-content-center rounded-circle bg-style-1 text-black">
                        <span className="material-icons fs-3 align-middle text-secondary fw-bold">check</span>
                    </div>
                    <h3 className="mb-4 mt-4 position-relative">Check all Fundings</h3>
                    <p className="mb-0">
                        보다 가치있는 일에 참여하고<br/>
                        NFT로 보상받으세요
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default HomeETCSearch