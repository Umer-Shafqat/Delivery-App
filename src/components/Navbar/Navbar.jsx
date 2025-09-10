import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = ({setshowLogin}) => {

    const [menu,setmenu ]=useState("home");
  return (
    <div className='navbar'>
    <img  src={assets.logo} alt="" className="logo" />
    <ul className="navbar-menu">
        <a to="/" onClick={()=>setmenu("home")} className={menu === "home" ? "active":""} >Home</a>
        <a href="#explore-menu" onClick={()=>setmenu("menu")} className={menu === "menu" ? "active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setmenu("mobile-app")} className={menu === "mobile-app" ? "active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setmenu("contact us")} className={menu === "contact us" ? "active":""}>Contact us</a>
    </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="searching" />
        <div className="navbar-search-icon">
      <img src={assets.basket_icon} alt="Basket-icon" />
      <div className="dot"></div>
         </div>
         <button onClick={()=>setshowLogin(true)}>Sign in</button>
       </div>
    </div>
  )
}

export default Navbar
