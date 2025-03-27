import "react-image-gallery/styles/css/image-gallery.css";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("projects")}</h1>
      <p className="text-lg mb-8">{t("projects_description")}</p>
    </div>
  );
}