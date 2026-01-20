import { useState } from 'react';

/**
 * Mobile Navigation Menu Component
 * Mobile-First Responsive Navigation with slide-out drawer
 */
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white hover:text-primary transition-colors z-50 relative"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-background-dark z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#3d2a2d]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">
                filter_vintage
              </span>
              <h2 className="text-white text-lg font-bold font-serif">
                Menu
              </h2>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    checkroom
                  </span>
                  Sarees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    spa
                  </span>
                  Lehengas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    auto_awesome
                  </span>
                  Indo-Western
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    diamond
                  </span>
                  Bridal Edit
                </a>
              </li>
            </ul>

            {/* Divider */}
            <div className="my-6 border-t border-[#3d2a2d]" />

            {/* Secondary Menu */}
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    info
                  </span>
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    location_on
                  </span>
                  Store Locator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-6 py-3 text-white hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  <span className="material-symbols-outlined text-xl mr-3">
                    mail
                  </span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#3d2a2d] space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-[#3d2a2d] rounded-lg px-3 py-2">
              <span className="material-symbols-outlined text-gray-500 text-xl">
                search
              </span>
              <input
                type="search"
                className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 placeholder:text-gray-500"
                placeholder="Search..."
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="size-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                href="#"
                className="size-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-lg">camera</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
