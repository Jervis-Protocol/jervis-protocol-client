import {combineReducers} from "redux";
import HomeReducer from "./home.reducer";
import CreateReducer from "./create.reducer";
import HeaderReducer from "./header.reducer";
import ModalReducer from "./modal.reducer";
import SearchReducer from "./search.reducer";
import FundingReducer from "./funding.reducer";
import FundingDonationReducer from "./funding.donation.reducer";
import ProfileReducer from "./profile.reducer";
import HistoryReducer from "./history.reducer";
import EditReducer from "./edit.reducer";
import EditEmailReducer from "./edit.email.reducer";
import EditValidReducer from "./edit.valid.reducer";


const rootReducer = combineReducers({
    HomeReducer,
    CreateReducer,
    SearchReducer,
    FundingReducer,
    FundingDonationReducer,
    ProfileReducer,
    HistoryReducer,
    EditReducer,
    EditEmailReducer,
    EditValidReducer,

    HeaderReducer,
    ModalReducer,

})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;