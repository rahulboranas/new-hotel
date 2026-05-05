// import { Link } from 'react-router-dom'
// import logo from '../assets/loc.png'
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// function Navbar() {
//   return (
//     <nav className="relative w-full h-full ">
//       {/* 1. First Div: Sirf Background Image ke liye */}
//       <div 
//         className="absolute inset-0  rounded-b-sm w-full  h-45 lg:rounded-b-2xl bg-cover  bg-center z-0" 
//         style={{ backgroundImage: "url('/backgorund.avif')" }}
//       >
//         {/* Overlay taaki image thodi dark rahe aur content dikhe */}
//         <div className="w-full h-45 rounded-b-sm lg:rounded-2xl  bg-black/50"></div>
//       </div>

//       {/* 2. Second Div: Sirf Content (Logo, Links etc.) ke liye */}
//       <div className="relative z-10 pt-32 container mx-auto h-full flex flex-col bg-contain justify-center items-center ">
//         <img src={logo} alt="Local Kitchen" className="w-25 h-25   p-2" />
          
//           {/* Yahan tu apna baki content likh sakta hai */}
//       </div>
//       <div className='text-neutral-600 w-full flex flex-col gap-2 items-center'>
        
//         <h1 className='font-bold text-2xl pt'>Local Kitchen</h1>
//        <div className='flex justify-evenly w-full pt-3 text-md font-medium'>
//     {/* Location Section */}
//     <div className='flex items-center gap-2'>
//         <FaLocationDot className="text-neutral-600 " />
//         <span className='text-sm'>Virar, Maharashtra</span> {/* Tu apna location yaha likh sakta hai */}
//     </div>

//     {/* Phone Section */}
//     <div className='flex items-center gap-2'>
//         <FaPhoneAlt className="text-neutral-600 " />
//         <span className='text-sm'>+91 9876543210</span>
//     </div>
// </div>
//       </div>
    
//     </nav>
//   )
// }

// export default Navbar

import { Link } from 'react-router-dom';
import logo from '../assets/loc.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa"; // Sun aur Moon import kiye
import { useState, useEffect } from 'react'; // React hooks

function Navbar() {
  // Dark mode ka state
  const [isDark, setIsDark] = useState(false);

  // Jab button dabega, ye HTML tag me 'dark' class lagayega/hatayega
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="relative w-full h-full ">
      
      {/* 🌟 YAHAN HAI TERA DARK MODE BUTTON 🌟 */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 z-50 bg-black/60 p-3 rounded-full border border-white/20 shadow-lg transition-transform active:scale-95 cursor-pointer"
      >
        {isDark ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-white text-xl" />}
      </button>

      {/* 1. First Div: Sirf Background Image ke liye */}
      <div 
        className="absolute inset-0 rounded-b-sm w-full h-45 lg:rounded-b-2xl bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/backgorund.avif')" }}
      >
        {/* Overlay taaki image thodi dark rahe aur content dikhe */}
        <div className="w-full h-45 rounded-b-sm lg:rounded-2xl bg-black/50"></div>
      </div>

      {/* 2. Second Div: Sirf Content (Logo, Links etc.) ke liye */}
      <div className="relative z-10 pt-32 container mx-auto h-full flex flex-col bg-contain justify-center items-center ">
        <img src={logo} alt="Local Kitchen" className="w-25 h-25 p-2" />
      </div>
      
      {/* Title & Contact details - Yahan dark:text-gray-200 add kiya hai */}
      <div className='text-neutral-600 dark:text-gray-200 w-full flex flex-col gap-2 items-center'>
        <h1 className='font-bold text-2xl pt-2'>Local Kitchen</h1>
        <div className='flex justify-evenly w-full pt-3 text-md font-medium'>
          
          {/* Location Section */}
          <div className='flex items-center gap-2'>
            <FaLocationDot className="text-neutral-600 dark:text-orange-500" />
            <span className='text-sm'>Virar, Maharashtra</span>
          </div>

          {/* Phone Section */}
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className="text-neutral-600 dark:text-orange-500" />
            <span className='text-sm'>+91 9876543210</span>
          </div>
          
        </div>
      </div>
    
    </nav>
  )
}

export default Navbar;