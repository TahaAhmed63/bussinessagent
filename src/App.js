import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import Homes1 from './pages/formllc/homes1';
import './App.css'
import FromAcorporation from './pages/FromCorporation/FromAcorporation';
import ImportExport from './pages/ImportExport/ImportExport';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/Logo7.png'
import Navbar from './MainComponent/Navbar';
function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <Navbar logo={logo}  linkcolor="#fff"/> 
       <Routes>
         <Route path='/' element={<Home/>}/>
<<<<<<< HEAD
         <Route path='/Homes1' element={<Homes1 />}/>
         <Route path='/corporation' element={<FromAcorporation />}/>
=======
         <Route path='/Corporation' element={<FromAcorporation/>}/>
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
