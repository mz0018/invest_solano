import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/content';
import { Button, Container } from '@/components/ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <Container className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">

          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src="/img/logo.png"
              alt="Solano Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
            />

            <div className="leading-tight hidden sm:block">
              <p className="text-[10px] sm:text-xs font-semibold uppercase text-gray-600">
                Republic of the Philippines
              </p>

              <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black">
                Municipality of Solano
              </h1>

              <p className="text-xs sm:text-sm font-semibold text-gray-600">
                The Best of Vizcaya!
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors text-sm lg:text-base ${
                  location.pathname === item.href ||
                  (item.href === '/barangays' &&
                    location.pathname.startsWith('/barangays'))
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/invest">
              <Button size="sm" className="px-5 py-2">
                Invest Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-2 text-base font-medium ${
                  location.pathname === item.href ||
                  (item.href === '/barangays' &&
                    location.pathname.startsWith('/barangays'))
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link to="/invest" onClick={() => setIsOpen(false)}>
              <Button size="sm" fullWidth className="mt-4">
                Invest Now
              </Button>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}