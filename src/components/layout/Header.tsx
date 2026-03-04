import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { navItems } from '@/data/content';
import { Button, Container } from '@/components/ui';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Solano</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/invest">
              <Button size="sm">Invest Now</Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-2 font-medium ${
                  location.pathname === item.href
                    ? 'text-primary-600'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/invest" onClick={() => setIsOpen(false)}>
              <Button size="sm" fullWidth className="mt-4">Invest Now</Button>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
