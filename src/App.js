import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import StickyHeader from './components/Header'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import './App.css'
import FromAcorporation from './pages/FromCorporation/FromAcorporation';
import Virtualoffice from './pages/VirtualOffice/virtualoffice';
import Second from './pages/FromCorporation/Second';

import ImportExport from './pages/ImportExport/ImportExport';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageMail from './pages/MailForwording/MainPageMail';


 import logo from './assets/Logo7.png'
   import Navbar from './MainComponent/Navbar';
import PhoneService from './pages/PhoneServices/PhoneService';
function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <Navbar logo={logo}  linkcolor="#000"/> 
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/mailpage' element={<MainPageMail/>}/>
         <Route path='/phoneServices' element={<PhoneService/>}/>


        

         <Route path='/Corporation' element={<FromAcorporation/>}/>
         <Route path='/virtualoffice' element={<Virtualoffice />}/>
         <Route path='/second' element={<Second />}/>
 <Route path='/ImportExport' element={<ImportExport/>}/> 
       </Routes>
   <Footer/>  
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
