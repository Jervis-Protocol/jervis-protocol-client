import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./_containers/header/header";
import Footer from "./_containers/common/footer";
import Home from "./_containers/home/home";
import Create from "./_containers/create/create";
import ModalConnect from "./_containers/modal/modal.connect";
import ModalNotice from "./_containers/modal/modal.notice";
import Summary from "./_containers/summary/summary";
import ModalLoading from "./_containers/modal/modal.loading";
import Complete from "./_containers/common/complete";
import ModalEmail from "./_containers/modal/modal.email";
import ModalValid from "./_containers/modal/modal.valid";
import Search from "./_containers/search/search";
import Funding from "./_containers/funding/funding";
import Profile from "./_containers/profile/profile";
import History from "./_containers/history/history";
import ScrollToTop from "./helper/scroll-top"
import Edit from "./_containers/edit/edit";

function App() {
  return (
   <Router>
       <ScrollToTop />
       <Header />
       <Routes>
           <Route path={"*"} element={<Home/>}/>
           <Route path={"/create"} element={<Create/>}/>
           <Route path={"/summary"} element={<Summary />}/>
           <Route path={"/complete"} element={<Complete />} />
           <Route path={"/search"} element={<Search />} />
           <Route path={"/funding"} element={<Funding />} />
           <Route path={"/profile"} element={<Profile />} />
           <Route path={"/edit"} element={<Edit />} />
           <Route path={"/history"} element={<History />} />
       </Routes>
       <Footer />
       <ModalConnect />
       <ModalEmail />
       <ModalNotice />
       <ModalValid />
       <ModalLoading />
   </Router>
  );
}

export default App;
