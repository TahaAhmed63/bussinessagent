import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import './App.css'
import FromAcorporation from './pages/FromCorporation/FromAcorporation';
import Virtualoffice from './pages/VirtualOffice/virtualoffice';
import Second from './pages/FromCorporation/Second';
import Navbar from './MainComponent/Navbar';
import logo from "./assets/Logo7.png"
import EquipmentSourcing from './pages/EquipmentSoucring/EquipmentSourcing';

function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <Navbar logo={logo}  linkcolor="#fff"/> 
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Corporation' element={<FromAcorporation/>}/>
         <Route path='/virtualoffice' element={<Virtualoffice />}/>
         <Route path='/equipment' element={<EquipmentSourcing />}/>
         <Route path='/second' element={<Second />}/>
       </Routes>
       <Footer/>
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
