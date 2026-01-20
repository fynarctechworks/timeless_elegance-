import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

// Import product images
import crimsonRedSaree from '../assets/Crimson Red Silk Saree.jpg';
import royalBlueKanjeevaram from '../assets/Royal Blue Kanjeevaram.jpg';
import softPinkFloral from '../assets/Soft Pink Floral Organza.jpg';
import emeraldBanarasi from '../assets/Emerald Banarasi Silk.jpg';
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';

function Wishlist() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [wishlistItems, setWishlistItems] = useState([]);

  const filters = [
    { id: 'all', label: 'All Items' },
    { id: 'sarees', label: 'Sarees' },
    { id: 'lehengas', label: 'Lehengas' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const removeFromWishlist = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const moveToCart = (item) => {
    // Add logic to move to cart
    console.log('Moving to cart:', item);
    removeFromWishlist(item.id);
  };

  const filteredItems = activeFilter === 'all' 
    ? wishlistItems 
    : wishlistItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e1d5] dark:border-[#3d2a2d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            {/* Brand - Left */}
            <div className="flex items-center flex-1">
              <Link to="/">
                <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto" />
              </Link>
            </div>

            {/* Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
              <Link to="/sarees" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors">
                Sarees
              </Link>
              <Link to="/lehengas" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors">
                Lehengas
              </Link>
              <Link to="/indo-western" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors">
                Indo-Western
              </Link>
              <Link to="/bridal-edit" className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors">
                Bridal Edit
              </Link>
            </nav>

            {/* Icons - Right */}
            <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
              <div className="hidden sm:flex gap-3 sm:gap-4">
                <Link to="/wishlist" className="relative text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">favorite</span>
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#c5a059] text-white text-[10px] size-4 flex items-center justify-center rounded-full">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
                </Link>
              </div>
              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#181112] dark:text-white hover:text-[#c5a059] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </header>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-md border-b border-[#e5e1d5] dark:border-[#3d2a2d] shadow-lg">
            <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
              <Link 
                to="/sarees" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Sarees
              </Link>
              <Link 
                to="/lehengas" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Lehengas
              </Link>
              <Link 
                to="/indo-western" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Indo-Western
              </Link>
              <Link 
                to="/bridal-edit" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-[#c5a059] transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Bridal Edit
              </Link>
              <div className="flex gap-6 py-2 justify-start sm:hidden">
                <Link to="/wishlist" className="relative text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#c5a059] text-white text-[10px] size-4 flex items-center justify-center rounded-full">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-[#c5a059] transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <main className="w-full bg-[#faf8f6] dark:bg-background-dark min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
          {/* Page Heading */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase mb-2 text-[#181112] dark:text-white">My Wishlist</h1>
            <p className="text-[10px] sm:text-xs text-[#896168] dark:text-white/40 uppercase tracking-widest">Luxury Ethnic Couture Curated For You</p>
          </div>

          {/* Filter Chips */}
          <div className="flex justify-center gap-3 mb-8 sm:mb-10 overflow-x-auto pb-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'border border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]'
                    : 'border border-[#e6dbdd] dark:border-white/10 hover:border-[#c5a059] text-[#896168] dark:text-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Wishlist Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-[#896168]/20 mb-4">favorite_border</span>
              <h2 className="text-xl font-bold mb-4 text-[#181112] dark:text-white">Your wishlist is empty</h2>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#c5a059] hover:gap-4 transition-all"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="group flex flex-col gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-red-500 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-1 px-1">
                    <h3 className="text-sm sm:text-base font-medium text-[#181112] dark:text-white">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-[#c5a059] font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                      <span className="text-[10px] uppercase tracking-widest text-[#896168] dark:text-gray-400">
                        {item.stock}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => moveToCart(item)}
                    className="w-full py-3 bg-[#c5a059] hover:bg-[#b8944d] text-white font-bold rounded-lg text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                    Move to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-[#181112] text-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 sm:col-span-2">
              <div className="mb-3 sm:mb-4">
                <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto" />
              </div>
              <p className="text-white/60 max-w-sm mb-6 sm:mb-8 leading-relaxed sm:leading-loose text-sm sm:text-base">
                Redefining luxury ethnic wear with artisanal craftsmanship and contemporary designs. Every piece is a tribute to India's timeless heritage.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c5a059] hover:border-[#c5a059] transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">share</span>
                </a>
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c5a059] hover:border-[#c5a059] transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">camera</span>
                </a>
                <a className="size-9 sm:size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#c5a059] hover:border-[#c5a059] transition-all" href="#">
                  <span className="material-symbols-outlined text-lg sm:text-xl">public</span>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-[#c5a059]">Shop</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-[#c5a059]">Experience</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Bespoke Couture</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-white/40 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-widest uppercase text-center md:text-left">
              © 2024 Timeless Elegance Boutique. All Rights Reserved.
            </p>
            <div className="flex gap-6 sm:gap-8 text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
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

export default Wishlist;
