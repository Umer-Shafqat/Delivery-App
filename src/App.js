import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopop/LoginPopup'

const App = () => {

  const [showLogin,setshowLogin ]=useState(false);

  return (
    <>

{showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}

    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>

        <Route path="/" 
        element={<Home/>}/>

      <Route path="/cart"
      element={<Cart/>}/>

      <Route path="/placeOrder" 
        element={<PlaceOrder/>}/>
        
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
