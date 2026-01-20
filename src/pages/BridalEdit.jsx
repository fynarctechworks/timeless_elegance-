import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

// Import product images
import ivoryWhiteLehenga from '../assets/Ivory White Zardozi Lehenga.jpg';
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';
import mauveVelvetBridal from '../assets/Mauve Velvet Bridal Set.jpg';
import crimsonRedSaree from '../assets/Crimson Red Silk Saree.jpg';
import champagneGoldAnarkali from '../assets/Champagne Gold Anarkali.jpg';
import peacockBlueKanjivaram from '../assets/Peacock Blue Kanjivaram.jpg';
import royalBlueKanjeevaram from '../assets/Royal Blue Kanjeevaram.jpg';
import softPinkFloral from '../assets/Soft Pink Floral Organza.jpg';
import emeraldBanarasi from '../assets/Emerald Banarasi Silk.jpg';
import burgundyChanderi from '../assets/Burgundy Chanderi Silk.jpg';
import coralPinkBandhani from '../assets/Coral Pink Bandhani.jpg';
import mintGreenGeorgette from '../assets/Mint Green Georgette.jpg';

function BridalEdit() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: "Royal Zardozi Lehenga",
      category: "Ivory White with Gold Embroidery",
      price: "₹2,85,000",
      image: ivoryWhiteLehenga,
      secondaryImage: goldLehenga,
      badge: "Premium"
    },
    {
      id: 2,
      name: "Regal Gold Bridal Set",
      category: "Heavy Embroidered Lehenga",
      price: "₹3,45,000",
      image: goldLehenga,
      secondaryImage: mauveVelvetBridal,
      badge: "Exclusive"
    },
    {
      id: 3,
      name: "Velvet Bridal Ensemble",
      category: "Mauve with Mirror Work",
      price: "₹2,95,000",
      image: mauveVelvetBridal,
      secondaryImage: crimsonRedSaree,
      badge: null
    },
    {
      id: 4,
      name: "Crimson Bridal Saree",
      category: "Pure Silk with Zari Border",
      price: "₹1,85,000",
      image: crimsonRedSaree,
      secondaryImage: champagneGoldAnarkali,
      badge: "Bestseller",
      badgePosition: "right"
    },
    {
      id: 5,
      name: "Peacock Silk Wedding Saree",
      category: "Kanjivaram with Temple Borders",
      price: "₹2,25,000",
      image: peacockBlueKanjivaram,
      secondaryImage: royalBlueKanjeevaram,
      badge: null
    },
    {
      id: 6,
      name: "Royal Blue Bridal Silk",
      category: "Kanjeevaram Traditional Design",
      price: "₹2,15,000",
      image: royalBlueKanjeevaram,
      secondaryImage: softPinkFloral,
      badge: "New"
    }
  ];

  return (
    <>
      {/* Header - Same as Home */}
      <div className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-sm border-b border-[#3d2a2d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center flex-1">
              <Link to="/">
                <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto" />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
              <Link to="/sarees" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Sarees
              </Link>
              <Link to="/lehengas" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Lehengas
              </Link>
              <Link to="/indo-western" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Indo-Western
              </Link>
              <Link to="/bridal-edit" className="text-white text-sm font-medium uppercase tracking-widest text-primary border-b-2 border-primary pb-1 transition-colors">
                Bridal Edit
              </Link>
            </nav>

            <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
              <div className="hidden sm:flex gap-3 sm:gap-4">
                <Link to="/wishlist" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
                </Link>
              </div>
              <button 
                className="lg:hidden text-white hover:text-primary transition-colors cursor-pointer"
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
          <div className="lg:hidden border-t border-[#3d2a2d] bg-background-dark">
            <nav className="flex flex-col px-4 py-6 space-y-4">
              <Link 
                to="/sarees" 
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sarees
              </Link>
              <Link 
                to="/lehengas" 
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lehengas
              </Link>
              <Link 
                to="/indo-western" 
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2"
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
                <Link to="/wishlist" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-white hover:text-primary transition-colors cursor-pointer">
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
            alt="Bridal Edit Collection" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1920&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#221013]/80 via-[#221013]/50 sm:via-[#c5a059]/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 w-full">
              <div className="max-w-2xl text-white space-y-3 sm:space-y-4">
                <nav className="flex items-center gap-2 text-[#c5a059] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                  <span className="text-white/60">Bridal Edit</span>
                </nav>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight">The Bridal Edit</h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light italic max-w-xl">
                  Exquisite bridal ensembles crafted for your most treasured moments. Begin your forever in timeless elegance.
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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Filters */}
            <aside className={`w-full lg:w-64 flex-shrink-0 space-y-8 lg:space-y-10 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
              {/* Color Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Filter by Color</h3>
                <div className="flex flex-col gap-3">
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#FFFFFF] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Ivory</span>
                    <span className="ml-auto text-xs text-gray-400">(14)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#FFD700] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Gold</span>
                    <span className="ml-auto text-xs text-gray-400">(18)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#DC143C] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Red</span>
                    <span className="ml-auto text-xs text-gray-400">(16)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#E6C8B4] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Rose Gold</span>
                    <span className="ml-auto text-xs text-gray-400">(09)</span>
                  </button>
                  <button className="group flex items-center gap-2 w-full text-sm cursor-pointer">
                    <span className="size-4 bg-[#4A0E0E] border border-black/10 rounded-full"></span>
                    <span className="group-hover:text-[#8B1538] transition-colors">Maroon</span>
                    <span className="ml-auto text-xs text-gray-400">(11)</span>
                  </button>
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Occasion</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Wedding</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Reception</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Engagement</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Mehendi</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Sangeet</span>
                  </label>
                </div>
              </div>

              {/* Work Type Filter */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-[#c5a059]/30 pb-4" style={{ color: '#2d1618' }}>Embellishment</h3>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Zardozi</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Mirror Work</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Sequins</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Thread Work</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="rounded border-gray-300 size-4 cursor-pointer" type="checkbox" style={{ accentColor: '#c5a059' }} />
                    <span className="text-sm group-hover:text-[#8B1538] transition-colors">Stone Work</span>
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
                    max="500000" 
                    min="100000" 
                    type="range"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-500">
                    <span>₹1,00,000</span>
                    <span>₹5,00,000+</span>
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-bold" style={{ color: '#2d1618' }}>42</span> Bridal Ensembles
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-gray-400">Sort By:</span>
                  <select className="border-none bg-transparent text-sm font-bold focus:ring-0 cursor-pointer">
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
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={product.image}
                      />
                      <img
                        alt={`${product.name} detail`}
                        className="secondary-image absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                        src={product.secondaryImage}
                      />
                      {product.badge && (
                        <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest ${product.badge === 'Premium' || product.badge === 'Exclusive' ? 'bg-[#8B1538]' : product.badge === 'New' ? 'bg-[#c5a059]' : 'bg-amber-600'}`}>
                          {product.badge}
                        </div>
                      )}
                      <button className="absolute top-3 right-3 sm:top-4 sm:right-4 size-8 sm:size-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" style={{ color: '#2d1618' }}>
                        <span className="material-symbols-outlined text-lg sm:text-xl">favorite</span>
                      </button>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-4 sm:p-5 lg:p-6 text-center space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-bold truncate">{product.category}</p>
                      <h4 className="font-serif text-base sm:text-lg font-bold truncate" style={{ color: '#2d1618' }}>{product.name}</h4>
                      <p className="text-sm sm:text-base font-bold tracking-wider" style={{ color: '#8B1538' }}>{product.price}</p>
                      <div className="pt-4 flex gap-2">
                        <button className="flex-1 text-white py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#c5a059] transition-colors cursor-pointer" style={{ backgroundColor: '#2d1618' }}>
                          Book Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button className="size-9 sm:size-10 flex items-center justify-center text-white text-sm font-bold cursor-pointer" style={{ backgroundColor: '#2d1618' }}>1</button>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-sm font-bold hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">2</button>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-sm font-bold hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">3</button>
                <span className="text-gray-400 text-sm">...</span>
                <button className="size-9 sm:size-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:border-[#c5a059] hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      {/* Footer - Same as Home */}
      <footer className="bg-[#181112] text-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 sm:col-span-2">
              <div className="mb-4">
                <Link to="/">
                  <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
                </Link>
              </div>
              <p className="text-white/60 text-sm sm:text-base max-w-sm mb-6 sm:mb-8 leading-relaxed sm:leading-loose">
                Redefining luxury ethnic wear with artisanal craftsmanship and contemporary designs. Every piece is a tribute to India's timeless heritage.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">share</span>
                </a>
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">camera</span>
                </a>
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">public</span>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 text-gold">Shop</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 text-gold">Experience</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Bespoke Couture</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase text-center md:text-left">
              © 2024 Timeless Elegance Boutique. All Rights Reserved.
            </p>
            <div className="flex gap-6 sm:gap-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              <a className="hover:text-white transition-colors" href="#">Terms</a>
              <a className="hover:text-white transition-colors" href="#">Privacy</a>
              <a className="hover:text-white transition-colors" href="#">Shipping</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .product-card:hover .secondary-image {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

export default BridalEdit;
