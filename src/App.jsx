import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navabar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
function App() {

  return (
    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        
       </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
