import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceDetail({ serviceKey, heroImage, galleryImages = [] }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t(`${serviceKey}_title`)}</h1>
      
      {/* Hero image */}
      <div className="w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        {heroImage ? (
          <img 
            src={heroImage} 
            alt={t(`${serviceKey}_title`)} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">{t('image_placeholder')}</p>
          </div>
        )}
      </div>
      
      {/* Service description */}
      <div className="prose max-w-none mb-12">
        <p className="text-lg mb-4">{t(`${serviceKey}_description_1`)}</p>
        <p className="text-lg mb-4">{t(`${serviceKey}_description_2`)}</p>
        <p className="text-lg">{t(`${serviceKey}_description_3`)}</p>
      </div>
      
      {/* Gallery */}
      {galleryImages.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('gallery')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden h-48">
                <img 
                  src={image} 
                  alt={`${t(`${serviceKey}_title`)} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to action */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">{t('interested_in_service')}</h3>
        <p className="mb-6">{t('contact_for_quote')}</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold"
        >
          {t('get_free_quote')} <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}