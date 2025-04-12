import ServiceDetail from '../../components/ServiceDetail';
import ServiceGallery from '../../components/ServiceGallery';

export default function FixingService() {
  const heroImage = null;
  
  return (
    <>
      <ServiceDetail 
        serviceKey="fixing_service"
        heroImage={heroImage}
      />
      <ServiceGallery category="fixing" />
    </>
  );
}