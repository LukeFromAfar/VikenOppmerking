import { 
  ParkingCircle, 
  PaintBucket, 
  School, 
  Warehouse, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bakgrunnsbilde from '../images/projects/Bakgrunn.jpg';

export default function HomePage() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("parking_marking"),
      icon: <ParkingCircle className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("parking_service_description_short"),
      link: "/services/parking"
    },
    {
      title: t("school_yards"),
      icon: <School className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("school_service_description_short"),
      link: "/services/school"
    },
    {
      title: t("cleaning_services"),
      icon: <PaintBucket className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("cleaning_service_description_short"),
      link: "/services/cleaning"
    },
    {
      title: t("fixing_services"),
      icon: <Warehouse className="w-12 h-12 text-[rgb(255,169,0)]" />,
      description: t("fixing_service_description_short"),
      link: "/services/fixing"
    }
  ];

  const testimonials = [
    { 
      id: 1, 
      name: t("testimonial_1_name"), 
      company: t("testimonial_1_company"), 
      text: t("testimonial_1_text")
    },
    { 
      id: 2, 
      name: t("testimonial_2_name"), 
      company: t("testimonial_2_company"), 
      text: t("testimonial_2_text")
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative text-white h-dvh flex flex-col items-center justify-center" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bakgrunnsbilde})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 relative z-10 mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            {t('professional_marking')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            {t('high_quality_services')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="text-white bg-[rgb(255,169,0)] px-6 py-3 rounded-lg font-semibold flex items-center">
              {t('get_free_quote')} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold flex items-center">
              {t('our_services')} 
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t('our_services')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('services_description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-[rgb(255,169,0)] font-medium hover:underline flex items-center">
                  {t('learn_more')} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-block bg-[rgb(255,169,0)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(235,149,0)] transition-colors duration-300">
              {t('all_services')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('we_are_viken_oppmerking')}</h2>
              <p className="text-lg mb-4">
                {t('about_us_description_1')}
              </p>
              <p className="text-lg mb-4">
                {t('about_us_description_2')}
              </p>
              <p className="text-lg mb-6">
                {t('about_us_description_3')}
              </p>
              <Link to="/contact" className="inline-flex items-center text-[rgb(255,169,0)] font-semibold hover:underline">
                {t('contact_us')} <ArrowRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-white h-80 flex items-center justify-center p-6">
                <img 
                  src="/VikenOppmerkingLogo.svg" 
                  alt="Viken Oppmerking Logo" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('what_clients_say')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg relative">
                <div className="flex text-[rgb(255,169,0)] mb-4">
                  <Star className="fill-[rgb(255,169,0)] stroke-0 w-5 h-5" />
                  <Star className="fill-[rgb(255,169,0)] stroke-0 w-5 h-5" />
                  <Star className="fill-[rgb(255,169,0)] stroke-0 w-5 h-5" />
                  <Star className="fill-[rgb(255,169,0)] stroke-0 w-5 h-5" />
                  <Star className="fill-[rgb(255,169,0)] stroke-0 w-5 h-5" />
                </div>
                <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-[rgb(255,169,0)] text-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">{t('ready_to_start')}</h2>
              <p className="text-xl max-w-xl">{t('contact_cta_description')}</p>
            </div>
            <div>
              <Link to="/contact" className="inline-block bg-white text-[rgb(255,169,0)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
                {t('contact_us')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}