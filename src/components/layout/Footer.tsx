import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPinned, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui';
import { navItems, contactInfo } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="min-w-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold text-white">Solano</span>
            </Link>
            <p className="text-sm text-gray-400">
              Invest in the future of Solano. Discover unprecedented growth opportunities in a municipality poised for rapid economic development.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    <ArrowRight size={14} className="flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPinned size={16} className="mt-0.5 flex-shrink-0" />
                <span className="truncate">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span className="truncate">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <p className="text-sm text-gray-400">{contactInfo.hours}</p>
            <Link to="/invest">
              <button className="mt-4 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                Start Investing
              </button>
            </Link>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Municipality of Solano. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
