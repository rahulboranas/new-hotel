import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
import img9 from './assets/9.png'
import img10 from './assets/10.png'
import img11 from './assets/11.png'
import img12 from './assets/12.png'
import img13 from './assets/13.png'
import img14 from './assets/14.png'
import img15 from './assets/15.png'
import img16 from './assets/16.png'
import img17 from './assets/17.png'
import img18 from './assets/18.png'
import img19 from './assets/19.png'
import img20 from './assets/20.png'
import img21 from './assets/21.png'
import img22 from './assets/22.png'
import img23 from './assets/23.png'
import img24 from './assets/24.png'
import img25 from './assets/25.png'
import img26 from './assets/26.png'
import img27 from './assets/27.png'
import img28 from './assets/28.png'
import img29 from './assets/29.png'
import img30 from './assets/30.png'


export const categories = [
  // 🍲 1. SHURUAAT (Soups & Starters) - Appetite badhane ke liye
  { id: "indian-shorba", name: "Indian Shorba", img: img9 },
  { id: "chinese-soups", name: "Chinese Soups", img: img5 },
  { id: "indian-starters", name: "Indian Starters", img: img8 },
  { id: "chinese-starters", name: "Chinese Starters", img: img10 },

  // 🍕 2. QUICK BITES & FAST FOOD - Street food aur light snacks
  { id: "delhi-chaat", name: "Delhi Chaat", img: img7 },
  { id: "pav-bhaji", name: "Pav Bhaji", img: img2 },
  { id: "chole-bhature", name: "Chole Bhature", img: img6 },
    { id: "indian-main-course", name: "Indian Main Course", img: img1 },
  { id: "chinese-main-course", name: "Chinese Main Course", img: img11 },
  { id: "dal", name: "Dal", img: img3 },
  { id: "indian-bread", name: "Indian Bread", img: img12 },

  // 🍚 6. RICE & NOODLES
  { id: "rice-biryani", name: "Basmati Rice & Biryani", img: img13 },
  { id: "chinese-rice-noodles", name: "Chinese Rice/Noodles", img: img14 },

  // 🥞 3. SOUTH INDIAN & BREAKFAST - Any time favorites
  { id: "breakfast", name: "Breakfast", img: img4 },
  { id: "dosa", name: "Dosa", img: img15 },
  { id: "dosa-specialities", name: "Dosa Specialities", img: img16 },
  { id: "sandwiches", name: "Sandwiches", img: img17 },
  { id: "pizza", name: "Pizza", img: img18 },
  { id: "pasta", name: "Pasta", img: img19 },

  // 🍛 4. MAIN COURSE (Heavy Meals)


  // 🫓 5. DAL & BREADS
  

  // 🥗 7. ACCOMPANIMENTS (Side Kicks)
  { id: "salad", name: "Salad", img: img20 },
  { id: "raita", name: "Raita", img: img21 },
  { id: "papad", name: "Papad", img: img22 },

  // 🙏 8. SPECIAL MENU
  { id: "upvas-special", name: "Upvas Special", img: img23 },

  // 🍹 9. BEVERAGES (Thanda & Garam)
  { id: "mocktail", name: "Mocktail", img: img24 },
  { id: "juices", name: "Juices", img: img25 },
  { id: "milkshakes", name: "Milkshakes", img: img26 },
  { id: "chilled-beverages", name: "Chilled Beverages", img: img27 },
  { id: "hot-beverages", name: "Hot Beverages", img: img28 },

  // 🍦 10. DESSERTS (Meetha)
  { id: "sweets", name: "Sweets", img: img29 },
  { id: "desserts", name: "Desserts", img: img30 }
];

export const menuItems = [
  // 1. Breakfast
  { id: 101, categoryId: "breakfast", name: "Idli Sambar & Chatni", price: "₹70" },
  { id: 102, categoryId: "breakfast", name: "Medu Vada", price: "₹80" },
  { id: 103, categoryId: "breakfast", name: "Dahi Idli", price: "₹90" },
  { id: 104, categoryId: "breakfast", name: "Thatte Idli", price: "₹90" },
  { id: 105, categoryId: "breakfast", name: "Butter Idli", price: "₹90" },
  { id: 106, categoryId: "breakfast", name: "Upma", price: "₹70" },
  { id: 107, categoryId: "breakfast", name: "Sheera", price: "₹80" },
  { id: 108, categoryId: "breakfast", name: "Sheera Upma Mix", price: "₹80" },
  { id: 109, categoryId: "breakfast", name: "Batata Vada", price: "₹65" },
  { id: 110, categoryId: "breakfast", name: "Veg. Cutlet", price: "₹75" },
  { id: 111, categoryId: "breakfast", name: "Misal Pav", price: "₹70" },
  { id: 112, categoryId: "breakfast", name: "Dahi Misal Pav", price: "₹80" },
  { id: 113, categoryId: "breakfast", name: "Veg. Pakoda", price: "₹80" },
  { id: 114, categoryId: "breakfast", name: "Dahi Vada", price: "₹80" },
  { id: 115, categoryId: "breakfast", name: "Cheese Pakoda", price: "₹130" },
  { id: 116, categoryId: "breakfast", name: "Paneer Pakoda", price: "₹140" },
  { id: 117, categoryId: "breakfast", name: "Puri Bhaji", price: "₹90" },
  { id: 118, categoryId: "breakfast", name: "Puri (5 Pcs)", price: "₹50" },
  { id: 119, categoryId: "breakfast", name: "Idli Fry", price: "₹70" },
  { id: 120, categoryId: "breakfast", name: "Goli Bhajiya", price: "₹80" },
  { id: 121, categoryId: "breakfast", name: "Mangalore Buns", price: "₹100" },

  // 2. Dosa
  { id: 201, categoryId: "dosa", name: "Sada Dosa", price: "₹60" },
  { id: 202, categoryId: "dosa", name: "Masala Dosa", price: "₹70" },
  { id: 203, categoryId: "dosa", name: "Rava Sada Dosa", price: "₹70" },
  { id: 204, categoryId: "dosa", name: "Rava Masala Dosa", price: "₹90" },
  { id: 205, categoryId: "dosa", name: "Mysore Sada", price: "₹80" },
  { id: 206, categoryId: "dosa", name: "Mysore Masala", price: "₹100" },
  { id: 207, categoryId: "dosa", name: "Onion Rava Sada", price: "₹100" },
  { id: 208, categoryId: "dosa", name: "Onion Rava Masala", price: "₹110" },
  { id: 209, categoryId: "dosa", name: "Paper Sada", price: "₹150" },
  { id: 210, categoryId: "dosa", name: "Paper Masala", price: "₹190" },
  { id: 211, categoryId: "dosa", name: "Palak Sada", price: "₹80" },
  { id: 212, categoryId: "dosa", name: "Palak Masala", price: "₹90" },
  { id: 213, categoryId: "dosa", name: "Neer Dosa", price: "₹90" },
  { id: 214, categoryId: "dosa", name: "Set Dosa", price: "₹110" },
  { id: 215, categoryId: "dosa", name: "Uttapa", price: "₹70" },
  { id: 216, categoryId: "dosa", name: "Masala Dosa/Onion Uttappa", price: "₹80" },
  { id: 217, categoryId: "dosa", name: "Tomato Uttappa", price: "₹90" },
  { id: 218, categoryId: "dosa", name: "Tomato Omlet", price: "₹90" },

  // 3. Dosa Specialities
  { id: 301, categoryId: "dosa-specialities", name: "Chocolate Sada Dosa", price: "₹140" },
  { id: 302, categoryId: "dosa-specialities", name: "Palak Dosa With Ghee", price: "₹150" },
  { id: 303, categoryId: "dosa-specialities", name: "Beet Dosa With Ghee", price: "₹140" },
  { id: 304, categoryId: "dosa-specialities", name: "Methi Dosa With Ghee", price: "₹150" },
  { id: 305, categoryId: "dosa-specialities", name: "Ragi (Nachni) Dosa With Ghee", price: "₹150" },
  { id: 306, categoryId: "dosa-specialities", name: "All Above Ghee Dosa Mix", price: "₹170" },
  { id: 307, categoryId: "dosa-specialities", name: "Schezwan Sada Dosa", price: "₹110" },
  { id: 308, categoryId: "dosa-specialities", name: "Schezwan Masala Dosa", price: "₹120" },
  { id: 309, categoryId: "dosa-specialities", name: "Paneer Chilly Dosa", price: "₹170" },
  { id: 310, categoryId: "dosa-specialities", name: "Noodle Dosa", price: "₹140" },

  // 4. Pav Bhaji
  { id: 401, categoryId: "pav-bhaji", name: "Jain Pav Bhaji", price: "₹130" },
  { id: 402, categoryId: "pav-bhaji", name: "Special Pav Bhaji", price: "₹170" },
  { id: 403, categoryId: "pav-bhaji", name: "Cheese Pav Bhaji", price: "₹150" },
  { id: 404, categoryId: "pav-bhaji", name: "Masala Pav (2 Pcs)", price: "₹110" },
  { id: 405, categoryId: "pav-bhaji", name: "Cheese Masala Pav (2 Pcs)", price: "₹140" },
  { id: 406, categoryId: "pav-bhaji", name: "Sada Pav", price: "₹7" },
  { id: 407, categoryId: "pav-bhaji", name: "Butter Pav", price: "₹12" },

  // 5. Sandwiches
  { id: 501, categoryId: "sandwiches", name: "Bread Slice (2 Pcs.)", price: "₹20" },
  { id: 502, categoryId: "sandwiches", name: "Bread Butter", price: "₹50" },
  { id: 503, categoryId: "sandwiches", name: "Bread Butter With Jam", price: "₹55" },
  { id: 504, categoryId: "sandwiches", name: "Toast Butter", price: "₹60" },
  { id: 505, categoryId: "sandwiches", name: "Toast Butter With Jam", price: "₹65" },
  { id: 506, categoryId: "sandwiches", name: "Chatni Sandwich", price: "₹55" },
  { id: 507, categoryId: "sandwiches", name: "Veg. Sandwich", price: "₹65" },
  { id: 508, categoryId: "sandwiches", name: "Toast Sandwich", price: "₹75" },
  { id: 509, categoryId: "sandwiches", name: "Omlet Sandwich (Veg)", price: "₹90" },
  { id: 510, categoryId: "sandwiches", name: "Omlet Toast Sandwich (Veg)", price: "₹110" },
  { id: 511, categoryId: "sandwiches", name: "Cheese Sandwich", price: "₹130" },
  { id: 512, categoryId: "sandwiches", name: "Cheese Toast Sandwich", price: "₹140" },
  { id: 513, categoryId: "sandwiches", name: "Veg. Grilled Sandwich", price: "₹140" },
  { id: 514, categoryId: "sandwiches", name: "Veg. Cheese Grilled Sandwich", price: "₹150" },
  { id: 515, categoryId: "sandwiches", name: "Cheese Chilly Toast", price: "₹150" },
  { id: 516, categoryId: "sandwiches", name: "Cheese Grilled Sandwich", price: "₹160" },
  { id: 517, categoryId: "sandwiches", name: "Club Sandwich", price: "₹180" },

  // 6. Delhi Chaat
  { id: 601, categoryId: "delhi-chaat", name: "Pani Puri", price: "₹70" },
  { id: 602, categoryId: "delhi-chaat", name: "Rava Sindhi Pani Puri", price: "₹80" },
  { id: 603, categoryId: "delhi-chaat", name: "Sev Puri", price: "₹85" },
  { id: 604, categoryId: "delhi-chaat", name: "Dahi Puri", price: "₹100" },
  { id: 605, categoryId: "delhi-chaat", name: "Alu Tikki Chaat", price: "₹120" },
  { id: 606, categoryId: "delhi-chaat", name: "Papdi Chaat", price: "₹120" },
  { id: 607, categoryId: "delhi-chaat", name: "Basket Dhahi Chaat", price: "₹140" },
  { id: 608, categoryId: "delhi-chaat", name: "Tokri Chaat", price: "₹150" },
  { id: 609, categoryId: "delhi-chaat", name: "Bhel Puri", price: "₹110" },
  { id: 610, categoryId: "delhi-chaat", name: "Samosa Chaat", price: "₹140" },
  { id: 611, categoryId: "delhi-chaat", name: "Paneer Chaat", price: "₹150" },
  { id: 612, categoryId: "delhi-chaat", name: "Palak Patta Chaat", price: "₹160" },

  // 7. Indian Starters
  { id: 701, categoryId: "indian-starters", name: "Hara Bhara Kabab", price: "₹190" },
  { id: 702, categoryId: "indian-starters", name: "Aloo Pudina Tikki", price: "₹190" },
  { id: 703, categoryId: "indian-starters", name: "Andra Style Aloo", price: "₹240" },
  { id: 704, categoryId: "indian-starters", name: "Aloo Methi Tikki", price: "₹215" },
  { id: 705, categoryId: "indian-starters", name: "Cheese Gailu Kabab", price: "₹240" },
  { id: 706, categoryId: "indian-starters", name: "Corn Cheese Ball", price: "₹240" },
  { id: 707, categoryId: "indian-starters", name: "Veg Gilhari Kabab", price: "₹215" },
  { id: 708, categoryId: "indian-starters", name: "Mix Veg Pakoda", price: "₹140" },
  { id: 709, categoryId: "indian-starters", name: "Paneer Koliwada", price: "₹265" },
  { id: 710, categoryId: "indian-starters", name: "Chilly Milli Kabab", price: "₹220" },
  { id: 711, categoryId: "indian-starters", name: "Paneer Tikka", price: "₹265" },
  { id: 712, categoryId: "indian-starters", name: "Paneer Pahadi Tikka", price: "₹265" },
  { id: 713, categoryId: "indian-starters", name: "Paneer Sholay Kabab", price: "₹290" },
  { id: 714, categoryId: "indian-starters", name: "Mushroom Tikka", price: "₹240" },
  { id: 715, categoryId: "indian-starters", name: "Veg Seekh Kabab", price: "₹230" },
  { id: 716, categoryId: "indian-starters", name: "Channa Koliwada (Garlic Oil Fry)", price: "₹190" },
  { id: 717, categoryId: "indian-starters", name: "Mushroom Babycorn Tikka", price: "₹240" },
  { id: 718, categoryId: "indian-starters", name: "Babycorn Koliwada", price: "₹215" },
  { id: 719, categoryId: "indian-starters", name: "Cheese Pakoda", price: "₹240" },
  { id: 720, categoryId: "indian-starters", name: "Aloo Kurkure", price: "₹230" },

  // 8. Chinese Starters
  { id: 801, categoryId: "chinese-starters", name: "Idli Chilly", price: "₹170" },
  { id: 802, categoryId: "chinese-starters", name: "Crispy Potato", price: "₹200" },
  { id: 803, categoryId: "chinese-starters", name: "Veg. Spring Roll", price: "₹210" },
  { id: 804, categoryId: "chinese-starters", name: "Paneer Chilli", price: "₹260" },
  { id: 805, categoryId: "chinese-starters", name: "Sizzling Chilly", price: "₹260" },
  { id: 806, categoryId: "chinese-starters", name: "Dry Red Chilly", price: "₹260" },
  { id: 807, categoryId: "chinese-starters", name: "Paneer 65", price: "₹275" },
  { id: 808, categoryId: "chinese-starters", name: "Paneer Salt Pepper", price: "₹275" },
  { id: 809, categoryId: "chinese-starters", name: "Mushroom Babycorn SP", price: "₹240" },
  { id: 810, categoryId: "chinese-starters", name: "Veg. Crispy", price: "₹220" },
  { id: 811, categoryId: "chinese-starters", name: "Veg. Lollypop", price: "₹210" },
  { id: 812, categoryId: "chinese-starters", name: "Twin Pepper Potato", price: "₹230" },
  { id: 813, categoryId: "chinese-starters", name: "Crispy Chilly Potato", price: "₹230" },
  { id: 814, categoryId: "chinese-starters", name: "Veg Finger Chilly Dry/Shezwan", price: "₹220" },

  // 9. Indian Main Course
  { id: 901, categoryId: "indian-main-course", name: "Paneer Makhani", price: "₹240" },
  { id: 902, categoryId: "indian-main-course", name: "Muttar Hyderabadi", price: "₹240" },
  { id: 903, categoryId: "indian-main-course", name: "Paneer Adraki Masala", price: "₹240" },
  { id: 904, categoryId: "indian-main-course", name: "Paneer Kashmiri Curry", price: "₹270" },
  { id: 905, categoryId: "indian-main-course", name: "Paneer Corn Palak", price: "₹270" },
  { id: 906, categoryId: "indian-main-course", name: "Paneer Makhan Wala", price: "₹270" },
  { id: 907, categoryId: "indian-main-course", name: "Paneer Kolhapuri", price: "₹270" },
  { id: 908, categoryId: "indian-main-course", name: "Paneer Bhuna Masala", price: "₹270" },
  { id: 909, categoryId: "indian-main-course", name: "Paneer Burhji", price: "₹290" },
  { id: 910, categoryId: "indian-main-course", name: "Veg Kadai", price: "₹190" },
  { id: 911, categoryId: "indian-main-course", name: "Veg Handi", price: "₹190" },
  { id: 912, categoryId: "indian-main-course", name: "Veg Hyderabadi", price: "₹190" },
  { id: 913, categoryId: "indian-main-course", name: "Veg Kolhapuri", price: "₹190" },
  { id: 914, categoryId: "indian-main-course", name: "Dum Aloo Punjabi", price: "₹160" },
  { id: 915, categoryId: "indian-main-course", name: "Bhendi Masala", price: "₹150" },
  { id: 916, categoryId: "indian-main-course", name: "Aloo Palak", price: "₹150" },
  { id: 917, categoryId: "indian-main-course", name: "Channa Masala", price: "₹160" },
  { id: 918, categoryId: "indian-main-course", name: "Aloo Mutter", price: "₹160" },

  // 10. Indian Bread
  { id: 1001, categoryId: "indian-bread", name: "Roti", price: "₹20" },
  { id: 1002, categoryId: "indian-bread", name: "Butter Roti", price: "₹25" },
  { id: 1003, categoryId: "indian-bread", name: "Parotha", price: "₹35" },
  { id: 1004, categoryId: "indian-bread", name: "Butter Parotha", price: "₹40" },
  { id: 1005, categoryId: "indian-bread", name: "Naan", price: "₹35" },
  { id: 1006, categoryId: "indian-bread", name: "Butter Naan", price: "₹40" },
  { id: 1007, categoryId: "indian-bread", name: "Kulcha", price: "₹35" },
  { id: 1008, categoryId: "indian-bread", name: "Butter Kulcha", price: "₹40" },
  { id: 1009, categoryId: "indian-bread", name: "Garlic Naan", price: "₹60" },
  { id: 1010, categoryId: "indian-bread", name: "Butter Garlic Naan", price: "₹70" },
  { id: 1011, categoryId: "indian-bread", name: "Neer Dosa (1 Pcs)", price: "₹20" },

  // 11. Dal
  { id: 1101, categoryId: "dal", name: "Dal Tadka", price: "₹150" },
  { id: 1102, categoryId: "dal", name: "Dal Makhani", price: "₹190" },
  { id: 1103, categoryId: "dal", name: "Dal Kohlapuri", price: "₹160" },

  // 12. Basmati Rice & Biryani
  { id: 1201, categoryId: "rice-biryani", name: "Steam Rice", price: "₹120" },
  { id: 1202, categoryId: "rice-biryani", name: "Jeera Rice", price: "₹140" },
  { id: 1203, categoryId: "rice-biryani", name: "Veg Pulao/Green Peas Pulao", price: "₹190" },
  { id: 1204, categoryId: "rice-biryani", name: "Kashmiri Pulao", price: "₹240" },
  { id: 1205, categoryId: "rice-biryani", name: "Paneer Pulao", price: "₹240" },
  { id: 1206, categoryId: "rice-biryani", name: "Veg Dum Biryani", price: "₹220" },
  { id: 1207, categoryId: "rice-biryani", name: "Paneer Tikka Biryani", price: "₹260" },
  { id: 1208, categoryId: "rice-biryani", name: "Paneer Dum Biryani", price: "₹250" },
  { id: 1209, categoryId: "rice-biryani", name: "Veg Hyderabadi Dum Biryani", price: "₹220" },
  { id: 1210, categoryId: "rice-biryani", name: "Lemon Rice", price: "₹170" },
  { id: 1211, categoryId: "rice-biryani", name: "Curd Rice", price: "₹200" },
  { id: 1212, categoryId: "rice-biryani", name: "Dal Khichidi", price: "₹240", note: "* With Ghee: 50 Rs Extra" },

  // 13. Chinese Main Course
  { id: 1301, categoryId: "chinese-main-course", name: "Veg Manchurian", price: "₹190" },
  { id: 1302, categoryId: "chinese-main-course", name: "Cauliflower Manchurian", price: "₹190" },
  { id: 1303, categoryId: "chinese-main-course", name: "Paneer Manchurian", price: "₹230", note: "**with Chilly or Schezwan" },
  { id: 1304, categoryId: "chinese-main-course", name: "Mushroom Manchurian", price: "₹270", note: "**with Chilly or Schezwan" },
  { id: 1305, categoryId: "chinese-main-course", name: "Paneer/Baby Corn Mushroom", price: "₹270", note: "* Black Bean Spicy/ Chilly/ Hotgarlic/ Dry Red Chilly/ Schezwan/ Ginger Garlic" },
  { id: 1306, categoryId: "chinese-main-course", name: "Vegetable Balls or Cauliflower", price: "₹270", note: "* Black Bean Spicy/ Chilly/ Hotgarlic/ Dry Red Chilly/ Schezwan/ Ginger Garlic" },

  // 14. Chinese Rice/Noodles
  { id: 1401, categoryId: "chinese-rice-noodles", name: "Veg Hakka Noodles", price: "₹200" },
  { id: 1402, categoryId: "chinese-rice-noodles", name: "Veg Hakka Schezwan Noodles", price: "₹210" },
  { id: 1403, categoryId: "chinese-rice-noodles", name: "Hong Kong/Singapore Noodles", price: "₹220" },
  { id: 1404, categoryId: "chinese-rice-noodles", name: "Veg Fried Rice", price: "₹200" },
  { id: 1405, categoryId: "chinese-rice-noodles", name: "Schezwan Fried Rice", price: "₹210" },
  { id: 1406, categoryId: "chinese-rice-noodles", name: "Triple Schezwan Fried Rice", price: "₹240" },
  { id: 1407, categoryId: "chinese-rice-noodles", name: "Paneer Triple Schezwan FR", price: "₹300" },
  { id: 1408, categoryId: "chinese-rice-noodles", name: "Burnt Garlic Fried Rice", price: "₹220" },
  { id: 1409, categoryId: "chinese-rice-noodles", name: "Burnt Garlic Noodles", price: "₹220" },
  { id: 1410, categoryId: "chinese-rice-noodles", name: "Veg Sizzler", price: "₹290" },
  { id: 1411, categoryId: "chinese-rice-noodles", name: "Paneer Sizzler", price: "₹360" },

  // 15. Pizza
  { id: 1501, categoryId: "pizza", name: "Veg. Pizza", price: "₹180" },
  { id: 1502, categoryId: "pizza", name: "Cheese Pizza", price: "₹195" },
  { id: 1503, categoryId: "pizza", name: "Mushroom Pizza", price: "₹205" },
  { id: 1504, categoryId: "pizza", name: "Jain Pizza", price: "₹190" },
  { id: 1505, categoryId: "pizza", name: "Tandoori Paneer Tikka Pizza", price: "₹210" },

  // 16. Pasta
  { id: 1601, categoryId: "pasta", name: "Pasta (White, Green or Red Sauce)", price: "₹220" },

  // 17. Chole Bhature
  { id: 1701, categoryId: "chole-bhature", name: "Chole Bhature", price: "₹210" },
  { id: 1702, categoryId: "chole-bhature", name: "Bhature (Single)", price: "₹60" },

  // 18. Indian Shorba
  { id: 1801, categoryId: "indian-shorba", name: "Dal Soup", price: "₹125" },
  { id: 1802, categoryId: "indian-shorba", name: "Tomato Soup", price: "₹120" },
  { id: 1803, categoryId: "indian-shorba", name: "Palak Soup", price: "₹120" },

  // 19. Chinese Soups
  { id: 1901, categoryId: "chinese-soups", name: "Sweet Corn Soup", price: "₹120" },
  { id: 1902, categoryId: "chinese-soups", name: "Veg. Manchow Soup", price: "₹125" },
  { id: 1903, categoryId: "chinese-soups", name: "Hot & Sour Soup", price: "₹125" },
  { id: 1904, categoryId: "chinese-soups", name: "Lung Fung Soup", price: "₹175" },
  { id: 1905, categoryId: "chinese-soups", name: "Lemon Coriander Soup", price: "₹175" },
  { id: 1906, categoryId: "chinese-soups", name: "Tom Yum Soup", price: "₹175" },
  { id: 1907, categoryId: "chinese-soups", name: "Wonton Manchow Soup", price: "₹190" },
  { id: 1908, categoryId: "chinese-soups", name: "Veg Clear Soup", price: "₹140" },
  { id: 1909, categoryId: "chinese-soups", name: "Tomato Spinach Soup", price: "₹175" },

  // 20. Salad
  { id: 2001, categoryId: "salad", name: "Green Salad / Tomato Salad", price: "₹75" },
  { id: 2002, categoryId: "salad", name: "Russian Salad", price: "₹110" },
  { id: 2003, categoryId: "salad", name: "Cheese Pineapple Cherry Salad", price: "₹140" },
  { id: 2004, categoryId: "salad", name: "Waldroff (Apple & Walnut)", price: "₹140" },
  { id: 2005, categoryId: "salad", name: "Pasta White Sauce Salad", price: "₹140" },
  { id: 2006, categoryId: "salad", name: "Paper Pasta Salad", price: "₹120" },
  { id: 2007, categoryId: "salad", name: "Pudina Aloo Salad", price: "₹110" },
  { id: 2008, categoryId: "salad", name: "Corn Pineapple Salad", price: "₹130" },
  { id: 2009, categoryId: "salad", name: "Paneer Tikka Salad", price: "₹150" },
  { id: 2010, categoryId: "salad", name: "Chinese Bhel", price: "₹120" },

  // 21. Raita
  { id: 2101, categoryId: "raita", name: "Plain Curd", price: "₹70" },
  { id: 2102, categoryId: "raita", name: "Veg. Raita", price: "₹75" },
  { id: 2103, categoryId: "raita", name: "Pineapple Raita", price: "₹90" },
  { id: 2104, categoryId: "raita", name: "Palak Raita", price: "₹75" },
  { id: 2105, categoryId: "raita", name: "Tomato Raita", price: "₹75" },
  { id: 2106, categoryId: "raita", name: "Kheera Raita", price: "₹75" },
  { id: 2107, categoryId: "raita", name: "Aloo Boondi / Boondi Raita", price: "₹75" },
  { id: 2108, categoryId: "raita", name: "Aloo Pudina / Pudina Raita", price: "₹75" },

  // 22. Papad
  { id: 2201, categoryId: "papad", name: "Roasted Papad", price: "₹25" },
  { id: 2202, categoryId: "papad", name: "Fried Papad", price: "₹30" },
  { id: 2203, categoryId: "papad", name: "Masala Papad", price: "₹50" },
  { id: 2204, categoryId: "papad", name: "Khichiya Papad", price: "₹70" },
  { id: 2205, categoryId: "papad", name: "Masala Khichiya Papad", price: "₹95" },

  // 23. Upvas Special
  { id: 2301, categoryId: "upvas-special", name: "Sabudana Vada", price: "₹70" },
  { id: 2302, categoryId: "upvas-special", name: "Potato Chips", price: "₹90" },
  { id: 2303, categoryId: "upvas-special", name: "Sweet Kachori", price: "₹100" },

  // 24. Mocktail
  { id: 2401, categoryId: "mocktail", name: "Fruit Punch", price: "₹170" },
  { id: 2402, categoryId: "mocktail", name: "Mint Mojito", price: "₹140" },
  { id: 2403, categoryId: "mocktail", name: "Bluemoon", price: "₹140" },
  { id: 2404, categoryId: "mocktail", name: "Kiwi Energisers", price: "₹140" },
  { id: 2405, categoryId: "mocktail", name: "Thandai", price: "₹190" },

  // 25. Juices
  { id: 2501, categoryId: "juices", name: "Mosambi", price: "₹130" },
  { id: 2502, categoryId: "juices", name: "Orange", price: "₹130" },
  { id: 2503, categoryId: "juices", name: "Ganga Jamuna", price: "₹130" },
  { id: 2504, categoryId: "juices", name: "Watermelon", price: "₹130" },
  { id: 2505, categoryId: "juices", name: "Grape", price: "₹140" },
  { id: 2506, categoryId: "juices", name: "Mango Fresh", price: "₹190" },
  { id: 2507, categoryId: "juices", name: "Pineapple", price: "₹135" },
  { id: 2508, categoryId: "juices", name: "Apple", price: "₹160" },
  { id: 2509, categoryId: "juices", name: "Dalim", price: "₹150" },
  { id: 2510, categoryId: "juices", name: "Cocktail", price: "₹135" },

  // 26. Milkshakes
  { id: 2601, categoryId: "milkshakes", name: "Apple Milk Shake", price: "₹160" },
  { id: 2602, categoryId: "milkshakes", name: "Mango Milk Shake", price: "₹210" },
  { id: 2603, categoryId: "milkshakes", name: "Strawberry Milk Shake", price: "₹190" },
  { id: 2604, categoryId: "milkshakes", name: "Sitafal Milk Shake", price: "₹190" },
  { id: 2605, categoryId: "milkshakes", name: "Cold Coffee", price: "₹140" },
  { id: 2606, categoryId: "milkshakes", name: "Dry Fruit Milk Shake", price: "₹220" },
  { id: 2607, categoryId: "milkshakes", name: "Kaju Milk Shake", price: "₹220" },
  { id: 2608, categoryId: "milkshakes", name: "Kaju Anjir Shake", price: "₹220" },
  { id: 2609, categoryId: "milkshakes", name: "Chocolate Milk Shake", price: "₹180" },

  // 27. Hot Beverages
  { id: 2701, categoryId: "hot-beverages", name: "Tea", price: "₹20" },
  { id: 2702, categoryId: "hot-beverages", name: "Jaggery Tea", price: "₹30" },
  { id: 2703, categoryId: "hot-beverages", name: "Nes-Coffee", price: "₹40" },
  { id: 2704, categoryId: "hot-beverages", name: "Filter Coffee", price: "₹40" },
  { id: 2705, categoryId: "hot-beverages", name: "Bournvita", price: "₹60" },
  { id: 2706, categoryId: "hot-beverages", name: "Sugar Milk", price: "₹45" },

  // 28. Chilled Beverages
  { id: 2801, categoryId: "chilled-beverages", name: "Jal Jeera", price: "₹55" },
  { id: 2802, categoryId: "chilled-beverages", name: "Fresh Lime Water", price: "₹55" },
  { id: 2803, categoryId: "chilled-beverages", name: "Chaas", price: "₹55" },
  { id: 2804, categoryId: "chilled-beverages", name: "Sikander Sharbat", price: "₹65" },
  { id: 2805, categoryId: "chilled-beverages", name: "Goli Soda", price: "₹45", note: "* Available in Red Guava, Blue Berry, Jeera, Orange, Rose, Litchi and Lime flavours" },
  { id: 2806, categoryId: "chilled-beverages", name: "Jal Jeera Soda", price: "₹85" },
  { id: 2807, categoryId: "chilled-beverages", name: "Sweet Lassi", price: "₹70" },
  { id: 2808, categoryId: "chilled-beverages", name: "Fresh Lime Soda", price: "₹65" },
  { id: 2809, categoryId: "chilled-beverages", name: "Mineral Water", price: "₹25" },
  { id: 2810, categoryId: "chilled-beverages", name: "Cold Drink 300ml", price: "₹30" },
  { id: 2811, categoryId: "chilled-beverages", name: "Cold Drink 500 ml", price: "₹50" },

  // 29. Sweets
  { id: 2901, categoryId: "sweets", name: "Gajar Halwa", price: "₹140" },
  { id: 2902, categoryId: "sweets", name: "Chikoo Halwa", price: "₹150" },
  { id: 2903, categoryId: "sweets", name: "Angoori Rabdi", price: "₹160" },
  { id: 2904, categoryId: "sweets", name: "Jalebi Rabdi", price: "₹160" },
  { id: 2905, categoryId: "sweets", name: "Fruit Salad", price: "₹150" },
  { id: 2906, categoryId: "sweets", name: "Fruit Salad With Icecream", price: "₹165" },

  // 30. Desserts
  { id: 3001, categoryId: "desserts", name: "Falooda", price: "₹160" },
  { id: 3002, categoryId: "desserts", name: "Kesar Falooda", price: "₹180" },
  { id: 3003, categoryId: "desserts", name: "Kulfi Falooda", price: "₹190" },
  { id: 3004, categoryId: "desserts", name: "Gadbad", price: "₹190" },
  { id: 3005, categoryId: "desserts", name: "Sizzling Hot Brownie", price: "₹240" },
  { id: 3006, categoryId: "desserts", name: "Triple Sundae", price: "₹210" }
];