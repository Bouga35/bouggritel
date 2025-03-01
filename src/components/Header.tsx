import  { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import image from "../assets/logos/image.png"
interface HeaderProps {
  onShowServices: () => void; // Add this prop
}

export function Header({ onShowServices }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', link: 'home' },
    { name: 'Services', link: 'services', onClick: onShowServices }, // Add onClick for Services
    { name: 'Produits', link: 'products' },
    { name: 'Clients', link: 'clients' },
    { name: 'Carrières', link: 'careers' },
    { name: 'À Propos', link: 'about' },
    { name: 'Contact', link: 'contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-blue-600"><a href="/">
          <img 
            src={image} // Path relative to the public folder
            alt="Gritel Logo"
            className="h-12 w-auto object-contain"
          />
        </a></div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.link === 'services' ? '#' : `#${item.link}`} // Use '#' for Services to prevent page jump
                onClick={item.link === 'services' ? item.onClick : undefined} // Call onClick for Services
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-white`}>
        <div className="container mx-auto px-4 py-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link === 'services' ? '#' : `#${item.link}`} // Use '#' for Services to prevent page jump
              onClick={item.link === 'services' ? item.onClick : undefined} // Call onClick for Services
              className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}