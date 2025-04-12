import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Viken Oppmerking</h3>
            <p>Org nr: 926773305</p>
            <p>Brendsrudveien 22</p>
            <p>1383 Asker</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <p className="flex items-center mb-2">
              <Phone size={18} className="mr-2" /> +47 992 32 486
            </p>
            <p className="flex items-center mb-2">
              <Mail size={18} className="mr-2" /> vikenoppmerking@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin size={18} className="mr-2" /> Asker, Norge
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('navigation')}</h3>
            <ul>
              <li className="mb-2"><Link to="/" className="text-white hover:text-[rgb(255,169,0)]">{t('home')}</Link></li>
              <li className="mb-2"><Link to="/services" className="text-white hover:text-[rgb(255,169,0)]">{t('services')}</Link></li>
              {/* <li className="mb-2"><Link to="/materials" className="text-white hover:text-[rgb(255,169,0)]">{t('materials')}</Link></li> */}
              <li><Link to="/contact" className="text-white hover:text-[rgb(255,169,0)]">{t('contact')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Viken Oppmerking</p>
        </div>
      </div>
    </footer>
  );
}