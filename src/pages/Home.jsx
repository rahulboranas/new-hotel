// // src/pages/Home.jsx
// import { Link } from 'react-router-dom';
// import { categories } from '../data';

// function Home() {
//   return (
//     <div className="p-4 container mx-auto">
//       {/* Heading ko thoda premium banaya */}
//       <div className="mb-6 border-b-2 border-gray-200 pb-2">
//         <h2 className="text-2xl   text-gray-600 font-semibold">
//           Explore Menu <span className="text-xl">🍽️</span>
//         </h2>
//       </div>
      
//       <div className="grid grid-cols-4 gap-2">
//         {categories.map((cat) => (
//           <Link key={cat.id} to={`/category/${cat.id}`} className=" rounded-full w-full flex flex-col items-center  p-2 shadow-sm hover:shadow-md transition bg-white">
//             <img src={cat.img} alt={cat.name} className="w-15 h-15 object-cover rounded-full " />
//             <h3 className="text-center pt-2  text-xs font-semibold text-gray-700">{cat.name}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { categories } from '../data';

function Home() {
  return (
    <div className="p-4 container mx-auto">
      {/* Heading - dark:text-gray-200 aur dark:border-gray-700 add kiya */}
      <div className="mb-6 border-b-2 border-gray-200 dark:border-gray-700 pb-2">
        <h2 className="text-2xl text-gray-600 dark:text-gray-200 font-semibold">
          Explore Menu <span className="text-xl">🍽️</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {categories.map((cat) => (
          // Box - dark:bg-gray-800 aur dark:border add kiya taaki raat ko alag dikhe
          <Link key={cat.id} to={`/category/${cat.id}`} className="rounded-full w-full flex flex-col items-center p-2 shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
            <img src={cat.img} alt={cat.name} className="w-15 h-15 object-cover rounded-full" />
            <h3 className="text-center pt-2 text-xs font-semibold text-gray-700 dark:text-gray-200">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;