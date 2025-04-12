import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Building, Check } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // This encoding is required for Netlify forms
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Add form-name field for Netlify form identification
      formData.append('form-name', 'contact');
      
      // Submit the form
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // Show success message and reset form
      setIsSubmitted(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('contact_us')}</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        {t('contact_service_description')}
      </p>
      
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Information */}
        <div className="lg:w-2/5">
          <div className="bg-white rounded-xl shadow-md p-8 h-full">
            <h2 className="text-2xl font-bold mb-6">{t('contact_information')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[rgb(255,169,0)] rounded-full p-3 mr-4">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Viken Oppmerking</h3>
                  <p className="text-gray-600">Org nr: 926773305</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[rgb(255,169,0)] rounded-full p-3 mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('address')}</h3>
                  <p className="text-gray-600">Brendsrudveien 22</p>
                  <p className="text-gray-600">1383 Asker</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[rgb(255,169,0)] rounded-full p-3 mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('phone')}</h3>
                  <a href="tel:+4799232486" className="text-gray-600 hover:text-[rgb(255,169,0)]">
                    +47 992 32 486
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[rgb(255,169,0)] rounded-full p-3 mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('email')}</h3>
                  <a href="mailto:vikenoppmerking@gmail.com" className="text-gray-600 hover:text-[rgb(255,169,0)]">
                    vikenoppmerking@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder - Replace with actual Google Maps embed */}
            <div className="mt-8 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.2721046518852!2d10.4336991!3d59.8445741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416c9ca00d4e69%3A0x99d2449ceb44e4c2!2sBrendsrudveien%2022%2C%201383%20Asker!5e0!3m2!1sno!2sno!4v1654245566769!5m2!1sno!2sno" 
                width="100%" 
                height="100%" 
                className="rounded-lg"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-3/5">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">{t('send_inquiry')}</h2>
            
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-green-700">{t('form_success')}</span>
              </div>
            )}
            
            {/* Netlify Form */}
            <form 
              name="contact"
              method="POST"
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Netlify form detection - hidden */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('full_name')} *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('fullName', { required: true })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{t('field_required')}</p>
                  )}
                </div>
                
                {/* Company Name (optional) */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('company_name')}
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition"
                    {...register('companyName')}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone (optional) */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('phone_number')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition"
                    {...register('phone')}
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('email')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', { 
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                  />
                  {errors.email?.type === 'required' && (
                    <p className="mt-1 text-sm text-red-600">{t('field_required')}</p>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <p className="mt-1 text-sm text-red-600">{t('invalid_email')}</p>
                  )}
                </div>
              </div>
              
              {/* Location Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('work_address')} *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('address', { required: false })}
                />
              </div>
              
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('subject')} *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('subject', { required: true })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{t('field_required')}</p>
                )}
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[rgb(255,169,0)] focus:border-transparent outline-none transition ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{t('field_required')}</p>
                )}
              </div>
              
              {/* reCAPTCHA */}
              <div className="mt-4" data-netlify-recaptcha="true"></div>
              
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(255,169,0)] hover:bg-[rgb(235,149,0)] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('sending')}
                    </span>
                  ) : (
                    t('send_inquiry')
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}