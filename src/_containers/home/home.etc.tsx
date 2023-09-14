import HomeETCSearch from "./home.etc.search";
import HomeETCCreate from "./home.etc.create";

const HomeETCComponent = () => {
    return (
        <section className="position-relative">
            <div className="container pt-8 pt-lg-11 pb-8 pb-lg-11">
                <div className="row pt-4">
                    <HomeETCSearch />
                    <HomeETCCreate />
                </div>
            </div>
        </section>
    )
}

export default HomeETCComponent;