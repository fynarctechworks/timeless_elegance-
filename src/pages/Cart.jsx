import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

// Import product images (using existing assets as placeholders)
import crimsonRedSaree from '../assets/Crimson Red Silk Saree.jpg';
import emeraldBanarasi from '../assets/Emerald Banarasi Silk.jpg';
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';
import softPinkFloral from '../assets/Soft Pink Floral Organza.jpg';
import ivoryWhiteLehenga from '../assets/Ivory White Zardozi Lehenga.jpg';
import mauveVelvetBridal from '../assets/Mauve Velvet Bridal Set.jpg';

function Cart() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getCartCount } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const recommendedProducts = [
    {
      id: 1,
      name: 'Kundan Heritage Choker',
      description: '24K Gold Plated with Rubies',
      price: 12500,
      image: goldLehenga
    },
    {
      id: 2,
      name: 'Pearl Drop Jhumkas',
      description: 'Temple Jewelry Collection',
      price: 8900,
      image: softPinkFloral
    },
    {
      id: 3,
      name: 'Vibrant Emerald Bangles',
      description: 'Set of 4 Handcrafted',
      price: 15200,
      image: ivoryWhiteLehenga
    },
    {
      id: 4,
      name: 'Sparkling Zirconia Anklet',
      description: 'Sterling Silver Base',
      price: 5500,
      image: mauveVelvetBridal
    }
  ];

  // Remove local updateQuantity function and use the one from context
  // Remove local removeItem function and use removeFromCart from context

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = 0;
  const total = subtotal + shipping + tax;

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

            {/* Icons - Right */}
            <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
              <div className="hidden sm:flex gap-3 sm:gap-4">
                <Link to="/wishlist" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="relative text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] size-4 flex items-center justify-center rounded-full">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
                </Link>
              </div>
              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer"
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
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Sarees
              </Link>
              <Link 
                to="/lehengas" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Lehengas
              </Link>
              <Link 
                to="/indo-western" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Indo-Western
              </Link>
              <Link 
                to="/bridal-edit" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#e5e1d5] dark:border-[#3d2a2d]"
              >
                Bridal Edit
              </Link>
              <div className="flex gap-6 py-2 justify-start sm:hidden">
                <Link to="/wishlist" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="relative text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] size-4 flex items-center justify-center rounded-full">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <main className="w-full bg-[#faf8f6] dark:bg-background-dark min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
          {/* Page Header */}
          <div className="mb-8 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase mb-2 text-[#181112] dark:text-white">My Shopping Bag</h1>
            <p className="text-[10px] sm:text-xs text-[#896168] dark:text-white/40 uppercase tracking-widest">Luxury Ethnic Couture Curated For You</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-[#896168]/20 mb-4">shopping_bag</span>
              <h2 className="text-xl font-bold mb-4 text-[#181112] dark:text-white">Your cart is empty</h2>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#c5a059] hover:gap-4 transition-all"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white dark:bg-white/5 rounded-lg p-4 sm:p-6 shadow-sm">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="w-20 sm:w-24 lg:w-28 aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 flex-shrink-0">
                        <img 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          src={item.image}
                        />
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start gap-2 mb-3">
                          <div>
                            <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#181112] dark:text-white">{item.name}</h3>
                            <p className="text-xs text-[#896168] dark:text-white/40 mt-1">{item.description}</p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#896168] hover:text-[#c5a059] transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-xl">close</span>
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#896168]/60 block">
                              Quantity
                            </label>
                            <div className="flex items-center border border-[#e6dbdd] dark:border-white/20 rounded overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-3 py-2 hover:bg-neutral-50 dark:hover:bg-white/5 cursor-pointer text-[#181112] dark:text-white"
                              >
                                -
                              </button>
                              <span className="flex-1 text-center text-sm font-medium text-[#181112] dark:text-white px-4">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-3 py-2 hover:bg-neutral-50 dark:hover:bg-white/5 cursor-pointer text-[#181112] dark:text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-[#e6dbdd] dark:border-white/10">
                          <p className="text-lg sm:text-xl font-bold text-[#5d0e1b] dark:text-[#c5a059]">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#c5a059] hover:gap-4 transition-all"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <aside className="w-full lg:w-[400px]">
                <div className="bg-white dark:bg-white/5 border border-[#e6dbdd] dark:border-white/10 p-6 sm:p-8 rounded-lg shadow-sm sticky top-28">
                  <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest mb-6 border-b border-[#e6dbdd] dark:border-white/10 pb-4 text-[#181112] dark:text-white">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#896168] dark:text-white/60">Subtotal ({cartItems.length} items)</span>
                      <span className="font-bold text-[#181112] dark:text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#896168] dark:text-white/60">Estimated Shipping</span>
                      <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#896168] dark:text-white/60">Tax (GST)</span>
                      <span className="font-bold text-[#181112] dark:text-white">₹{tax.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#896168] mb-3">
                      Promo Code
                    </label>
                    <div className="flex gap-2">
                      <input 
                        className="flex-1 bg-white dark:bg-white/5 border border-[#e6dbdd] dark:border-white/20 focus:ring-[#c5a059] focus:border-[#c5a059] text-sm uppercase tracking-widest rounded px-3 py-2.5 text-[#181112] dark:text-white placeholder:text-[#896168]/50" 
                        placeholder="PROMO CODE" 
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <button className="bg-[#181112] dark:bg-[#c5a059] text-white text-[10px] font-bold uppercase px-5 rounded tracking-widest hover:bg-black dark:hover:bg-[#b8944d] transition-colors cursor-pointer">
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-[#e6dbdd] dark:border-white/10 pt-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">Grand Total</span>
                      <span className="text-2xl font-extrabold text-[#5d0e1b] dark:text-[#c5a059]">
                        ₹{total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/checkout"
                    className="w-full bg-[#5d0e1b] hover:bg-black dark:bg-[#c5a059] dark:hover:bg-[#b8944d] text-white py-4 rounded font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-lg mb-4 cursor-pointer block text-center"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-[#896168] dark:text-white/40">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout Powered By Aura</span>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {/* Complete The Look */}
          <section className="mt-16 sm:mt-20">
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-light uppercase tracking-[0.2em] text-[#181112] dark:text-white">Complete The Look</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src={product.image}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-tight text-[#181112] dark:text-white mb-1">{product.name}</h3>
                    <p className="text-[10px] sm:text-xs text-[#896168] dark:text-white/40 mb-2">{product.description}</p>
                    <p className="font-bold text-[#c5a059] text-sm">₹{product.price.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-gold">Shop</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-gold">Experience</h6>
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

export default Cart;
