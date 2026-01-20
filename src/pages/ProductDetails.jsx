import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;
  
  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  
  // Default product if no state is passed
  const defaultProduct = {
    name: 'Crimson Red & 24K Gold Kanjeevaram',
    price: '₹45,000',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_ro90QHxZrVaRAeKGYJOYHQiRtbyJRmIo-kiw5p1a-6S86W0earJF4WaXp_P2k6bTw9_fQY_-znN_70Xs8sX4oBj2KYdldE6qSrgeh5NFO41V038Wbu4fT9_DJOorQmzT7xV4WEfiF4lHiwjKzliPyRAwof_LnU3Hf4VzlVEo6MMyfcutJNYqCWsPoQgJKVorYOJIKXxHLJFp2x5hKCLAhEo4PGhalNS8EI9R1Efcg9fRtAwhXPmumXjYAxUaUOIFJkb6CX10ZXLc"
  };
  
  const currentProduct = product || defaultProduct;
  const productName = currentProduct.name;
  const productPrice = currentProduct.price;
  const mainImage = currentProduct.image;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Use the main product image for all thumbnails (can be customized later)
  const productImages = [
    mainImage,
    mainImage,
    mainImage,
    mainImage
  ];

  const complementaryProducts = [
    {
      name: "Antique Gold Temple Necklace",
      price: "₹12,400",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOIkswi2J_4OdwB8VdLZ-_xDTb6eTgTT3dKhGhlfYUVq0I61MQM0D5ykYFy0Fa3wVHNhUqqfGFoBrp3pXGBqvhOPxRABBvpEbeYJ-9qGRyeBsrIThLtxHkBXb4rm64YpRfATbGisc49mMciE4_EFmn1LBsHxsJ6mUQdK2Hsz1zI9tGqd5yCrlgJZTEnSTxM1XUTnnxOVB3BSMeRNhfTYTED1PsVI5bOw5rFMRYLIIwwHTV1fKkEWhBJFkkfrkvduTdbF2f-78HEEH8"
    },
    {
      name: "Traditional Gold Jhumkas",
      price: "₹4,200",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI9cxdzkrHTBtIDw-CKbkGgkZxYXYdYVoRlUwR7FshhBTtfeglspQuSLFaqerOmoC5moJkOx9nnPaie0kDrD67vlVF93txx5qUHl-TzpwJNua0g2yo-sKrSL_5AEyDi3GhRDoxi4fPZMVfpUqwGgtN6owsl0gTN7mzMQxCKtWCZFPr07seCJT2AEVsO8_SIN5iTW6QlLfHH3wfC6y4iuNuJ-abkyvYoqMInYs3TbrEH1huf6ijr1zArwaKwuzVSQ0FmOo_F4CbzNec"
    },
    {
      name: "Zardosi Embroidered Potli",
      price: "₹3,800",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7GImcdH9W2fWQ5ieclizxbGLOpWlG6HnEU1-zykj7dZDYXPXnt6wg6cuXRfhcXVF1JvQ6nwM32dj7yjXWU07UUpo6woHAg_PsxiRSZHBXh8V4QtM8ytKLKnjIYzyRAMODvKf7TOq0hG9hgb-tV1oUzuB6VVWAMiy0cLVy7zk7ruL341g_oGTRoKhvdRNstnTqBV17CysMfBewnMEI0I5IT1gQM_ZhswIVg9O6AZvmiDHFEGp32IY0UvzkelnMWJwvFsHc-UeIFKhv"
    },
    {
      name: "Gold Zari Embellished Heels",
      price: "₹6,500",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-tEiSEacWzlQIG1qRaGGp4MarILn8cM0jsSfQJeU4E8Fc2Q29foEw48zmOaTvfz7TfoRILQVgHh0ydvZLIdGRe_Fk1sDXVREox_6WYq9tmxJYVcQk1_4t5WH831f65AhuUAMukwqRxy_kcZP420SpVwyU3Y5qQhdyUhe-yZlh1L2bi1XTqK6NJ9V5XjhT7RriBmyRsYe0XtoYX8_PPvzYfYH8cthLrCqD70v7ZEDiVJOHxlYJiWV4OcYK8NJfUf5edzwDAmEzuWEi"
    }
  ];

  return (
    <>
      {/* Header - Same as Home */}
      <div className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e1d5] dark:border-[#3d2a2d]">
        <div className="w-full mx-auto px-6 lg:px-20 py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            {/* Brand - Left */}
            <div className="flex items-center flex-1">
              <img src={logo} alt="Timeless Elegance" className="h-16 w-auto" />
            </div>

            {/* Navigation - Center */}
            <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
              <a className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">
                Sarees
              </a>
              <a className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">
                Lehengas
              </a>
              <a className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">
                Indo-Western
              </a>
              <a className="text-[#181112] dark:text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">
                Bridal Edit
              </a>
            </nav>

            {/* Icons - Right */}
            <div className="flex items-center justify-end gap-6 flex-1">
              <div className="flex gap-4">
                <Link to="/wishlist" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">favorite</span>
                </Link>
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-primary transition-colors relative cursor-pointer">
                  <span className="material-symbols-outlined">shopping_bag</span>
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                </Link>
                <Link to="/profile" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">person</span>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>

      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <Link to="/#new-arrivals" className="text-gray-600 hover:text-primary transition-colors cursor-pointer">New Arrival</Link>
            <span className="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <span className="font-medium" style={{color: '#2d1618'}}>{productName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Image Gallery */}
            <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
              <div className="flex-1 relative group overflow-hidden rounded-xl bg-gray-50">
                <div 
                  className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-700 hover:scale-110 cursor-zoom-in" 
                  style={{backgroundImage: `url(${productImages[selectedImage]})`}}
                ></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded">
                  Handloom
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 w-full md:w-20 overflow-x-auto md:overflow-y-auto">
                {productImages.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 flex-shrink-0 rounded-lg bg-cover bg-center cursor-pointer transition-all ${
                      selectedImage === index 
                        ? 'border-2 border-primary' 
                        : 'border border-transparent hover:border-gray-300'
                    }`}
                    style={{backgroundImage: `url(${img})`}}
                  ></div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="mb-2">
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Heritage Collection</span>
                </div>
                <h1 className="text-4xl font-black mb-2 tracking-tight" style={{color: '#2d1618'}}>
                  {productName}
                </h1>
                <p className="text-lg text-gray-500 mb-6 font-normal">Authentic Hand-woven Mulberry Silk</p>
                
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-3xl font-bold" style={{color: '#2d1618'}}>{productPrice}</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mb-10">
                  <div className="flex gap-4">
                    <button className="flex-1 bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <span className="material-symbols-outlined">shopping_bag</span>
                      ADD TO BAG
                    </button>
                    <Link to="/wishlist" className="px-5 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer flex items-center justify-center">
                      <span className="material-symbols-outlined">favorite</span>
                    </Link>
                  </div>
                  <p className="text-xs text-center text-gray-500">Free priority shipping on this item</p>
                </div>

                {/* Product Details Accordion */}
                <div className="border-t border-gray-100 dark:border-gray-800">
                  <details className="group py-4 border-b border-gray-100 dark:border-gray-800" open>
                    <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none uppercase tracking-wider">
                      Fabric Details
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-4 text-sm leading-relaxed space-y-2" style={{color: '#2d1618'}}>
                      <p><span className="font-semibold">Material:</span> 100% Pure Mulberry Silk</p>
                      <p><span className="font-semibold">Zari:</span> Pure 24K Gold and Silver Zari work</p>
                      <p><span className="font-semibold">Weave:</span> Hand-woven Korvai Technique from Kanchipuram</p>
                    </div>
                  </details>

                  <details className="group py-4 border-b border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none uppercase tracking-wider">
                      Blouse Info
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Includes an unstitched running blouse piece (0.8m) in contrasting deep crimson with a heavy gold border matching the saree's pallu.
                    </div>
                  </details>

                  <details className="group py-4 border-b border-gray-100 dark:border-gray-800">
                    <summary className="flex justify-between items-center font-bold text-sm cursor-pointer list-none uppercase tracking-wider">
                      Wash Care
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Professional Dry Clean Only. Store in a soft muslin cloth or saree bag. Avoid direct sunlight to preserve the gold zari brilliance.
                    </div>
                  </details>
                </div>

                {/* Trust Markers */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">verified</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Silk Mark Certified</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">pan_tool</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Hand-woven</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <span className="material-symbols-outlined text-gray-400">local_shipping</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500">Worldwide Shipping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete the Look Section */}
          <section className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-[#181112] dark:text-white">Complete the Look</h3>
              <span className="text-primary text-sm font-bold flex items-center gap-1 cursor-default">
                View Jewelry Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complementaryProducts.map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square rounded-xl bg-gray-100 mb-4 overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                      style={{backgroundImage: `url(${product.image})`}}
                    ></div>
                    <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                      <span className="material-symbols-outlined text-gray-900">add</span>
                    </button>
                  </div>
                  <p className="font-bold text-sm mb-1" style={{color: '#8B1538'}}>{product.name}</p>
                  <p className="text-gray-500 text-sm">{product.price}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer - Same as Home */}
        <footer className="bg-[#181112] text-white pt-24 pb-12 mt-32">
          <div className="w-full mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-4">
                  <img src={logo} alt="Timeless Elegance" className="h-16 w-auto" />
                </div>
                <p className="text-white/60 max-w-sm mb-8 leading-loose">
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
                <h6 className="font-bold text-sm uppercase tracking-widest mb-8 text-gold">Shop</h6>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-sm uppercase tracking-widest mb-8 text-gold">Experience</h6>
                <ul className="space-y-4 text-white/60 text-sm">
                  <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Bespoke Couture</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-white/40 text-xs tracking-widest uppercase">
                © 2024 Timeless Elegance Boutique. All Rights Reserved.
              </p>
              <div className="flex gap-8 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                <a className="hover:text-white transition-colors" href="#">Terms</a>
                <a className="hover:text-white transition-colors" href="#">Privacy</a>
                <a className="hover:text-white transition-colors" href="#">Shipping</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      <ScrollToTop />
    </>
  );
}

export default ProductDetails;
