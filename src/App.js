import { Routes, Route, BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import StickyHeader from './components/Header'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import "./components/Style.css";
import Llc from "./pages/formllc/Llc";
import "./App.css";
import FromAcorporation from "./pages/FromCorporation/FromAcorporation";
import Virtualoffice from "./pages/VirtualOffice/virtualoffice";

import ImportExport from "./pages/ImportExport/ImportExport";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageMail from "./pages/MailForwording/MainPageMail";
import PhoneService from "./pages/PhoneServices/PhoneService";
import SellProduct from "./pages/SellProduct/SellProduct";
import Registration from './pages/RegistrationAgent/Registration';
import Buyfromus from "./pages/BuyFromUs/Buyfromus";
import Heromain from "./pages/homeSection/Heromain";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Heromain />} />
            <Route path="/mailpage" element={<MainPageMail />} />
            <Route path="/phoneServices" element={<PhoneService />} />
            <Route path="/Llc" element={<Llc />} />
            <Route path="/corporation" element={<FromAcorporation />} />
            <Route path="/virtualoffice" element={<Virtualoffice />} />
            <Route path="/ImportExport" element={<ImportExport />} />
            <Route path="/sellproduct" element={<SellProduct />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/Buyfromus" element={<Buyfromus />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
