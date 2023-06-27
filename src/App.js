import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
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
import Second from "./pages/FromCorporation/Second";

import ImportExport from "./pages/ImportExport/ImportExport";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageMail from "./pages/MailForwording/MainPageMail";

import logo from "./assets/Logo7.png";

import PhoneService from "./pages/PhoneServices/PhoneService";
import SellProduct from "./pages/SellProduct/SellProduct";
import Registration from './pages/RegistrationAgent/Registration';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mailpage" element={<MainPageMail />} />
            <Route path="/phoneServices" element={<PhoneService />} />
            <Route path="/Llc" element={<Llc />} />
            <Route path="/corporation" element={<FromAcorporation />} />
            <Route path="/virtualoffice" element={<Virtualoffice />} />
            <Route path="/second" element={<Second />} />
            <Route path="/ImportExport" element={<ImportExport />} />
            <Route path="/sellproduct" element={<SellProduct />} />
            <Route path="/registration" element={<Registration />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
