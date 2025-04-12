import ServiceDetail from '../../components/ServiceDetail';
import ProjectGallery from '../../components/ProjectGallery';
import { useTranslation } from 'react-i18next';
import parkingImage from '/images/services/PaintingParkingGarage.jpg';

export default function ParkingService() {
  const heroImage = parkingImage;
  const { t } = useTranslation();
  
  return (
    <>
      <ServiceDetail 
        serviceKey="parking_service"
        heroImage={heroImage}
      />
      <div className="container mx-auto px-4 border-t border-gray-200 mt-12 pb-16">
        <h2 className="text-2xl font-bold pt-16 mb-8 text-center">{t('gallery')}</h2>
        <ProjectGallery />
      </div>
    </>
  );
}