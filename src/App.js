import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import './App.css'
import FromAcorporation from './pages/FromCorporation/FromAcorporation';
<<<<<<< HEAD
import Virtualoffice from './pages/VirtualOffice/virtualoffice';
import Second from './pages/FromCorporation/Second';

=======
import ImportExport from './pages/ImportExport/ImportExport';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/Logo7.png'
import Navbar from './MainComponent/Navbar';
>>>>>>> d0acf9995d0a337f4b1b6f4328aa63bf0f75a933
function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <Navbar logo={logo}  linkcolor="#fff"/> 
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Corporation' element={<FromAcorporation/>}/>
<<<<<<< HEAD
         <Route path='/virtualoffice' element={<Virtualoffice />}/>
         <Route path='/second' element={<Second />}/>
=======
         <Route path='/ImportExport' element={<ImportExport/>}/>
>>>>>>> d0acf9995d0a337f4b1b6f4328aa63bf0f75a933
       </Routes>
       <Footer/>
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
