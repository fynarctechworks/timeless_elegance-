import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

// Import product images
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';
import ivoryWhiteLehenga from '../assets/Ivory White Zardozi Lehenga.jpg';
import softPinkFloral from '../assets/Soft Pink Floral Organza.jpg';
import mauveVelvetBridal from '../assets/Mauve Velvet Bridal Set.jpg';
import mintGreenGeorgette from '../assets/Mint Green Georgette.jpg';
import coralPinkBandhani from '../assets/Coral Pink Bandhani.jpg';

function BridalLehengas() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Crimson Royale Bridal",
      category: "Pure Velvet",
      price: "₹3,50,000",
      image: goldLehenga,
      badge: "Bridal Collection"
    },
    {
      id: 2,
      name: "Pearl Ivory Lehenga",
      category: "Silk & Zardozi",
      price: "₹2,95,000",
      image: ivoryWhiteLehenga,
      badge: null
    },
    {
      id: 3,
      name: "Rose Gold Heritage Set",
      category: "Embroidered Lehenga",
      price: "₹4,25,000",
      image: softPinkFloral,
      badge: "New Arrival"
    },
    {
      id: 4,
      name: "Majestic Burgundy Bridal",
      category: "Velvet & Gold Thread",
      price: "₹3,80,000",
      image: mauveVelvetBridal,
      badge: null
    },
    {
      id: 5,
      name: "Golden Dream Lehenga",
      category: "Pure Silk Zardozi",
      price: "₹5,15,000",
      image: mintGreenGeorgette,
      badge: null
    },
    {
      id: 6,
      name: "Blush Pink Royal Set",
      category: "Silk & Pearl Work",
      price: "₹2,75,000",
      image: coralPinkBandhani,
      badge: null
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e1d5] dark:border-[#3d2a2d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center flex-1">
              <Link to="/">
                <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
              <Link to="/sarees" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Sarees
              </Link>
              <Link to="/lehengas" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Lehengas
              </Link>
              <Link to="/indo-western" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Indo-Western
              </Link>
              <Link to="/bridal-edit" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Bridal Edit
              </Link>
            </nav>

            <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
              <div className="hidden sm:flex gap-3 sm:gap-4">
                <Link to="/wishlist" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
                </Link>
              </div>
              <button 
                className="lg:hidden text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </header>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5e1d5] dark:border-[#3d2a2d] bg-background-light dark:bg-background-dark">
            <nav className="flex flex-col px-4 py-6 space-y-4">
              <Link 
                to="/sarees" 
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sarees
              </Link>
              <Link 
                to="/lehengas" 
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lehengas
              </Link>
              <Link 
                to="/indo-western" 
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Indo-Western
              </Link>
              <Link 
                to="/bridal-edit" 
                className="text-primary text-sm font-medium uppercase tracking-widest border-b-2 border-primary pb-2 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bridal Edit
              </Link>
              <div className="flex sm:hidden gap-6 pt-4 border-t border-[#e5e1d5]">
                <Link to="/wishlist" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] overflow-hidden">
          <img 
            alt="Bridal Lehenga Collection" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsor9LzuvD86hszCK_iZw2c2t5v2H2f4cQ3kXV-aJEMO3hsEKHwTp0exs3IG30HCCf9e8gzkL0_B61SotmOI5NUxoZn1cUDyATIdOXHj20uxDFwfdDDagekDF7jyYHVTZ5y1ERnNRefsU6s24BXzGShe82GhXTMrTeCnRd29UTXXvBdB14qUvHXcYV6SckJ1jLkqY7AytzlFCEhSUoU4IC1GP8u-sB4ayAptHRBGRvyenalbTb5ngjKRBWWTx_wOiPlKmtYGgH_yZN"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#221013]/80 via-[#221013]/50 sm:via-[#c5a059]/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 w-full">
              <div className="max-w-2xl text-white space-y-3 sm:space-y-4">
                <nav className="flex items-center gap-2 text-[#c5a059] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                  <span className="text-white/60">Bridal Lehengas</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight">Bridal Lehengas</h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light italic max-w-xl">
                  Regal silhouettes crafted for your most precious moments. Each piece tells a story of timeless elegance and royal heritage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section with Filters */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden w-full mb-6 flex items-center justify-center gap-2 border-2 border-[#2d1618] py-3 px-4 text-sm font-bold uppercase tracking-widest hover:bg-[#2d1618] hover:text-white transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">tune</span>
            {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <aside className={`w-full lg:w-64 flex-shrink-0 space-y-8 lg:space-y-10 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Color Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Filter by Color</h3>
                <div className="flex flex-col gap-3">
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#8B1538] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Burgundy Red</span>
                    <span className="ml-auto text-xs text-gray-400">(18)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#c5a059] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Gold</span>
                    <span className="ml-auto text-xs text-gray-400">(22)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#f5e6d3] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Ivory</span>
                    <span className="ml-auto text-xs text-gray-400">(14)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#d4a5a5] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Blush Pink</span>
                    <span className="ml-auto text-xs text-gray-400">(10)</span>
                  </button>
                </div>
              </div>

              {/* Work Type Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Work Type</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Zardozi Embroidery</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Pearl & Stone Work</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Velvet Embroidery</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Price Range</h3>
                <div className="space-y-4">
                  <input 
                    className="w-full h-1 rounded-lg appearance-none cursor-pointer" 
                    style={{ background: 'rgba(197, 160, 89, 0.3)', accentColor: '#c5a059' }}
                    max="600000" 
                    min="100000" 
                    type="range"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-500">
                    <span>₹1,00,000</span>
                    <span>₹6,00,000+</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full border border-[#2d1618] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#2d1618] hover:text-white transition-all cursor-pointer">
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                <p className="text-xs sm:text-sm text-gray-500">
                  Showing <span className="font-bold" style={{ color: '#2d1618' }}>36</span> Bridal Lehengas
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-gray-400">Sort By:</span>
                  <select className="border-none bg-transparent text-xs sm:text-sm font-bold focus:ring-0 cursor-pointer">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {products.map((product) => (
                  <div key={product.id} className="group silk-texture border border-[#e5e1d5] bg-white">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={product.image}
                      />
                      {product.badge && (
                        <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-[9px] sm:text-[10px] font-bold uppercase px-2 sm:px-3 py-1 tracking-widest ${product.badge === 'Bridal Collection' ? 'bg-[#8B1538]' : 'bg-[#c5a059]'}`}>
                          {product.badge}
                        </div>
                      )}
                      <button className="absolute top-3 right-3 sm:top-4 sm:right-4 size-8 sm:size-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" style={{ color: '#2d1618' }}>
                        <span className="material-symbols-outlined text-lg sm:text-xl">favorite</span>
                      </button>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6 text-center space-y-1.5 sm:space-y-2">
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#c5a059] font-bold truncate">{product.category}</p>
                      <h4 className="font-serif text-base sm:text-lg font-bold truncate" style={{ color: '#2d1618' }}>{product.name}</h4>
                      <p className="font-bold tracking-wider text-sm sm:text-base" style={{ color: '#8B1538' }}>{product.price}</p>
                      <div className="pt-3 sm:pt-4 flex gap-2">
                        <button className="flex-1 text-white py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-[#c5a059] transition-colors cursor-pointer" style={{ backgroundColor: '#2d1618' }}>
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-lg sm:text-xl">chevron_left</span>
                </button>
                <button className="size-9 sm:size-10 flex items-center justify-center text-white text-xs sm:text-sm font-bold cursor-pointer" style={{ backgroundColor: '#2d1618' }}>1</button>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-xs sm:text-sm font-bold hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">2</button>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-xs sm:text-sm font-bold hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">3</button>
                <span className="text-gray-400 text-sm">...</span>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-lg sm:text-xl">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Story Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 text-center relative overflow-hidden" style={{ backgroundColor: '#221013' }}>
          <div className="absolute inset-0 silk-texture opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <span className="text-[#c5a059] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-bold">The Bridal Collection</span>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold italic leading-tight">Where Dreams Meet Heritage</h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Our bridal lehengas are masterpieces of traditional craftsmanship, where master artisans weave dreams into reality. Each ensemble takes months of dedication to create, ensuring you look nothing short of royalty on your special day.
            </p>
            <div className="w-16 h-1 bg-[#c5a059] mx-auto"></div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-[#181112] text-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 sm:col-span-2">
              <div className="mb-4">
                <Link to="/">
                  <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
                </Link>
              </div>
              <p className="text-white/60 max-w-sm mb-6 sm:mb-8 leading-relaxed sm:leading-loose text-sm sm:text-base">
                Redefining luxury ethnic wear with artisanal craftsmanship and contemporary designs. Every piece is a tribute to India's timeless heritage.
              </p>
              <div className="flex gap-4">
                <a className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">camera</span>
                </a>
                <a className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 text-gold">Shop</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 text-gold">Experience</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Bespoke Couture</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase text-center sm:text-left">
              © 2024 Timeless Elegance Boutique. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              <a className="hover:text-white transition-colors" href="#">Terms</a>
              <a className="hover:text-white transition-colors" href="#">Privacy</a>
              <a className="hover:text-white transition-colors" href="#">Shipping</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default BridalLehengas;
