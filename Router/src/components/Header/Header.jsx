import React from "react";
import {NavLink,Link} from "react-router-dom"
function Header()
{
    return(
        <header className='sticky top-0  border-2 w-[1520px] h-[80px] flex flex-row justify-between border-gray-300'>

      <div className="justify-start relative order-1"><img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" className=" ml-80 m-3 h-12"/></div>

      <div className=" justify-center relative order-2 ">
        <ul className="flex flex-row ml-12 ">
          <li className="">
            <NavLink to="/" className = {({isActive})=> `${isActive ? "text-orange-600" : "text-black"} m-10 relative top-5`}>Home</NavLink>
          </li>
          <li className="">
            <NavLink to="/about" className = {({isActive})=> `${isActive ? "text-orange-600" : "text-black" } m-10 relative top-5`}>About</NavLink>
          </li>
          <li className="">
            <NavLink to="/contact" className = {({isActive})=> `${isActive ? "text-orange-600" : "text-black" } m-10 relative top-5`}>Contact</NavLink>
          </li>
          
        </ul>
      </div>

      <div className="justify-end order-3  w-[450px] flex flex-row">
        <div className="relative top-5 right-[0px] ">
          <Link to="#" className=" text-black w-[100px] relative right-[110px] h-[80px] cursor-pointer m-10">
              Login
          </Link  >
        </div>
       
       <div className="relative top-3.5 right-[0px] ">
       <Link to="#" className="w-[100px] h-[40px] border-2 right-[130px] relative bg-orange-800 border-white flex justify-center items-center rounded-xl cursor-pointer">
            Sign Up
        </Link  >
       </div>
      </div>
      
   </header>
    )
}

export default Header