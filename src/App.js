import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import StickyHeader from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import './App.css'
import FromAcorporation from './pages/FromCorporation/FromAcorporation';
import ImportExport from './pages/ImportExport/ImportExport';
function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <StickyHeader/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Corporation' element={<FromAcorporation/>}/>
         <Route path='/ImportExport' element={<ImportExport/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
