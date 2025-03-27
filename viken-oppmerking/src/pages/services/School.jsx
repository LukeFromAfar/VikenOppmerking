import ServiceDetail from '../../components/ServiceDetail';

export default function SchoolService() {
  // You can add specific images for this service here
  const heroImage = null; // Replace with your image path
  const galleryImages = []; // Add your gallery images here
  
  return (
    <ServiceDetail 
      serviceKey="school_service"
      heroImage={heroImage}
      galleryImages={galleryImages}
    />
  );
}