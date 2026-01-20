import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

// Import product images for orders
import crimsonRedSaree from '../assets/Crimson Red Silk Saree.jpg';
import goldLehenga from '../assets/Gold Embroidered Lehenga.jpg';

function Profile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ananya Sharma',
    email: 'ananya.s@elegance.com',
    phone: '+91 98765 43210'
  });

  const orders = [
    {
      id: 'VST-99281',
      name: 'Midnight Red Banarasi Silk Saree',
      date: 'Dec 12, 2023',
      status: 'DELIVERED',
      statusColor: 'green',
      image: crimsonRedSaree
    },
    {
      id: 'VST-98104',
      name: 'Blush Rose Embroidered Lehenga',
      date: 'Nov 28, 2023',
      status: 'IN TRANSIT',
      statusColor: 'primary',
      image: goldLehenga
    }
  ];

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home Address',
      isDefault: true,
      address: 'Apartment 402, Lotus Greens,\nSector 150, Noida, Uttar Pradesh\nIndia - 201310'
    },
    {
      id: 2,
      type: 'Work Address',
      isDefault: false,
      address: 'Boutique House, Block C-12,\nVasant Vihar, New Delhi\nIndia - 110057'
    }
  ]);

  const handleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const handleProfileUpdate = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSetDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDeleteAddress = (id) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  return (
    <>
      {/* Header - Same as Home */}
      <div className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-sm border-b border-[#3d2a2d]">
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
              <Link to="/sarees" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Sarees
              </Link>
              <Link to="/lehengas" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Lehengas
              </Link>
              <Link to="/indo-western" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Indo-Western
              </Link>
              <Link to="/bridal-edit" className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                Bridal Edit
              </Link>
            </nav>

            {/* Icons - Right */}
            <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
              <div className="hidden sm:flex gap-3 sm:gap-4">
                <Link to="/wishlist" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">person</span>
                </Link>
              </div>
              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white hover:text-primary transition-colors cursor-pointer"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background-dark/98 backdrop-blur-md border-b border-[#3d2a2d] shadow-lg">
            <nav className="flex flex-col px-4 sm:px-6 py-4 space-y-4">
              <Link 
                to="/sarees" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#3d2a2d]"
              >
                Sarees
              </Link>
              <Link 
                to="/lehengas" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#3d2a2d]"
              >
                Lehengas
              </Link>
              <Link 
                to="/indo-western" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#3d2a2d]"
              >
                Indo-Western
              </Link>
              <Link 
                to="/bridal-edit" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-[#3d2a2d]"
              >
                Bridal Edit
              </Link>
              <div className="flex gap-6 py-2 justify-start sm:hidden">
                <Link to="/wishlist" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                </Link>
                <Link to="/profile" className="text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <header className="text-left border-b border-[#e5e1d5] pb-6 sm:pb-8 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#181112] mb-2">Account Settings</h1>
          <p className="text-[#896168] text-sm">Manage your profile, track orders, and update addresses.</p>
        </header>

        {/* Personal Information */}
        <section className="mb-12 sm:mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#181112]">Personal Information</h2>
            <button 
              onClick={handleEditProfile}
              className="text-primary text-sm font-medium hover:underline"
            >
              {isEditingProfile ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#faf8f6] border border-[#e5e1d5] rounded-lg p-5 hover:shadow-md transition-shadow">
              <p className="text-[11px] uppercase tracking-wider text-[#896168] font-bold mb-1">Full Name</p>
              {isEditingProfile ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleProfileUpdate('name', e.target.value)}
                  className="text-base font-medium text-[#181112] bg-white border border-[#e5e1d5] rounded px-2 py-1 w-full"
                />
              ) : (
                <p className="text-base font-medium text-[#181112]">{profileData.name}</p>
              )}
            </div>
            <div className="bg-[#faf8f6] border border-[#e5e1d5] rounded-lg p-5 hover:shadow-md transition-shadow">
              <p className="text-[11px] uppercase tracking-wider text-[#896168] font-bold mb-1">Email Address</p>
              {isEditingProfile ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleProfileUpdate('email', e.target.value)}
                  className="text-base font-medium text-[#181112] bg-white border border-[#e5e1d5] rounded px-2 py-1 w-full"
                />
              ) : (
                <p className="text-base font-medium text-[#181112]">{profileData.email}</p>
              )}
            </div>
            <div className="bg-[#faf8f6] border border-[#e5e1d5] rounded-lg p-5 hover:shadow-md transition-shadow">
              <p className="text-[11px] uppercase tracking-wider text-[#896168] font-bold mb-1">Phone Number</p>
              {isEditingProfile ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleProfileUpdate('phone', e.target.value)}
                  className="text-base font-medium text-[#181112] bg-white border border-[#e5e1d5] rounded px-2 py-1 w-full"
                />
              ) : (
                <p className="text-base font-medium text-[#181112]">{profileData.phone}</p>
              )}
            </div>
          </div>
        </section>

        {/* My Orders */}
        <section className="mb-12 sm:mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#181112]">My Orders</h2>
            <Link to="#" className="text-primary text-sm font-medium hover:underline">View Full History</Link>
          </div>
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="bg-[#faf8f6] border border-[#e5e1d5] rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="h-20 w-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    <img alt={order.name} className="w-full h-full object-cover" src={order.image} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        order.statusColor === 'green' 
                          ? 'text-green-600 bg-green-50' 
                          : 'text-primary bg-primary/10'
                      }`}>
                        {order.status}
                      </span>
                      <span className="text-xs text-[#896168]">Order #{order.id}</span>
                    </div>
                    <h4 className="text-base font-bold text-[#181112]">{order.name}</h4>
                    <p className="text-sm text-[#896168] mt-0.5">Purchased on {order.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="px-4 py-2 text-sm font-medium rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    Track Order
                  </button>
                  <button className="text-sm font-medium text-[#896168] hover:text-[#181112] transition-colors px-3 py-2 border border-transparent hover:border-[#e5e1d5] rounded">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Saved Addresses */}
        <section className="mb-12 sm:mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#181112]">Saved Addresses</h2>
            <button className="px-4 py-2 text-sm font-medium rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span> Add New Address
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses.map(address => (
              <div key={address.id} className={`bg-[#faf8f6] border border-[#e5e1d5] rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col justify-between ${
                address.isDefault ? 'border-l-4 border-l-primary' : ''
              }`}>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-[11px] uppercase tracking-wider font-bold ${
                      address.isDefault ? 'text-primary' : 'text-[#896168]'
                    }`}>
                      {address.type} {address.isDefault && '(Default)'}
                    </span>
                    {address.isDefault && (
                      <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-[#181112] whitespace-pre-line">
                    {address.address}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#e5e1d5]">
                  <div className="flex gap-4">
                    <button 
                      onClick={() => alert('Edit address functionality coming soon!')}
                      className="text-sm font-medium text-[#896168] hover:text-[#181112] transition-colors"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteAddress(address.id)}
                      className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                  {!address.isDefault && (
                    <button 
                      onClick={() => handleSetDefaultAddress(address.id)}
                      className="text-[11px] font-bold text-primary hover:underline uppercase"
                    >
                      Set as Default
                    </button>
                  )}
                  {address.isDefault && (
                    <span className="text-[10px] text-[#896168] italic">Default</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sign Out */}
        <footer className="pt-8 text-center">
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to sign out?')) {
                alert('Sign out functionality will redirect to login page');
              }
            }}
            className="text-sm font-bold text-[#896168] hover:text-red-600 transition-colors uppercase tracking-widest py-3 px-10 border border-[#e5e1d5] rounded-full hover:border-red-600"
          >
            Sign Out of Account
          </button>
        </footer>
      </main>

      {/* Footer - Same as Home */}
      <footer className="bg-[#181112] text-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 mt-auto">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 sm:col-span-2">
              <div className="mb-3 sm:mb-4">
                <Link to="/">
                  <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
                </Link>
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
                <li><Link to="/sarees" className="hover:text-white transition-colors">Silk Sarees</Link></li>
                <li><Link to="/lehengas" className="hover:text-white transition-colors">Chiffon Collection</Link></li>
                <li><Link to="/bridal-edit" className="hover:text-white transition-colors">Wedding Store</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><Link to="/#new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-gold">Experience</h6>
              <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bespoke Couture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
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

      <ScrollToTop />
    </>
  );
}

export default Profile;
