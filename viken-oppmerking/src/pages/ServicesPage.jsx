import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ParkingCircle, PaintBucket, School, Warehouse, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      key: "parking",
      title: t("parking_marking"),
      description: t("parking_service_description_1").split('.')[0] + '.',
      icon: <ParkingCircle className="w-12 h-12 text-[rgb(255,169,0)]" />,
      link: "/services/parking"
    },
    {
      key: "school",
      title: t("school_yards"),
      description: t("school_service_description_1").split('.')[0] + '.',
      icon: <School className="w-12 h-12 text-[rgb(255,169,0)]" />,
      link: "/services/school"
    },
    {
      key: "cleaning",
      title: t("cleaning_services"),
      description: t("cleaning_service_description_1").split('.')[0] + '.',
      icon: <PaintBucket className="w-12 h-12 text-[rgb(255,169,0)]" />,
      link: "/services/cleaning"
    },
    {
      key: "fixing",
      title: t("fixing_services"),
      description: t("fixing_service_description_1").split('.')[0] + '.',
      icon: <Warehouse className="w-12 h-12 text-[rgb(255,169,0)]" />,
      link: "/services/fixing"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">{t('services')}</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          {t('services_description')}
        </p>
      </div>
      
      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <div key={service.key} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="p-6 flex items-start">
              <div className="mr-6 mt-1">{service.icon}</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-[rgb(255,169,0)] font-medium hover:text-[rgb(225,149,0)]"
                >
                  {t('learn_more')} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">{t('need_service')}</h3>
            <p className="text-gray-600">{t('contact_service_description')}</p>
          </div>
          <div>
            <Link 
              to="/contact" 
              className="inline-block bg-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(225,149,0)] transition duration-300"
            >
              {t('get_free_quote')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Service process section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('how_we_work')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[rgb(255,169,0)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="font-bold text-xl mb-2">{t('consultation')}</h3>
            <p className="text-gray-600">{t('consultation_description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[rgb(255,169,0)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="font-bold text-xl mb-2">{t('planning')}</h3>
            <p className="text-gray-600">{t('planning_description')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[rgb(255,169,0)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="font-bold text-xl mb-2">{t('execution')}</h3>
            <p className="text-gray-600">{t('execution_description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}