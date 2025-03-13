import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function MaterialsPage() {
  const { t } = useTranslation();

  const materials = [
    {
      title: t("material_1_title"),
      description: t("material_1_description"),
    },
    {
      title: t("material_2_title"),
      description: t("material_2_description"),
    },
    // Add more materials as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('materials')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{material.title}</h2>
            <p className="text-gray-600">{material.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}