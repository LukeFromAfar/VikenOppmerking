import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 text-center">
      {/* 404 Graphic */}
      <div className="relative mb-8">
        <div className="text-[8rem] md:text-[12rem] font-bold text-gray-200">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Search className="w-20 h-20 md:w-32 md:h-32 text-[rgb(255,169,0)]" />
        </div>
      </div>
      
      {/* Message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {t('page_not_found') || 'Page Not Found'}
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        {t('page_not_found_message') || 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
      </p>
      
      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link 
          to="/" 
          className="flex-1 bg-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-[rgb(235,149,0)] transition-colors duration-300"
        >
          <Home className="mr-2 w-5 h-5" />
          {t('go_home') || 'Go Home'}
        </Link>
        
        <button 
          onClick={() => window.history.back()} 
          className="flex-1 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          {t('go_back') || 'Go Back'}
        </button>
      </div>
    </div>
  );
}
