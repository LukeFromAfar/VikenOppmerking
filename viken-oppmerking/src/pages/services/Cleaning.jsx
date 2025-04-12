import ServiceDetail from '../../components/ServiceDetail';
import ServiceGallery from '../../components/ServiceGallery';

export default function CleaningService() {
  // You can add specific images for this service here
  const heroImage = null; // Replace with your image path
  
  return (
    <>
      <ServiceDetail 
        serviceKey="cleaning_service"
        heroImage={heroImage}
      />
      <ServiceGallery category="cleaning" />
    </>
  );
}