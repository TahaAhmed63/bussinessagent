import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import StickyHeader from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageMail from './pages/MailForwording/MainPageMail';


function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <StickyHeader/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/mailpage' element={<MainPageMail/>}/>

        

       </Routes>
     {/* <Footer/> */}
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
