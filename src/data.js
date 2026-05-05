// src/data.js

export const categories = [
  { id: "paneer-special", name: "Paneer Special", img: "https://tse3.mm.bing.net/th/id/OIP.2WZ_-7MsMJOLA55ZtS2ZYAHaHa?pid=Api&P=0&h=180" },
  { id: "noodles", name: "Noodles", img: "https://tse2.mm.bing.net/th/id/OIP.RdtUHDNBJxOas3jvuOOWAwHaJQ?pid=Api&P=0&h=180" },
  { id: "pav-bhaji", name: "Pav Bhaji", img: "https://tse1.mm.bing.net/th/id/OIP.CZGdaSl2iOp_rZurLC6VvAHaGR?pid=Api&P=0&h=180" },
  { id: "veg-sabzi", name: "Veg Sabzi", img: "https://tse1.mm.bing.net/th/id/OIP.i_Q2mkHCLAqhwqowo_UvhwHaGv?pid=Api&P=0&h=180" },
  { id: "dal-special", name: "Dal Special", img: "https://tse4.mm.bing.net/th/id/OIP.dfVX0R1UnJsg2i5CV2uZFgHaHa?pid=Api&P=0&h=180" },
  { id: "roti-naan", name: "Roti & Naan", img: "https://tse3.mm.bing.net/th/id/OIP.6CQuC0Koi5HdF_-Thny55AHaHa?pid=Api&P=0&h=180" },
  { id: "rice-biryani", name: "Rice & Biryani", img: "https://tse1.mm.bing.net/th/id/OIP.Jx7ND5EZuXtItUOwq8Dv_AHaFb?pid=Api&P=0&h=180" },
  { id: "fast-food", name: "Fast Food", img: "https://tse2.mm.bing.net/th/id/OIP.QQcXzfNeJS55OIQGhCs3mAHaE7?pid=Api&P=0&h=180" },
  { id: "south-indian", name: "South Indian", img: "https://tse1.mm.bing.net/th/id/OIP.3eehDwIFNFsHBtBhJADJuwHaE7?pid=Api&P=0&h=180" },
  { id: "snacks", name: "Snacks", img: "https://tse1.mm.bing.net/th/id/OIP.0HgAGhNeMgqJ5jWkNgqLFgHaEQ?pid=Api&P=0&h=180" },
  { id: "starters", name: "Starters", img: "https://tse2.mm.bing.net/th/id/OIP.9nRBs-jaoM9m-7M76N6n5AHaFj?pid=Api&P=0&h=180" },
  { id: "beverages", name: "Beverages", img: "https://tse3.mm.bing.net/th/id/OIP.BBi0qbyV7qPRW_nFnDtj1wHaEK?pid=Api&P=0&h=180" },
  { id: "desserts", name: "Desserts", img: "https://tse1.mm.bing.net/th/id/OIP.2vHcW0ifqfJF0C9rndmm2gHaFj?pid=Api&P=0&h=180" },
  { id: "thali", name: "Thali", img: "https://tse2.mm.bing.net/th/id/OIP.0NUcxlmH1KNyA4UcR8BR6wHaFj?pid=Api&P=0&h=180" },
  { id: "sandwich-special", name: "Sandwich Special", img: "https://tse3.mm.bing.net/th/id/OIP.FPQeFwfNNMtSc9vCqO1IugHaHa?pid=Api&P=0&h=180" },
  { id: "pasta", name: "Pasta", img: "https://tse4.mm.bing.net/th/id/OIP.dJXRd-YM1toRB7KnZNgEKwHaE8?pid=Api&P=0&h=180" },
  { id: "pizza", name: "Pizza", img: "https://tse1.mm.bing.net/th/id/OIP.D4lCG7dGjMJwO07EHm1uIQHaHa?pid=Api&P=0&h=180" },
  { id: "milkshakes", name: "Milkshakes", img: "https://tse1.mm.bing.net/th/id/OIP.YrdMNaY2uehJoJIVCBet9wHaHa?pid=Api&P=0&h=180" }
];

export const menuItems = [
  // 1. Paneer Special
  { id: 1, categoryId: "paneer-special", name: "Palak Paneer", price: "₹180" },
  { id: 2, categoryId: "paneer-special", name: "Mutter Paneer", price: "₹170" },
  { id: 3, categoryId: "paneer-special", name: "Paneer Butter Masala", price: "₹190" },
  { id: 4, categoryId: "paneer-special", name: "Kadai Paneer", price: "₹180" },
  { id: 5, categoryId: "paneer-special", name: "Paneer Tikka Masala", price: "₹200" },
  { id: 6, categoryId: "paneer-special", name: "Shahi Paneer", price: "₹190" },
  { id: 7, categoryId: "paneer-special", name: "Paneer Lababdar", price: "₹200" },

  // 2. Noodles
  { id: 8, categoryId: "noodles", name: "Plain Noodles", price: "₹100" },
  { id: 9, categoryId: "noodles", name: "Veg Noodles", price: "₹120" },
  { id: 10, categoryId: "noodles", name: "Paneer Noodles", price: "₹140" },
  { id: 11, categoryId: "noodles", name: "Schezwan Noodles", price: "₹130" },
  { id: 12, categoryId: "noodles", name: "Hakka Noodles", price: "₹130" },
  { id: 13, categoryId: "noodles", name: "Triple Noodles", price: "₹160" },

  // 3. Pav Bhaji
  { id: 14, categoryId: "pav-bhaji", name: "Plain Pav Bhaji", price: "₹120" },
  { id: 15, categoryId: "pav-bhaji", name: "Butter Pav Bhaji", price: "₹140" },
  { id: 16, categoryId: "pav-bhaji", name: "Cheese Pav Bhaji", price: "₹160" },
  { id: 17, categoryId: "pav-bhaji", name: "Jain Pav Bhaji", price: "₹130" },
  { id: 18, categoryId: "pav-bhaji", name: "Extra Pav", price: "₹30" },

  // 4. Veg Sabzi
  { id: 19, categoryId: "veg-sabzi", name: "Mix Veg", price: "₹150" },
  { id: 20, categoryId: "veg-sabzi", name: "Veg Kolhapuri", price: "₹160" },
  { id: 21, categoryId: "veg-sabzi", name: "Aloo Mutter", price: "₹140" },
  { id: 22, categoryId: "veg-sabzi", name: "Bhindi Masala", price: "₹150" },
  { id: 23, categoryId: "veg-sabzi", name: "Sev Tamatar", price: "₹140" },
  { id: 24, categoryId: "veg-sabzi", name: "Dum Aloo", price: "₹150" },

  // 5. Dal Special
  { id: 25, categoryId: "dal-special", name: "Dal Fry", price: "₹120" },
  { id: 26, categoryId: "dal-special", name: "Dal Tadka", price: "₹130" },
  { id: 27, categoryId: "dal-special", name: "Dal Makhani", price: "₹160" },
  { id: 28, categoryId: "dal-special", name: "Yellow Dal", price: "₹110" },
  { id: 29, categoryId: "dal-special", name: "Dal Khichdi", price: "₹140" },

  // 6. Roti & Naan
  { id: 30, categoryId: "roti-naan", name: "Plain Roti", price: "₹15" },
  { id: 31, categoryId: "roti-naan", name: "Butter Roti", price: "₹20" },
  { id: 32, categoryId: "roti-naan", name: "Plain Naan", price: "₹40" },
  { id: 33, categoryId: "roti-naan", name: "Butter Naan", price: "₹50" },
  { id: 34, categoryId: "roti-naan", name: "Garlic Naan", price: "₹60" },
  { id: 35, categoryId: "roti-naan", name: "Cheese Naan", price: "₹80" },

  // 7. Rice & Biryani
  { id: 36, categoryId: "rice-biryani", name: "Plain Rice", price: "₹90" },
  { id: 37, categoryId: "rice-biryani", name: "Jeera Rice", price: "₹120" },
  { id: 38, categoryId: "rice-biryani", name: "Veg Pulao", price: "₹140" },
  { id: 39, categoryId: "rice-biryani", name: "Veg Biryani", price: "₹160" },
  { id: 40, categoryId: "rice-biryani", name: "Paneer Biryani", price: "₹180" },
  { id: 41, categoryId: "rice-biryani", name: "Schezwan Rice", price: "₹140" },

  // 8. Fast Food
  { id: 42, categoryId: "fast-food", name: "Veg Burger", price: "₹80" },
  { id: 43, categoryId: "fast-food", name: "Cheese Burger", price: "₹100" },
  { id: 44, categoryId: "fast-food", name: "Veg Sandwich", price: "₹90" },
  { id: 45, categoryId: "fast-food", name: "Grilled Sandwich", price: "₹110" },
  { id: 46, categoryId: "fast-food", name: "Cheese Sandwich", price: "₹120" },

  // 9. South Indian
  { id: 47, categoryId: "south-indian", name: "Idli (2 pcs)", price: "₹60" },
  { id: 48, categoryId: "south-indian", name: "Plain Dosa", price: "₹90" },
  { id: 49, categoryId: "south-indian", name: "Masala Dosa", price: "₹110" },
  { id: 50, categoryId: "south-indian", name: "Mysore Dosa", price: "₹130" },
  { id: 51, categoryId: "south-indian", name: "Uttapam", price: "₹120" },
  { id: 52, categoryId: "south-indian", name: "Cheese Dosa", price: "₹140" },

  // 10. Snacks
  { id: 53, categoryId: "snacks", name: "French Fries", price: "₹90" },
  { id: 54, categoryId: "snacks", name: "Peri Peri Fries", price: "₹110" },
  { id: 55, categoryId: "snacks", name: "Samosa (2 pcs)", price: "₹40" },
  { id: 56, categoryId: "snacks", name: "Kachori", price: "₹40" },
  { id: 57, categoryId: "snacks", name: "Bread Pakoda", price: "₹50" },

  // 11. Starters
  { id: 58, categoryId: "starters", name: "Veg Manchurian", price: "₹140" },
  { id: 59, categoryId: "starters", name: "Paneer Chilli", price: "₹180" },
  { id: 60, categoryId: "starters", name: "Crispy Corn", price: "₹140" },
  { id: 61, categoryId: "starters", name: "Spring Roll", price: "₹130" },
  { id: 62, categoryId: "starters", name: "Paneer Tikka", price: "₹200" },

  // 12. Beverages
  { id: 63, categoryId: "beverages", name: "Tea", price: "₹20" },
  { id: 64, categoryId: "beverages", name: "Coffee", price: "₹30" },
  { id: 65, categoryId: "beverages", name: "Cold Coffee", price: "₹80" },
  { id: 66, categoryId: "beverages", name: "Lassi", price: "₹70" },
  { id: 67, categoryId: "beverages", name: "Fresh Lime Soda", price: "₹60" },
  { id: 68, categoryId: "beverages", name: "Soft Drinks", price: "₹40" },

  // 13. Desserts
  { id: 69, categoryId: "desserts", name: "Gulab Jamun (2 pcs)", price: "₹50" },
  { id: 70, categoryId: "desserts", name: "Ice Cream", price: "₹60" },
  { id: 71, categoryId: "desserts", name: "Brownie", price: "₹100" },
  { id: 72, categoryId: "desserts", name: "Gajar Halwa", price: "₹80" },

  // 14. Thali
  { id: 73, categoryId: "thali", name: "Mini Thali", price: "₹120" },
  { id: 74, categoryId: "thali", name: "Regular Thali", price: "₹180" },
  { id: 75, categoryId: "thali", name: "Special Thali", price: "₹220" },

  // 15. Sandwich Special
  { id: 76, categoryId: "sandwich-special", name: "Veg Club Sandwich", price: "₹130" },
  { id: 77, categoryId: "sandwich-special", name: "Paneer Sandwich", price: "₹140" },
  { id: 78, categoryId: "sandwich-special", name: "Cheese Corn Sandwich", price: "₹130" },
  { id: 79, categoryId: "sandwich-special", name: "Mayo Sandwich", price: "₹120" },

  // 16. Pasta
  { id: 80, categoryId: "pasta", name: "White Sauce Pasta", price: "₹140" },
  { id: 81, categoryId: "pasta", name: "Red Sauce Pasta", price: "₹130" },
  { id: 82, categoryId: "pasta", name: "Mix Sauce Pasta", price: "₹150" },
  { id: 83, categoryId: "pasta", name: "Cheese Pasta", price: "₹160" },

  // 17. Pizza
  { id: 84, categoryId: "pizza", name: "Margherita", price: "₹120" },
  { id: 85, categoryId: "pizza", name: "Veg Loaded", price: "₹160" },
  { id: 86, categoryId: "pizza", name: "Paneer Pizza", price: "₹180" },
  { id: 87, categoryId: "pizza", name: "Cheese Burst Pizza", price: "₹200" },

  // 18. Milkshakes
  { id: 88, categoryId: "milkshakes", name: "Chocolate Shake", price: "₹100" },
  { id: 89, categoryId: "milkshakes", name: "Strawberry Shake", price: "₹100" },
  { id: 90, categoryId: "milkshakes", name: "Vanilla Shake", price: "₹90" },
  { id: 91, categoryId: "milkshakes", name: "Oreo Shake", price: "₹120" }
];