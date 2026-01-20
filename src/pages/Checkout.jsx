import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ScrollToTop from '../components/ScrollToTop';
import logo from '../assets/Logo.png';

function Checkout() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errors, setErrors] = useState({});
  const { cartItems, getCartCount, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    fullName: '',
    streetAddress: '',
    city: '',
    state: 'Maharashtra',
    pinCode: '',
    phoneNumber: ''
  });

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderPlaced) {
      navigate('/cart');
    }
  }, [cartItems, navigate, orderPlaced]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * 0.12;
  const shippingCost = deliveryMethod === 'express' ? 499 : 0;
  const grandTotal = subtotal + gst + shippingCost - discount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'PIN code is required';
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = 'PIN code must be 6 digits';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueToPayment = () => {
    if (currentStep === 1) {
      if (validateForm()) {
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (currentStep === 2) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleApplyPromo = () => {
    const validPromoCodes = {
      'WELCOME10': 0.10,
      'LUXURY15': 0.15,
      'FESTIVE20': 0.20
    };

    const promoUpper = promoCode.toUpperCase().trim();
    
    if (validPromoCodes[promoUpper]) {
      const discountAmount = subtotal * validPromoCodes[promoUpper];
      setDiscount(discountAmount);
      setPromoApplied(true);
      alert(`Promo code applied! You saved ₹${discountAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`);
    } else {
      alert('Invalid promo code');
      setPromoApplied(false);
      setDiscount(0);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const newOrderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      setOrderId(newOrderId);
      setOrderPlaced(true);
      setIsProcessing(false);
      
      // Save order to localStorage (in real app, this would be an API call)
      const order = {
        orderId: newOrderId,
        date: new Date().toISOString(),
        items: cartItems,
        shippingAddress: formData,
        deliveryMethod,
        subtotal,
        gst,
        shippingCost,
        discount,
        total: grandTotal
      };
      
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.unshift(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      
      // Clear cart
      clearCart();
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  const progressWidth = (currentStep / 3) * 100;

  // If order is placed, show success screen
  if (orderPlaced) {
    return (
      <>
        <div className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-sm border-b border-[#3d2a2d]">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
            <header className="flex items-center justify-between whitespace-nowrap">
              <div className="flex items-center flex-1">
                <Link to="/">
                  <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
                </Link>
              </div>
            </header>
          </div>
        </div>

        <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <div className="bg-[#2d1618] rounded-lg border border-[#c5a059]/30 p-8 sm:p-12">
            <div className="mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-green-500 text-5xl sm:text-6xl">check_circle</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Order Placed Successfully!</h1>
              <p className="text-lg text-gray-300 mb-2">Thank you for your purchase</p>
              <p className="text-2xl font-bold text-primary mb-6">Order #{orderId}</p>
            </div>

            <div className="bg-[#3d2327]/50 rounded-lg p-6 mb-8 text-left border border-[#c5a059]/20">
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-[#c5a059]/30">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Items ({cartItems.length})</span>
                  <span className="text-white font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">GST (12%)</span>
                  <span className="text-white font-medium">₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Shipping</span>
                  <span className="text-white font-medium">{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Discount</span>
                    <span className="text-green-500 font-medium">-₹{discount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                )}
                <div className="border-t border-[#c5a059]/30 pt-3 flex justify-between">
                  <span className="text-lg font-bold text-white">Total Paid</span>
                  <span className="text-xl font-bold text-[#c5a059]">₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-white">
                <span className="font-bold">Estimated Delivery:</span> {deliveryMethod === 'express' ? 'Tomorrow' : '3-5 business days'}
              </p>
              <p className="text-sm text-gray-300 mt-2">
                A confirmation email has been sent to {formData.email || 'your email'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/profile"
                className="px-8 py-3 bg-[#c5a059] text-[#221013] font-bold rounded-lg hover:bg-[#c5a059]/90 transition-colors"
              >
                Track Order
              </Link>
              <Link
                to="/"
                className="px-8 py-3 border-2 border-[#c5a059] text-[#c5a059] font-bold rounded-lg hover:bg-[#c5a059] hover:text-[#221013] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>

        <ScrollToTop />
      </>
    );
  }

  return (
    <>
      {/* Header - Same as Home */}
      <div className="sticky top-0 z-50 w-full bg-background-dark/95 backdrop-blur-sm border-b border-[#3d2a2d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <header className="flex items-center justify-between whitespace-nowrap">
            {/* Brand - Left */}
            <div className="flex items-center flex-1">
              <Link to="/">
                <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
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
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
              
              <div className="hidden sm:flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary">
                <span className="material-symbols-outlined text-sm">lock</span> 
                <span>Secure</span>
              </div>

              <div className="hidden sm:flex items-center gap-4">
                <Link to="/wishlist" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">favorite</span>
                </Link>
                <Link to="/cart" className="relative text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] size-4 flex items-center justify-center rounded-full">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <Link to="/profile" className="text-white hover:text-primary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-2xl">person</span>
                </Link>
              </div>
            </div>
          </header>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#3d2a2d] bg-background-dark">
            <nav className="flex flex-col px-4 py-4">
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
            </nav>
          </div>
        )}
      </div>

      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs & Heading */}
        <header className="text-left border-b border-[#c5a059]/30 pb-6 sm:pb-8 mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 mb-4 text-sm">
            <Link to="/cart" className="text-gray-300 font-medium hover:text-primary transition-colors">
              Shopping Bag
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-white font-bold">Checkout</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Secure Checkout</h1>
          <p className="text-gray-300 text-sm">Complete your luxury purchase with end-to-end encryption.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side: Checkout Steps */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            {/* Progress Bar */}
            <div className="flex flex-col gap-4 p-4 sm:p-6 bg-[#2d1618] rounded-lg border border-[#c5a059]/30 hover:shadow-md transition-shadow">
              <div className="flex gap-4 sm:gap-6 justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c5a059] text-[#221013] text-sm font-bold">
                    {currentStep}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    {currentStep === 1 ? 'Shipping Information' : currentStep === 2 ? 'Delivery Method' : 'Payment'}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-300">Step {currentStep} of 3</p>
              </div>
              <div className="rounded-full bg-[#3d2327] h-1.5 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-[#c5a059] transition-all duration-300" 
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
            </div>

            {/* Shipping Address Section */}
            {currentStep === 1 && (
            <section className={`bg-[#2d1618] rounded-lg border border-[#c5a059]/30 hover:shadow-md transition-shadow overflow-hidden`}>
              <div className="p-4 sm:p-6 border-b border-[#c5a059]/30 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#c5a059] text-xl">location_on</span>
                <h2 className="text-lg sm:text-xl font-bold text-white">Shipping Address</h2>
              </div>
              <div className="p-4 sm:p-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">Full Name</label>
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={currentStep > 1}
                      className={`w-full bg-[#3d2327] border rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 ${errors.fullName ? 'border-red-500' : 'border-[#c5a059]/30'}`}
                      placeholder="Arjun Kapoor" 
                      type="text"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">Street Address</label>
                    <input 
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      disabled={currentStep > 1}
                      className={`w-full bg-[#3d2327] border rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 ${errors.streetAddress ? 'border-red-500' : 'border-[#c5a059]/30'}`}
                      placeholder="123 Luxury Lane, Apartment 4B" 
                      type="text"
                    />
                    {errors.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">City</label>
                    <input 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={currentStep > 1}
                      className={`w-full bg-[#3d2327] border rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 ${errors.city ? 'border-red-500' : 'border-[#c5a059]/30'}`}
                      placeholder="Mumbai" 
                      type="text"
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">State</label>
                    <select 
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      disabled={currentStep > 1}
                      className="w-full bg-[#3d2327] border-[#c5a059]/30 rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 appearance-none"
                    >
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Gujarat</option>
                      <option>Rajasthan</option>
                      <option>West Bengal</option>
                      <option>Uttar Pradesh</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">PIN Code</label>
                    <input 
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      disabled={currentStep > 1}
                      className={`w-full bg-[#3d2327] border rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 ${errors.pinCode ? 'border-red-500' : 'border-[#c5a059]/30'}`}
                      placeholder="400001" 
                      type="text"
                      maxLength="6"
                    />
                    {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode}</p>}
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold mb-2 text-[#c5a059] uppercase tracking-wider">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-300 font-medium">+91</span>
                      <input 
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        disabled={currentStep > 1}
                        className={`w-full pl-14 bg-[#3d2327] border rounded-lg focus:border-[#c5a059] focus:ring-[#c5a059] text-white disabled:opacity-50 px-4 py-3 ${errors.phoneNumber ? 'border-red-500' : 'border-[#c5a059]/30'}`}
                        placeholder="9876543210" 
                        type="tel"
                        maxLength="10"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                  </div>
                </form>
              </div>
            </section>
            )}

            {/* Delivery Method Section */}
            {currentStep === 2 && (
            <section className={`bg-[#2d1618] rounded-lg border border-[#c5a059]/30 hover:shadow-md transition-shadow overflow-hidden`}>
              <div className="p-4 sm:p-6 border-b border-[#c5a059]/30 flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${currentStep === 2 ? 'text-[#c5a059]' : 'text-gray-300'}`}>local_shipping</span>
                <h2 className={`text-lg sm:text-xl font-bold ${currentStep === 2 ? 'text-white' : 'text-gray-300'}`}>
                  Delivery Method
                </h2>
              </div>
              <div className="p-4 sm:p-6 flex flex-col gap-4">
                <label className={`flex items-center justify-between p-4 sm:p-5 border-2 rounded-lg cursor-pointer transition-all ${deliveryMethod === 'standard' ? 'border-[#c5a059] bg-[#c5a059]/5' : 'border-[#c5a059]/30 hover:shadow-md hover:border-[#c5a059]/50'} ${currentStep !== 2 ? 'pointer-events-none' : ''}`}>
                  <div className="flex items-center gap-4">
                    <input 
                      checked={deliveryMethod === 'standard'}
                      onChange={() => setDeliveryMethod('standard')}
                      disabled={currentStep !== 2}
                      className="text-[#c5a059] focus:ring-[#c5a059]" 
                      name="delivery" 
                      type="radio"
                    />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-white">Standard Boutique Delivery</p>
                      <p className="text-xs sm:text-sm text-gray-300">Estimated 3-5 business days</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-white">Free</span>
                </label>
                <label className={`flex items-center justify-between p-4 sm:p-5 border rounded-lg cursor-pointer transition-all ${deliveryMethod === 'express' ? 'border-2 border-[#c5a059] bg-[#c5a059]/5' : 'border border-[#c5a059]/30 hover:shadow-md hover:border-[#c5a059]/50'} ${currentStep !== 2 ? 'pointer-events-none' : ''}`}>
                  <div className="flex items-center gap-4">
                    <input 
                      checked={deliveryMethod === 'express'}
                      onChange={() => setDeliveryMethod('express')}
                      disabled={currentStep !== 2}
                      className="text-[#c5a059] focus:ring-[#c5a059]" 
                      name="delivery" 
                      type="radio"
                    />
                    <div>
                      <p className="font-bold text-sm sm:text-base text-white">Express Hand-Delivery</p>
                      <p className="text-xs sm:text-sm text-gray-300">Guaranteed next day delivery</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm sm:text-base text-white">₹499.00</span>
                </label>
              </div>
            </section>
            )}

            {/* Payment Section */}
            {currentStep === 3 && (
            <section className={`bg-[#2d1618] rounded-lg border border-[#c5a059]/30 hover:shadow-md transition-shadow overflow-hidden`}>
              <div className="p-4 sm:p-6 border-b border-[#c5a059]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined text-xl ${currentStep === 3 ? 'text-[#c5a059]' : 'text-gray-300'}`}>payments</span>
                  <h2 className={`text-lg sm:text-xl font-bold ${currentStep === 3 ? 'text-white' : 'text-gray-300'}`}>
                    Secure Payment
                  </h2>
                </div>
                <div className="flex gap-2 opacity-50">
                  <span className="material-symbols-outlined text-xl text-gray-300">credit_card</span>
                  <span className="material-symbols-outlined text-xl text-gray-300">account_balance_wallet</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                {currentStep === 3 ? (
                  <div className="space-y-4">
                    <div className="bg-[#3d2327] border border-[#c5a059]/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="card" 
                          className="text-[#c5a059] focus:ring-[#c5a059]"
                          defaultChecked
                        />
                        <label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                          <span className="material-symbols-outlined text-[#c5a059]">credit_card</span>
                          <span className="font-bold text-white">Credit/Debit Card</span>
                        </label>
                      </div>
                      <p className="text-sm text-gray-300 ml-7">Secure payment via Razorpay</p>
                    </div>
                    
                    <div className="bg-[#3d2327] border border-[#c5a059]/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="upi" 
                          className="text-[#c5a059] focus:ring-[#c5a059]"
                        />
                        <label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                          <span className="material-symbols-outlined text-[#c5a059]">account_balance_wallet</span>
                          <span className="font-bold text-white">UPI Payment</span>
                        </label>
                      </div>
                      <p className="text-sm text-gray-300 ml-7">Google Pay, PhonePe, Paytm & more</p>
                    </div>

                    <div className="bg-[#3d2327] border border-[#c5a059]/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="cod" 
                          className="text-[#c5a059] focus:ring-[#c5a059]"
                        />
                        <label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                          <span className="material-symbols-outlined text-[#c5a059]">local_shipping</span>
                          <span className="font-bold text-white">Cash on Delivery</span>
                        </label>
                      </div>
                      <p className="text-sm text-gray-300 ml-7">Pay when you receive</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-600 text-xl">lock</span>
                      <div>
                        <p className="text-sm font-bold text-green-800">100% Secure Payment</p>
                        <p className="text-xs text-green-700 mt-1">Your payment information is encrypted and secure</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-300">
                    <p className="text-sm italic">
                      {currentStep < 2 ? 'Payment details will be requested after confirming shipping info.' : 
                       'Payment details will be requested after selecting delivery method.'}
                    </p>
                  </div>
                )}
              </div>
            </section>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              {currentStep > 1 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={isProcessing}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#c5a059] transition-colors text-sm font-medium cursor-pointer px-4 py-2 border border-[#c5a059]/30 rounded hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  Back
                </button>
              )}
              <button 
                onClick={currentStep === 3 ? handlePlaceOrder : handleContinueToPayment}
                disabled={isProcessing}
                className="ml-auto bg-[#c5a059] text-[#221013] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#c5a059]/90 transition-all flex items-center gap-3 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Processing...
                  </>
                ) : currentStep === 3 ? (
                  'Place Order'
                ) : (
                  <>
                    Continue to {currentStep === 1 ? 'Delivery' : 'Payment'}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Order Summary (Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="bg-[#2d1618] rounded-lg border border-[#c5a059]/30 hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-[#c5a059]/30">
                  <h3 className="text-base sm:text-lg font-bold text-white">Order Summary</h3>
                </div>
                
                {/* Items List */}
                <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 border-b border-[#c5a059]/30">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-20 sm:h-24 w-16 sm:w-20 flex-shrink-0 bg-[#3d2327] rounded-lg overflow-hidden border border-[#c5a059]/30">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-1">
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-white">{item.name}</h4>
                          <p className="text-[10px] sm:text-xs text-gray-300 mt-1">
                            {item.description || 'Premium Quality'}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-[10px] sm:text-xs font-medium text-gray-300">Qty: {item.quantity}</p>
                          <p className="font-bold text-xs sm:text-sm text-white">₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code */}
                <div className="p-4 sm:p-6 border-b border-[#c5a059]/30">
                  <div className="flex gap-2">
                    <input 
                      className="flex-1 bg-[#3d2327] border-[#c5a059]/30 rounded-lg text-xs sm:text-sm focus:border-[#c5a059] focus:ring-[#c5a059] uppercase tracking-wider text-white placeholder:text-gray-300/50 px-3 py-3" 
                      placeholder="Promo Code" 
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      disabled={promoApplied}
                    />
                    <button 
                      onClick={handleApplyPromo}
                      disabled={promoApplied || !promoCode.trim()}
                      className="px-3 sm:px-4 py-3 border-2 border-[#c5a059] text-[#c5a059] font-bold text-[10px] sm:text-xs uppercase rounded-lg hover:bg-[#c5a059] hover:text-[#221013] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {promoApplied ? 'Applied' : 'Apply'}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-green-500 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      Promo code applied successfully!
                    </p>
                  )}
                  <div className="mt-3 text-xs text-gray-300">
                    <p className="font-bold mb-1">Available Codes:</p>
                    <p>• WELCOME10 - 10% off</p>
                    <p>• LUXURY15 - 15% off</p>
                    <p>• FESTIVE20 - 20% off</p>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="p-4 sm:p-6 flex flex-col gap-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">GST (12%)</span>
                    <span className="text-white font-medium">₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Shipping</span>
                    {shippingCost === 0 ? (
                      <span className="text-green-500 font-bold uppercase text-[10px]">Free</span>
                    ) : (
                      <span className="text-white font-medium">₹{shippingCost.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Discount</span>
                      <span className="text-green-500 font-medium">-₹{discount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                    </div>
                  )}
                  <div className="h-[1px] bg-[#c5a059]/30 my-2"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-base sm:text-lg font-bold text-white">Grand Total</span>
                    <span className="text-xl sm:text-2xl font-bold text-[#c5a059]">
                      ₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2d1618] p-3 sm:p-4 rounded-lg border border-[#c5a059]/30 text-center hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-[#c5a059] mb-2 text-2xl">verified</span>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-300">Handcrafted Quality</p>
                </div>
                <div className="bg-[#2d1618] p-3 sm:p-4 rounded-lg border border-[#c5a059]/30 text-center hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-[#c5a059] mb-2 text-2xl">undo</span>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-300">7-Day Easy Returns</p>
                </div>
              </div>

              {/* Footer Help */}
              <div className="text-center">
                <p className="text-xs text-gray-300">Need help? Call our concierge at <span className="font-bold text-[#c5a059]">1800-BOUTIQUE</span></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />

      {/* Footer - Same as Home */}
      <footer className="bg-[#181112] text-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 sm:col-span-2">
              <div className="mb-3 sm:mb-4">
                <Link to="/">
                  <img src={logo} alt="Timeless Elegance" className="h-12 sm:h-14 lg:h-16 w-auto cursor-pointer" />
                </Link>
              </div>
              <p className="text-gray-200 max-w-sm mb-6 sm:mb-8 leading-relaxed sm:leading-loose text-sm sm:text-base">
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
              <ul className="space-y-3 sm:space-y-4 text-gray-200 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Silk Sarees</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Chiffon Collection</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Wedding Store</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-widest mb-6 sm:mb-8 text-gold">Experience</h6>
              <ul className="space-y-3 sm:space-y-4 text-gray-200 text-xs sm:text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Bespoke Couture</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 sm:pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-300 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-widest uppercase text-center md:text-left">
              © 2024 Timeless Elegance Boutique. All Rights Reserved.
            </p>
            <div className="flex gap-6 sm:gap-8 text-gray-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
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

export default Checkout;
