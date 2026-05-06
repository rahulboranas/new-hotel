import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaGoogle } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-50 select-none dark:bg-gray-900 pt-12 pb-6 mt-10 border-t border-slate-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content - 3 Columns ke liye Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-b border-slate-200 dark:border-gray-800 pb-8">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-wider">
              राधाकृष्ण
            </h3>
            {/* Pure Veg Badge - Green hi rakha hai kyunki veg ka sign green hota hai */}
            <span className="text-sm font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
              Pure Veg
            </span>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-2 flex flex-col items-center md:items-start">
              <p className="flex items-start gap-2 text-left">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-blue-500" />
                <span>Peter Building, Near Sai Baba Mandir, Veer Savarkar Road, Virar East - 401305</span>
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="flex-shrink-0 text-blue-500" />
                <span>SUN-MON, 7 a.m. to 11 p.m.</span>
              </p>
            </div>
          </div>

          {/* Column 2: Order & Delivery (Saare Numbers Yahan Hain) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
              Order Now
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3 flex flex-col items-center md:items-start">
              
              {/* Call Numbers (Teeno numbers add kiye hain) */}
              <div className="flex items-start gap-2 text-left">
                <FaPhoneAlt className="mt-1 flex-shrink-0 text-blue-500" />
                <div className="flex flex-col">
                  <span>9867 278 872</span>
                  <span>9867 436 678</span>
                  <span>9892 413 055</span>
                </div>
              </div>

              {/* WhatsApp Numbers */}
              <div className="flex items-start gap-2 text-left">
                <FaWhatsapp className="mt-1 flex-shrink-0 text-green-500 text-lg" />
                <div className="flex flex-col">
                  <span>9819 311 345</span>
                  <span>9819 341 345</span>
                </div>
              </div>

              {/* Email */}
              <p className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0 text-blue-500" />
                <span>service@radhakrishna.restaurant</span>
              </p>
              
              <span className="mt-2 inline-block font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 px-3 py-1 rounded-full text-xs">
                🏍️ FREE Home Delivery across Virar
              </span>
            </div>
          </div>

          {/* Column 3: Special Services */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">
              Our Services
            </h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
              <div className="border-l-2 border-blue-500 pl-3 text-left">
                <p className="font-semibold text-gray-800 dark:text-gray-200">Unlimited Buffet</p>
                <p className="text-xs mt-1">Lunch (12-3 PM): ₹249/-</p>
                <p className="text-xs">Dinner (6:30-10:30 PM): ₹299/-</p>
              </div>
              <ul className="space-y-1 text-left list-disc list-inside text-xs">
                <li>Catering & Party Hall Booking</li>
                <li>Customized Birthday Cakes</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Socials & Disclaimer */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <FaGoogle className="text-lg" /> Google Review
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <FaInstagram className="text-lg" /> Instagram
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>Prices are mentioned in INR. Taxes as applicable.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;