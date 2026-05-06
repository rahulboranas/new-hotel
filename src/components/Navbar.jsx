

// // export default Navbar;
// import { Link } from 'react-router-dom';
// import logo from '../assets/krishna.png';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa"; 
// import { useState, useEffect } from 'react'; 

// function Navbar() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <nav className="relative w-full h-full ">
      
//       {/* 🌟 SMALL PREMIUM SWIPE TOGGLE SWITCH (Bina Orange ke) 🌟 */}
//       <div className="absolute top-4 right-4 z-50">
//         <div 
//           onClick={() => setIsDark(!isDark)}
//           className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border border-white/40 shadow-sm ${
//             isDark ? 'bg-gray-800' : 'bg-white/30 backdrop-blur-md'
//           }`}
//         >
//           {/* Chota gola jo slide hoga */}
//           <div 
//             className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 flex justify-center items-center ${
//               isDark ? 'translate-x-5' : 'translate-x-0'
//             }`}
//           >
//             {isDark ? (
//               <FaMoon className="text-gray-800 text-[9px]" /> 
//             ) : (
//               <FaSun className="text-yellow-500 text-[9px]" />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* 1. First Div: Sirf Background Image ke liye (Tera Original Code) */}
//       <div 
//         className="absolute inset-0 rounded-b-sm w-full h-45 bg-center z-0" 
//         style={{ backgroundImage: "url('/blue-back.png')" }}
//       >
//         {/* Overlay taaki image thodi dark rahe aur content dikhe */}
//         <div className="w-full h-45 rounded-b-sm lg:rounded-2xl bg-black/50"></div>
//       </div>

//       {/* 2. Second Div: Sirf Content (Logo, Links etc.) ke liye (Tera Original Code) */}
//       <div className="relative z-10 pt-10 pb-10 container mx-auto h-full flex flex-col bg-contain justify-center items-center ">
//         <img src={logo} alt="Local Kitchen" className="w-28 h-28" />
//       </div>
      
//       {/* Title & Contact details */}
//       <div className='text-neutral-600 dark:text-gray-200 w-full flex flex-col gap-2 items-center'>
//         <h1 className='font-bold text-2xl pt-2'>Radha Krishna Menu </h1>
//         <div className='flex justify-evenly w-full pt-3 text-md font-medium'>
          
//           {/* Location Section */}
//           <div className='flex items-center gap-2'>
//             {/* Orange hata kar text-gray-300 lagaya hai dark mode ke liye */}
//             <FaLocationDot className="text-neutral-600 dark:text-gray-300" />
//             <span className='text-sm'>Virar, Maharashtra</span>
//           </div>

//           {/* Phone Section */}
//           <div className='flex items-center gap-2'>
//             {/* Orange hata kar text-gray-300 lagaya hai dark mode ke liye */}
//             <FaPhoneAlt className="text-neutral-600 dark:text-gray-300" />
//             <span className='text-sm'>+91 9867278872</span>
//           </div>
          
//         </div>
//       </div>
    
//     </nav>
//   )
// }

// export default Navbar;

import { Link, useLocation } from 'react-router-dom'; // useLocation add kiya
import logo from '../assets/krishna.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaSun, FaMoon } from "react-icons/fa"; 
import { useState, useEffect } from 'react'; 

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation(); // URL track karne ke liye

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 🌟 MAGIC: Agar URL mein '/category' hai, toh Navbar hide kar do! 🌟
  if (location.pathname.includes('/category')) {
    return null;
  }

  return (
    <nav className="relative select-none w-full h-full ">
      
      {/* 🌟 SMALL PREMIUM SWIPE TOGGLE SWITCH 🌟 */}
      <div className="absolute top-4 right-4 z-50">
        <div 
          onClick={() => setIsDark(!isDark)}
          className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 border border-white/40 shadow-sm ${
            isDark ? 'bg-gray-800' : 'bg-white/30 backdrop-blur-md'
          }`}
        >
          <div 
            className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 flex justify-center items-center ${
              isDark ? 'translate-x-5' : 'translate-x-0'
            }`}
          >
            {isDark ? (
              <FaMoon className="text-gray-800 text-[9px]" /> 
            ) : (
              <FaSun className="text-yellow-500 text-[9px]" />
            )}
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 rounded-b-sm w-full h-45 bg-center z-0" 
        style={{ backgroundImage: "url('/blue-back.png')" }}
      >
        <div className="w-full h-45 rounded-b-sm lg:rounded-2xl bg-black/50"></div>
      </div>

      <div className="relative z-10 pt-10 pb-10 container mx-auto h-full flex flex-col bg-contain justify-center items-center ">
        <img src={logo} alt="Local Kitchen" className="w-28 h-28" />
      </div>
      
      <div className='text-neutral-600 dark:text-gray-200 w-full flex flex-col gap-2 items-center'>
        <h1 className='font-bold text-2xl pt-2'>Radha Krishna-Menu</h1>
        <div className='flex justify-evenly w-full pt-3 text-md font-medium'>
          <div className='flex items-center gap-2'>
            <FaLocationDot className="text-neutral-600 dark:text-gray-300" />
            <span className='text-sm'>Virar, Maharashtra</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt className="text-neutral-600 dark:text-gray-300" />
            <span className='text-sm'>+91 9876543210</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;