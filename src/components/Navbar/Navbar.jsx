import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link as ScrollLink } from 'react-scroll'  
import { Link as RouterLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setshowLogin}) => {

    const [menu,setmenu ]=useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
    <RouterLink to="/"><img  src={assets.logo} alt="" className="logo" /></RouterLink>
      <ul className="navbar-menu">
        <ScrollLink to="home" smooth={true} duration={400} onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </ScrollLink>
        <ScrollLink to="explore-menu" smooth={true} duration={400} onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </ScrollLink>
        <ScrollLink to="app-download" smooth={true} duration={400} onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile-app
        </ScrollLink>
        <ScrollLink to="footer" smooth={true} duration={400} onClick={() => setmenu("contact us")} className={menu === "contact us" ? "active" : ""}>
          Contact us
        </ScrollLink>
      </ul>


    <div className="navbar-right">
        <img src={assets.search_icon} alt="searching" />
     <div className="navbar-search-icon">
  <RouterLink to="/cart">
    <img src={assets.basket_icon} alt="Basket-icon" />
  </RouterLink>
  {getTotalCartAmount() > 0 && <div className="dot"></div>}
</div>
         <button onClick={()=>setshowLogin(true)}>Sign in</button>
       </div>
    </div>
  )
}

export default Navbar
