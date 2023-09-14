import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {onChangeCategoryAction} from "../../action/create.action";

export const CreateInputCategory = () => {
        const dispatch = useDispatch();
        const {categories} = useSelector((state: RootState) => state.HeaderReducer);
        const {category} = useSelector((state: RootState) => state.CreateReducer);
        return (
            <div className="col-12 mb-4" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="mb-2">Categories</h6>
                    {
                            categories.map(categoryItem => <>
                                    <input
                                        key={`input-${categoryItem.index}-${categoryItem.name}`}
                                        type="checkbox"
                                        className="btn-check"
                                        id={categoryItem.index.toString()}
                                        autoComplete="off"
                                        checked={category.indexOf(categoryItem.index) !== -1}
                                        onChange={() => dispatch(onChangeCategoryAction(categoryItem.index))}
                                        readOnly={false}
                                    />
                                    <label className="btn btn-outline-secondary me-1 mb-1 rounded-pill" key={`label-${categoryItem.index}-${categoryItem.name}`} htmlFor={categoryItem.index.toString()}>{categoryItem.name}</label>
                            </>)
                    }
            </div>
        )
}

export default CreateInputCategory;