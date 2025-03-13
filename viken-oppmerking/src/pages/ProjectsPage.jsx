import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("project_1_title"),
      description: t("project_1_description"),
    },
    {
      title: t("project_2_title"),
      description: t("project_2_description"),
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('projects')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}