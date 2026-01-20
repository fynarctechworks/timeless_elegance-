import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

// Import logo
import logo from '../assets/Logo.png';
import heroImage from '../assets/hero_image.jpg';

// Import product images
import royalBlueKanjeevaram from '../assets/Royal Blue Kanjeevaram.jpg';
import softPinkFloral from '../assets/Soft Pink Floral Organza.jpg';
import ivoryWhiteLehenga from '../assets/Ivory White Zardozi Lehenga.jpg';
import emeraldBanarasi from '../assets/Emerald Banarasi Silk.jpg';
import crimsonRedSaree from '../assets/Crimson Red Silk Saree.jpg';
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';
import mintGreenGeorgette from '../assets/Mint Green Georgette.jpg';
import mauveVelvetBridal from '../assets/Mauve Velvet Bridal Set.jpg';
import peacockBlueKanjivaram from '../assets/Peacock Blue Kanjivaram.jpg';
import coralPinkBandhani from '../assets/Coral Pink Bandhani.jpg';
import champagneGoldAnarkali from '../assets/Champagne Gold Anarkali.jpg';
import burgundyChanderi from '../assets/Burgundy Chanderi Silk.jpg';

function Home() {
  // State for managing visible products in New Arrivals
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  // State for testimonials carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsRef = useRef(null);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // All products data
  const allProducts = [
    {
      id: 1,
      name: "Royal Blue Kanjeevaram",
      price: "₹1,20,000",
      image: royalBlueKanjeevaram,
      isNew: true
    },
    {
      id: 2,
      name: "Soft Pink Floral Organza",
      price: "₹75,000",
      image: softPinkFloral,
      isNew: false
    },
    {
      id: 3,
      name: "Ivory White Zardozi Lehenga",
      price: "₹1,75,000",
      image: ivoryWhiteLehenga,
      isNew: false
    },
    {
      id: 4,
      name: "Emerald Banarasi Silk",
      price: "₹95,000",
      image: emeraldBanarasi,
      isNew: false
    },
    {
      id: 5,
      name: "Crimson Red Silk Saree",
      price: "₹1,10,000",
      image: crimsonRedSaree,
      isNew: true
    },
    {
      id: 6,
      name: "Gold Embroidered Lehenga",
      price: "₹2,05,000",
      image: goldLehenga,
      isNew: true
    },
    {
      id: 7,
      name: "Mint Green Georgette",
      price: "₹80,000",
      image: mintGreenGeorgette,
      isNew: false
    },
    {
      id: 8,
      name: "Mauve Velvet Bridal Set",
      price: "₹2,65,000",
      image: mauveVelvetBridal,
      isNew: true
    },
    {
      id: 9,
      name: "Peacock Blue Kanjivaram",
      price: "₹1,40,000",
      image: peacockBlueKanjivaram,
      isNew: false
    },
    {
      id: 10,
      name: "Coral Pink Bandhani",
      price: "₹88,000",
      image: coralPinkBandhani,
      isNew: true
    },
    {
      id: 11,
      name: "Champagne Gold Anarkali",
      price: "₹1,58,000",
      image: champagneGoldAnarkali,
      isNew: false
    },
    {
      id: 12,
      name: "Burgundy Chanderi Silk",
      price: "₹1,07,000",
      image: burgundyChanderi,
      isNew: true
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      image: "https://ui-avatars.com/api/?name=Priya+Sharma&size=200&background=c5a059&color=221013&bold=true",
      quote: "The craftsmanship on the Banarasi saree I ordered is beyond words. It felt like wearing a piece of history on my wedding day. Truly a masterpiece.",
      rating: 5
    },
    {
      id: 2,
      name: "Anjali Mehta",
      image: "https://ui-avatars.com/api/?name=Anjali+Mehta&size=200&background=8B1538&color=fdfcf0&bold=true",
      quote: "Timeless Elegance has become my go-to for all occasions. Their fusion wear perfectly blends traditional motifs with a modern touch.",
      rating: 5
    },
    {
      id: 3,
      name: "Meera Kapoor",
      image: "https://ui-avatars.com/api/?name=Meera+Kapoor&size=200&background=c5a059&color=221013&bold=true",
      quote: "The intricate zardozi work on my lehenga was stunning. I received so many compliments. Authentic quality that is rare to find today.",
      rating: 5
    },
    {
      id: 4,
      name: "Kavita Reddy",
      image: "https://ui-avatars.com/api/?name=Kavita+Reddy&size=200&background=8B1538&color=fdfcf0&bold=true",
      quote: "I was searching for an authentic Kanjivaram for months. Found exactly what I wanted here. The quality exceeded my expectations. Absolutely worth every penny!",
      rating: 5
    },
    {
      id: 5,
      name: "Neha Singh",
      image: "https://ui-avatars.com/api/?name=Neha+Singh&size=200&background=c5a059&color=221013&bold=true",
      quote: "Customer service was exceptional! They helped me choose the perfect outfit for my sister's wedding. The attention to detail in their pieces is remarkable.",
      rating: 5
    },
    {
      id: 6,
      name: "Divya Iyer",
      image: "https://ui-avatars.com/api/?name=Divya+Iyer&size=200&background=8B1538&color=fdfcf0&bold=true",
      quote: "Gorgeous collection! The colors and fabrics are absolutely breathtaking. I've ordered three times already and each piece has been perfect. Highly recommend!",
      rating: 5
    }
  ];

  // Update progress bar based on scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [visibleProducts]);

  // Function to scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 340 + 32; // card width + gap
      carouselRef.current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
      
      // Check if we need to load more products
      setTimeout(() => {
        if (carouselRef.current) {
          const scrollLeft = carouselRef.current.scrollLeft;
          const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          
          if (scrollLeft >= scrollWidth * 0.7 && visibleProducts < allProducts.length) {
            setVisibleProducts(prev => Math.min(prev + 2, allProducts.length));
          }
        }
      }, 500);
    }
  };

  // Function to scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 340 + 32;
      carouselRef.current.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
    }
  };

  // Testimonials navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll testimonials carousel
  useEffect(() => {
    if (testimonialsRef.current) {
      const container = testimonialsRef.current;
      const firstCard = container.querySelector('div[class*="snap-center"]');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 32; // card width + gap
        container.scrollTo({
          left: cardWidth * currentTestimonial,
          behavior: 'smooth'
        });
      }
    }
  }, [currentTestimonial]);

  // Handle hash navigation for New Arrivals section
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#new-arrivals') {
      setTimeout(() => {
        const element = document.getElementById('new-arrivals');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e5e1d5] dark:border-[#3d2a2d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            {/* Brand - Left */}
            <div className="flex items-center flex-1">
              <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto" />
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
                <Link to="/cart" className="text-[#181112] dark:text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
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

      <main className="w-full relative">
        {/* Hero Section */}
        <div className="relative w-full h-[100vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-black">
            <img 
              alt="Luxury Boutique Collection" 
              className="min-w-full min-h-full w-full h-full object-cover object-center scale-110 sm:scale-100 opacity-80" 
              src={heroImage}
            />
            <div className="absolute inset-0 video-overlay backdrop-none"></div>
          </div>
          <div className="relative h-full w-full mx-auto px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl space-y-4 sm:space-y-6 lg:space-y-8">
              <span className="text-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.5em] text-[10px] sm:text-xs md:text-sm font-bold block mb-2 sm:mb-4">
                The Art of Fine Drapery
              </span>
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[1.1]">
                Timeless Elegance <br />
                <span className="italic font-normal block mt-1 sm:mt-2 text-white/90">In Every Thread</span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                Experience the luxury of hand-woven heritage maroon silk and intricate gold embroidery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-10 justify-center px-4 sm:px-0">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-none font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl cursor-pointer">
                  Shop Now
                </button>
                <button className="border border-white/50 text-white hover:bg-white hover:text-black px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-none font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all backdrop-blur-sm cursor-pointer">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <section id="new-arrivals" className="relative bg-background-light dark:bg-background-dark silk-texture py-12 sm:py-16 lg:py-24 overflow-hidden border-b border-[#e5e1d5] dark:border-[#3d2a2d]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold">Just In</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold dark:text-white">New Arrivals</h2>
                <div className="w-16 sm:w-20 h-0.5" style={{backgroundColor: '#c5a059'}}></div>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="flex gap-3 sm:gap-4">
                  <button 
                    onClick={scrollLeft}
                    className="size-10 sm:size-12 rounded-full border-2 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 cursor-pointer"
                    style={{borderColor: '#c5a059', color: '#c5a059'}}
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
                  </button>
                  <button 
                    onClick={scrollRight}
                    className="size-10 sm:size-12 rounded-full border-2 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 cursor-pointer"
                    style={{borderColor: '#c5a059', color: '#c5a059'}}
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            <div ref={carouselRef} className="carousel-container flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 sm:pb-12">
              {allProducts.slice(0, visibleProducts).map((product) => (
                <div key={product.id} className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px] snap-start group bg-white dark:bg-[#2d161a] border border-[#e5e1d5] dark:border-[#3d2a2d] shadow-sm">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{backgroundImage: `url("${product.image}")`}}
                    ></div>
                    {product.isNew && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gold text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1">
                        New Arrival
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 dark:bg-[#181112]/90 backdrop-blur-sm">
                      <Link to={`/product/${product.id}`} state={{ product: product }}>
                        <button className="w-full bg-primary text-white py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors cursor-pointer">
                          Quick Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h4 className="font-serif text-base sm:text-lg font-bold mb-1 sm:mb-2 dark:text-white">{product.name}</h4>
                    <p className="text-gold font-bold text-sm sm:text-base">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full max-w-md mx-auto h-1 rounded-full mt-8 overflow-hidden" style={{backgroundColor: 'rgba(197, 160, 89, 0.2)'}}>
              <div 
                className="h-full rounded-full transition-all duration-300" 
                style={{width: `${scrollProgress}%`, backgroundColor: '#c5a059'}}
              ></div>
            </div>
          </div>
        </section>

        {/* Signature Collections */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12">
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <h3 className="text-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold">Curated Selections</h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold" style={{color: '#2d1618'}}>Signature Collections</h2>
            <div className="w-12 sm:w-16 h-0.5 bg-primary/30"></div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 mb-12 sm:mb-16 lg:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Collection 1 */}
            <Link to="/banarasi-silks">
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 sm:mb-6 shadow-md">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{backgroundImage: `url("${emeraldBanarasi}")`}}
                  ></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8">
                    <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-serif mb-1 sm:mb-2">Banarasi Silks</h4>
                    <p className="text-white/80 text-[10px] sm:text-xs italic mb-3 sm:mb-4 max-w-[180px] sm:max-w-[200px]">
                      Hand-woven luxury from the ghats of Kashi
                    </p>
                    <span className="text-white/80 text-xs sm:text-sm uppercase tracking-widest border-b border-white/40 group-hover:border-white transition-all pb-1">
                      Explore
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Collection 2 */}
            <Link to="/bridal-lehengas" className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 sm:mb-6 shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: `url("${goldLehenga}")`}}
                ></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8">
                  <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-serif mb-1 sm:mb-2">Bridal Lehengas</h4>
                  <p className="text-white/80 text-[10px] sm:text-xs italic mb-3 sm:mb-4 max-w-[180px] sm:max-w-[200px]">
                    Regal silhouettes for your special day
                  </p>
                  <span className="text-white/80 text-xs sm:text-sm uppercase tracking-widest border-b border-white/40 group-hover:border-white transition-all pb-1">
                    Explore
                  </span>
                </div>
              </div>
            </Link>

            {/* Collection 3 */}
            <Link to="/heritage-weaves" className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 sm:mb-6 shadow-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: `url("${royalBlueKanjeevaram}")`}}
                ></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8">
                  <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-serif mb-1 sm:mb-2">Heritage Weaves</h4>
                  <p className="text-white/80 text-[10px] sm:text-xs italic mb-3 sm:mb-4 max-w-[180px] sm:max-w-[200px]">
                    Preserving centuries of artisanal legacy
                  </p>
                  <span className="text-white/80 text-xs sm:text-sm uppercase tracking-widest border-b border-white/40 group-hover:border-white transition-all pb-1">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Crafted with Tradition */}
        <div className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-20 border-y" style={{ backgroundColor: '#2d1618', borderColor: '#c5a059' }}>
          <div className="w-full mx-auto flex flex-col items-center text-center">
            <div className="size-10 sm:size-12 mb-4 sm:mb-6 opacity-60" style={{ color: '#c5a059' }}>
              <span className="material-symbols-outlined text-4xl sm:text-5xl">auto_awesome</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 sm:mb-8 italic px-4" style={{ color: '#c5a059' }}>
              Crafted with Tradition
            </h2>
            <div className="max-w-3xl space-y-4 sm:space-y-6 px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed" style={{ color: '#fdfcf0' }}>
                Every thread tells a story of heritage and artisanal craftsmanship passed down through generations. Our sarees are not just garments; they are heirlooms woven with the spirit of India's rich textile legacy.
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest font-semibold" style={{ color: '#c5a059' }}>
                Handloomed • Authentic • Timeless
              </p>
            </div>
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <button className="text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-none font-bold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg hover:-translate-y-1 cursor-pointer" style={{ backgroundColor: '#c5a059' }}>
                Our Heritage Story
              </button>
              <button className="border px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-none font-bold text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer" style={{ borderColor: '#c5a059', color: '#c5a059', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(197, 160, 89, 0.1)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                Meet The Artisans
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="relative bg-[#221013] py-12 sm:py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 floral-pattern"></div>
          <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 lg:mb-16">
              <h3 className="text-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold">Voices of Grace</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white px-4">
                Customer Testimonials
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-gold/50"></div>
            </div>
            <div className="relative flex justify-center">
              <div ref={testimonialsRef} className="carousel-container flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full sm:min-w-[400px] md:min-w-[450px] lg:min-w-[500px] snap-center flex justify-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-gold/20 p-6 sm:p-8 md:p-10 lg:p-12 text-center h-full flex flex-col items-center justify-center max-w-2xl w-full">
                      <div className="size-20 sm:size-24 rounded-full border-2 border-gold p-1 mb-4 sm:mb-6">
                        <img 
                          alt={testimonial.name} 
                          className="w-full h-full rounded-full object-cover grayscale-[0.3]" 
                          src={testimonial.image}
                        />
                      </div>
                      <div className="flex gap-1 text-gold mb-4 sm:mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-xs sm:text-sm">star</span>
                        ))}
                      </div>
                      <p className="text-white/90 font-serif text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed mb-6 sm:mb-8">
                        "{testimonial.quote}"
                      </p>
                      <h5 className="text-gold font-bold uppercase tracking-[0.2em] sm:tracking-widest text-xs sm:text-sm">— {testimonial.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 lg:-left-12 flex items-center">
                <button 
                  onClick={prevTestimonial}
                  className="size-10 sm:size-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#221013] transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_left</span>
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 lg:-right-12 flex items-center">
                <button 
                  onClick={nextTestimonial}
                  className="size-10 sm:size-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#221013] transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl sm:text-2xl">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

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
      </main>
    </>
  );
}

export default Home;
