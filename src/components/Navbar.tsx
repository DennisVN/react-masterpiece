import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function App() {

  //THIS TOGGLE HOOK USES FOR HAMBURGER MENU IN SMALL SCREEN
  const [toggle, setToggle] = useState(false);

  const menuClickHandler = () => setToggle(!toggle)

  return (
    <nav className="navText md:flex items-center justify-between font-bold bg-black w-full bg-opacity-90 p-4 md:py-4 md:px-12">
      <div className="flex justify-between">
        <Link to="/"> <a className=" font-bold font-rancho text-7xl">My-Kitchen</a> </Link>

        <button className={"hamburgerMenu items-center" + (!toggle ? " opened" : "")} onClick={menuClickHandler} aria-label="Main Menu">
          <svg className="md:hidden" width="50" height="40" viewBox="0 0 100 100">
            <path className="menuLine menuLine1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="menuLine menuLine2" d="M 20,50 H 80" />
            <path className="menuLine menuLine3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>



      </div>







      <div className={"md:block" + (toggle ? " hidden" : "")}>
        <Link to="/menu" className="navLinks">MENU</Link>
        <Link to="/reviews" className="navLinks">REVIEWS</Link>
        <Link to="/cookdetails" className="navLinks">COOKDETAILS</Link>
        <Link to="/login" className="navLinks border-white hover:border-darkkhaki border-2 p-2 rounded-2xl">LOGIN</Link>
      </div>
    </nav>
  );
}
