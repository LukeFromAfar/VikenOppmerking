import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            <img src="/VikenOppmerkingLogo.svg" alt="Viken Oppmerking Logo" className="max-h-16" />
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-orange-600">{t('home')}</Link>
            <Link to="/services" className="text-gray-600 hover:text-orange-600">{t('services')}</Link>
            <Link to="/projects" className="text-gray-600 hover:text-orange-600">{t('projects')}</Link>
            <Link to="/materials" className="text-gray-600 hover:text-orange-600">{t('materials')}</Link>
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
              <MenuButton className="text-gray-600 hover:text-gray-800 focus:outline-none px-4 py-2  rounded-md">
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
        
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
            <div className="flex flex-col items-center py-4">
              <Link to="/" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('home')}</Link>
              <Link to="/services" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('services')}</Link>
              <Link to="/projects" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('projects')}</Link>
              <Link to="/materials" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('materials')}</Link>
              <Link to="/contact" className="py-2 text-gray-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}