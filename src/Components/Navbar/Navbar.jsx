import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar () {

  const [menu,setMenu] = useState("womens");

  return(
    <div className="navbar-box">
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-imag" />
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"? <hr/> : <></>}</li>
        <li  onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"? <hr/> : <></>}</li>   
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <FaRegUser size='26px' color='#716b6b' />
        <AiOutlineShoppingCart size='28px' color='#716b6b' />
        <div className="nav-cart-count">0</div>     
      </div>
    </div>
    </div>
  );
}

export default Navbar