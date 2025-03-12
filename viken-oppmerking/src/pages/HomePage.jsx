import { 
  ParkingCircle, 
  PaintBucket, 
  School, 
  Warehouse, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("parking_marking"),
      icon: <ParkingCircle className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("professional_marking"),
    },
    {
      title: t("road_lights_crosswalks"),
      icon: <PaintBucket className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("high_quality_services"),
    },
    {
      title: t("school_yards"),
      icon: <School className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("high_quality_services"),
    },
    {
      title: t("industrial_marking"),
      icon: <Warehouse className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("high_quality_services"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-[rgb(255,169,0)] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">
            {t('professional_marking')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            {t('high_quality_services')}
          </p>
          <Link to="/contact" className="bg-white text-[rgb(255,169,0)] px-6 py-3 rounded-lg font-semibold flex items-center inline-flex">
            {t('get_free_quote')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <section id="tjenester" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('our_services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-block bg-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold">
              {t('services')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}