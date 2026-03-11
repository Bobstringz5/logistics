import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const[ open, setOpen] = useState(false);
  function handleOpen(){
    setOpen(prev =>!prev)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-linear-to-r from-blue-700 backdrop-blur-2xl via-white-500 to-black-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5 text-white">
        <img src={logo} alt="my logo" className="h-12 w-15"/>

        <ul className="hidden md:flex space-x-8 font-medium text-2xl gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button className="bg-primary hidden md:inline px-5 py-2 rounded text-white">
            Get Quote
          </button>
        </div>
        <div className="absolute sm:hidden ">
          <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

          <button className="bg-primary hidden md:inline px-5 py-2 rounded text-white">
            Get Quote
          </button>
        
          </div>
        <div 
          className="md:hidden text-2xl  absolute z-30 top-2 right-2 cursor-pointer"
          onClick={handleOpen}
         >
           <FaBars className=" bg-black-500"/>
         {/* {open ? <FaTimes className=" bg-red-500"/> : <faBars  className='bg-red-500'/>} */}
         </div>   
       </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-0 right-0   backdrop-blur text-center py-6 space-y-5 ">
          <ul className="space-x-8 gap-x-4 grid p-y-7">
           <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

