import ServiceDetail from '../../components/ServiceDetail';
import ProjectGallery from '../../components/ProjectGallery';
import { useTranslation } from 'react-i18next';
// Fix the image import path to match the actual filename
import playgroundImage from '/images/services/PlaygroundMarking.jpg';

export default function SchoolService() {
  // Update to use the playground image
  const heroImage = playgroundImage;
  const { t } = useTranslation();
  
  return (
    <>
      <ServiceDetail 
        serviceKey="school_service"
        heroImage={heroImage}
      />
      <div className="container mx-auto px-4 border-t border-gray-200 mt-12 pb-16">
        <h2 className="text-2xl font-bold pt-16 mb-8 text-center">{t('gallery')}</h2>
        <ProjectGallery />
      </div>
    </>
  );
}