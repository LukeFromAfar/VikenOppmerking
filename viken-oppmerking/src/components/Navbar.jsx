import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  const SCROLL_THRESHOLD = 60; // Adjust this value based on your layout

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Always show the navbar when at the top or within threshold
      if (currentScrollPos < SCROLL_THRESHOLD) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }
      
      // Show navbar when scrolling up, hide when scrolling down
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header 
      className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            <img src="/VikenOppmerkingLogo.svg" alt="Viken Oppmerking Logo" className="max-h-16" />
          </Link>
          
          <div className="flex items-center ml-auto space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-orange-600">{t('home')}</Link>
              
              {/* Hoverable Services dropdown using CSS :hover */}
              <div className="group relative">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-gray-600 group-hover:text-orange-600 focus:outline-none"
                >
                  {t('services')}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                
                {/* Dropdown menu with CSS hover handling */}
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-1 z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link
                    to="/services/parking"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {t('parking_marking')}
                  </Link>
                  <Link
                    to="/services/school"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {t('school_yards')}
                  </Link>
                  <Link
                    to="/services/cleaning"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {t('cleaning_services')}
                  </Link>
                  <Link
                    to="/services/fixing"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {t('fixing_services')}
                  </Link>
                </div>
              </div>
              {/* <Link to="/materials" className="text-gray-600 hover:text-orange-600">{t('materials')}</Link> */}
              <Link to="/contact" className="text-gray-600 hover:text-orange-600">{t('contact')}</Link>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-orange-600 focus:outline-none bg-transparent p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="relative">
              <HeadlessMenu>
                <MenuButton className="text-gray-600 hover:text-gray-800 focus:outline-none px-4 py-2">
                  <Globe size={16} />
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-1">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => changeLanguage('en')}
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-gray-700`}
                        >
                          English
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => changeLanguage('no')}
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block w-full text-left px-4 py-2 text-gray-700`}
                        >
                          Norsk
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </HeadlessMenu>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
            <div className="flex flex-col items-center py-4">
              <Link to="/" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('home')}</Link>
              
              {/* Mobile services dropdown */}
              <div className="w-full">
                <Link 
                  to="/services" 
                  className="py-2 block text-center text-gray-600 hover:text-orange-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('services')}
                </Link>
                
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-center py-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {servicesOpen && (
                  <div className="w-full bg-gray-50 py-2">
                    <Link 
                      to="/services/parking" 
                      className="py-2 block text-center text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('parking_marking')}
                    </Link>
                    <Link 
                      to="/services/school" 
                      className="py-2 block text-center text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('school_yards')}
                    </Link>
                    <Link 
                      to="/services/cleaning" 
                      className="py-2 block text-center text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('cleaning_services')}
                    </Link>
                    <Link 
                      to="/services/fixing" 
                      className="py-2 block text-center text-gray-600 hover:text-orange-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('fixing_services')}
                    </Link>
                  </div>
                )}
              </div>
              
              {/* <Link to="/materials" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('materials')}</Link> */}
              <Link to="/contact" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}