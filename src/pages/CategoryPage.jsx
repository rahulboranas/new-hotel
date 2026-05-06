import { useParams, Link } from 'react-router-dom'; 
import { menuItems, categories } from '../data';
import { FaArrowLeft } from "react-icons/fa"; 
import { useEffect } from 'react'; // 🌟 1. useEffect import kiya

function CategoryPage() {
  const { catId } = useParams();
  const filteredItems = menuItems.filter((item) => item.categoryId === catId);
  const categoryDetails = categories.find((c) => c.id === catId);

  // 🌟 2. MAGIC CODE: Page load hote hi sabse upar scroll karega 🌟
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-2 select-none container pt-3 mx-auto max-w-2xl min-h-[70vh]">
      
      {/* Header Section with Back Button */}
      <div className="flex justify-between w-full items-center border-b border-gray-100 dark:border-gray-700 pb-2 mb-2">
        
        <div className="flex items-center gap-2">
          {/* Back Button */}
          <Link to="/" className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <FaArrowLeft className="text-sm" />
          </Link>
          
          <h2 className="text-base text-gray-700 dark:text-gray-200 font-bold tracking-tight">
            {categoryDetails?.name}
          </h2>
        </div>

        {categoryDetails?.img && (
          <img 
            src={categoryDetails.img} 
            alt={categoryDetails.name} 
            className="w-9 h-9 object-cover rounded-full shadow-sm border border-gray-200 dark:border-gray-600" 
          />
        )}
      </div>

      {/* ULTRA COMPACT MENU ITEMS LIST */}
      {filteredItems.length > 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex justify-between items-start py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                index !== filteredItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
              }`}
            >
              <div className="flex flex-col pr-2">
                <span className="font-semibold text-gray-800 dark:text-gray-100 text-[13px] leading-tight">
                  {item.name}
                </span>
                {item.note && (
                  <span className="text-[10px] text-orange-600 dark:text-orange-400 italic mt-0.5 font-medium leading-tight">
                    {item.note}
                  </span>
                )}
              </div>
              <span className="font-bold text-gray-700 dark:text-gray-200 text-[13px] whitespace-nowrap mt-0.5">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No items found.</p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
// import { useParams } from 'react-router-dom';
// import { menuItems, categories } from '../data';

// function CategoryPage() {
//   const { catId } = useParams();
//   const filteredItems = menuItems.filter((item) => item.categoryId === catId);
//   const categoryDetails = categories.find((c) => c.id === catId);

//   return (
//     // Upar ka margin aur padding thoda kam kiya taaki upar se jagah bache
//     <div className="px-2 container pt-1 mt-2 border-t border-gray-200 dark:border-gray-700 mx-auto max-w-2xl min-h-[70vh]">
      
//       {/* Header Section (Aur chota aur compact) */}
//       <div className="flex justify-between w-full items-center border-b border-gray-100 dark:border-gray-700 py-2 mb-2">
//         <h2 className="text-base text-gray-700 dark:text-gray-200 font-bold tracking-tight">
//           {categoryDetails?.name}
//         </h2>
//         {categoryDetails?.img && (
//           // Image size 12 se 10 kar diya
//           <img 
//             src={categoryDetails.img} 
//             alt={categoryDetails.name} 
//             className="w-10 h-10 object-cover rounded-full shadow-sm border border-gray-200 dark:border-gray-600" 
//           />
//         )}
//       </div>

//       {/* 🌟 ULTRA COMPACT MENU ITEMS LIST 🌟 */}
//       {filteredItems.length > 0 ? (
//         <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
//           {filteredItems.map((item, index) => (
//             <div 
//               key={item.id} 
//               // Padding ko py-1.5 kiya (ekdum chipka hua par clean)
//               className={`flex justify-between items-start py-1.5 px-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
//                 index !== filteredItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
//               }`}
//             >
//               <div className="flex flex-col pr-2">
//                 {/* Text size 14px se 13px kar diya */}
//                 <span className="font-semibold text-gray-800 dark:text-gray-100 text-[13px] leading-tight">
//                   {item.name}
//                 </span>
                
//                 {item.note && (
//                   // Note ka size 11px se 10px kar diya
//                   <span className="text-[10px] text-orange-600 dark:text-orange-400 italic mt-0.5 font-medium leading-tight">
//                     {item.note}
//                   </span>
//                 )}
//               </div>

//               {/* Price ka text bhi 13px */}
//               <span className="font-bold text-gray-700 dark:text-gray-200 text-[13px] whitespace-nowrap mt-0.5">
//                 {item.price}
//               </span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-600">
//           <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No items found.</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CategoryPage;