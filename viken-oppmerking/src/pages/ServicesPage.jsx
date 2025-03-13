import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("parking_marking"),
      description: t("professional_marking"),
    },
    {
      title: t("road_lights_crosswalks"),
      description: t("high_quality_services"),
    },
    {
      title: t("school_yards"),
      description: t("high_quality_services"),
    },
    {
      title: t("industrial_marking"),
      description: t("high_quality_services"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('services')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}