// // src/pages/CategoryPage.jsx
// import { useParams, Link } from 'react-router-dom';
// import { menuItems, categories } from '../data';
// // import { IoArrowBackCircle } from "react-icons/io5"; // Agar use nahi kar raha toh hata sakta hai

// function CategoryPage() {
//   // URL se category id nikalna
//   const { catId } = useParams();

//   // Sirf wahi item filter karo jinka categoryId match ho raha hai
//   const filteredItems = menuItems.filter((item) => item.categoryId === catId);
  
//   // Category ka naam aur image dikhane ke liye
//   const categoryDetails = categories.find((c) => c.id === catId);

//   return (
//     // max-w-2xl lagaya taaki mobile pe full width rahe aur PC pe zyada faile nahi
//     <div className="px-4 container pt-2 mt-3 border-t border-gray-200 mx-auto max-w-2xl min-h-[70vh]">
      
//       {/* Header Section - Yaha maine Image add ki hai */}
//       <div className="flex justify-between  w-full h-full items-center border-b-2 border-gray-100  py-4">
//         {/* Category Image */}
      
        
//         {/* Category Title */}
//         <h2 className="text-lg text-gray-700 font-bold tracking-tight">
//           {categoryDetails?.name}
//         </h2>
//           {categoryDetails?.img && (
//           <img 
//             src={categoryDetails.img} 
//             alt={categoryDetails.name} 
//             className="w-14 h-14 object-cover rounded-full shadow-sm border border-gray-200" 
//           />
//         )}
//       </div>

//       {/* Menu Items List */}
//       <div className="flex flex-col gap-2">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             // Ekdum premium white card look with shadow
//             <div 
//               key={item.id} 
//               className="flex justify-between items-center bg-white py-2 px-4 rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
//             >
//               <span className="font-semibold text-gray-800 text-sm tracking-wide">
//                 {item.name}
//               </span>
//               <span className="font-bold text-gray-600 text-sm">
//                 {item.price}
//               </span>
//             </div>
//           ))
//         ) : (
//           // Agar items nahi hai toh clean empty state
//           <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
//             <p className="text-gray-500 text-lg font-medium">No items found in this category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;

// src/pages/CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { menuItems, categories } from '../data';

function CategoryPage() {
  // URL se category id nikalna
  const { catId } = useParams();

  // Sirf wahi item filter karo jinka categoryId match ho raha hai
  const filteredItems = menuItems.filter((item) => item.categoryId === catId);
  
  // Category ka naam aur image dikhane ke liye
  const categoryDetails = categories.find((c) => c.id === catId);

  return (
    // Main container - dark:border-gray-700
    <div className="px-4 container pt-2 mt-3 border-t border-gray-200 dark:border-gray-700 mx-auto max-w-2xl min-h-[70vh]">
      
      {/* Header Section */}
      <div className="flex justify-between w-full h-full items-center border-b-2 border-gray-100 dark:border-gray-700 py-4">
        
        {/* Category Title - dark:text-gray-200 */}
        <h2 className="text-lg text-gray-700 dark:text-gray-200 font-bold tracking-tight">
          {categoryDetails?.name}
        </h2>
        {categoryDetails?.img && (
          <img 
            src={categoryDetails.img} 
            alt={categoryDetails.name} 
            className="w-14 h-14 object-cover rounded-full shadow-sm border border-gray-200 dark:border-gray-600" 
          />
        )}
      </div>

      {/* Menu Items List */}
      <div className="flex flex-col gap-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            // Dish ka Dabba - dark:bg-gray-800 aur dark:border-gray-700
            <div 
              key={item.id} 
              className="flex justify-between items-center bg-white dark:bg-gray-800 py-2 px-4 rounded-md shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
            >
              {/* Dish Name - dark:text-gray-100 */}
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm tracking-wide">
                {item.name}
              </span>
              {/* Price - dark:text-gray-300 */}
              <span className="font-bold text-gray-600 dark:text-gray-300 text-sm">
                {item.price}
              </span>
            </div>
          ))
        ) : (
          // Agar items nahi hai toh empty state
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;