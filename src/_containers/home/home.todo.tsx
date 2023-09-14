import HomeTodoHead from "./home.todo.head";
import HomeTodoCard from "./home.todo.card";
import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";

const HomeTodoComponent = () => {
    const { todoFunding } = useSelector((state: RootState) => state.HomeReducer);

    return (
        <section className="position-relative">
            <div className="container position-relative">
                <div className="px-4 py-8 py-lg-11 rounded-5 bg-style-3 position-relative">
                    <HomeTodoHead />
                    <HomeTodoCard todoFunding={todoFunding} />
                </div>
            </div>
        </section>
    )
}

export default HomeTodoComponent;