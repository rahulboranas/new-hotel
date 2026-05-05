function Footer() {
  return (
    <footer className="bg-slate-50 py-8 text-center mt-10 border-t border-slate-200">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">
        
        {/* Hotel Ka Naam - Ab Dark Gray/Black mein */}
        <h3 className="text-2xl font-black text-gray-900 tracking-wider uppercase">
          Local Kitchen
        </h3>
        
        {/* Tagline */}
        <p className="text-sm text-gray-600 italic max-w-sm">
          "Khaana har jagah mil jayega, par quality ke sath sirf hamare yaha"
        </p>
        
      </div>
    </footer>
  )
}

export default Footer