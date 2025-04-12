import ServiceDetail from '../../components/ServiceDetail';
import ServiceGallery from '../../components/ServiceGallery';

export default function SchoolService() {
  const heroImage = null;
  
  return (
    <>
      <ServiceDetail 
        serviceKey="school_service"
        heroImage={heroImage}
      />
      <ServiceGallery category="school" />
    </>
  );
}