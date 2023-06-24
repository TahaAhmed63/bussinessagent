import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import StickyHeader from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer';
import './components/Style.css'

function App() {
  return (
   <>
   <div className='App'>
    <BrowserRouter>
     <StickyHeader/>
       <Routes>
         <Route path='/' element={<Home/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>

    </div>
   </>
  );
}

export default App;
