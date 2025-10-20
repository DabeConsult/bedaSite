import React from 'react';
import { Building2, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import LogoHeader from '../assets/B-Housing Images/LogoHeader.svg';
import LogoFooter from '../assets/B-Housing Images/LogoFooter.svg';
import HeroImage from '../assets/B-Housing Images/BACKGORUND.svg';
import ModernHouse from '../assets/B-Housing Images/Image_fx (53) 1.svg';
import LogoCompany from '../assets/B-Housing Images/Pattern.svg';
import ScheduleImage from '../assets/B-Housing Images/ScheduleImage.svg';
import { Link } from 'react-router-dom';

export default function HousingPage() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mgvndlnz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          serviceType: formData.serviceType,
          additionalInfo: formData.additionalInfo,
          _replyto: formData.email,
          _subject: `New B-Housing Inquiry from ${formData.fullName}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          additionalInfo: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={HeroImage} 
            alt="Modern housing" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Header */}
        <header className="relative z-10 flex items-center justify-start px-8 py-8">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={LogoHeader} alt="BETA Housing Logo" className="h-30" />
            </Link>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smarter Housing,<br />Real Solutions
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed">
            We use innovation, policy, and technology to make housing<br/>
            supply sustainable, efficient, and inclusive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link to="https://calendly.com/beda-consult/30min" target='_blank' className="bg-gray-900 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition shadow-lg">
              Book Appointment
            </Link>
            <Link to="https://calendly.com/beda-consult/30min" target='_blank' className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded font-semibold transition border border-white/50 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Partners */}
          <div className="mt-16">
            <p className="text-white/90 text-sm mb-4">Trusted by these leading brands</p>
            <div className="flex items-center justify-center gap-6">
              <img src={LogoCompany} alt="Partner Logos" className="h-15 object-contain opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">The Value We Bring</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          At B-Housing, we focus on solving the toughest challenges in housing by combining policy, finance, and technology
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src='icon/bhouse/value/Vector.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Increase Housing Supply</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unlock growth opportunities, adaptive reuse, and new funding.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src='icon/bhouse/value/Vector-2.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Housing Technology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Apply AI and tools to boost production and services.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src='icon/bhouse/value/Vector-1.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Inclusive Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Develop housing for vulnerable and hard-to-house populations.
            </p>
          </div>
        </div>
      </section>

      {/* Climate Smart Section */}
      <section className="py-20 px-6 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          {/* Card with background image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-150">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={ModernHouse}
                alt="Modern architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Climate-Smart Housing</h2>
              <p className="text-base text-gray-200 mb-8 max-w-2xl">
                At B-Housing, we focus on solving the toughest challenges in housing by combining policy, finance, and technology.
              </p>

              {/* Why Choose Section */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Why Choose Beta Housing</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-10 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src='icon/bhouse/Vector.svg' alt='icon' className="w-10 h-10 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Verified Land Ownership</h4>
                  </div>

                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-10 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src='icon/bhouse/Vector-1.svg' alt='icon' className="w-10 h-10 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Quality builds with modern standards</h4>
                  </div>

                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-10 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src='icon/bhouse/Vector-2.svg' alt='icon' className="w-10 h-10 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Trusted partner for communities, governments and investors</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button outside the card */}
          <div className="flex justify-center mt-8">
            <Link to="https://calendly.com/beda-consult/30min" target='_blank' className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition shadow-lg flex items-center gap-2">
              Contact us today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
         

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden  h-auto">
              <img 
                src={ScheduleImage}
                alt="Contact us" 
                className="w-full" />
              
            
              
              
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div>
                  <label htmlFor="fullName" className="text-gray-700 text-sm font-semibold block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700 text-sm font-semibold block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-700 text-sm font-semibold block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
                    placeholder="+250 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="text-gray-700 text-sm font-semibold block mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm resize-none"
                    placeholder="Tell us more about your housing needs..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="font-semibold">Success!</strong>
                      <p>Your inquiry has been submitted.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="font-semibold">Error!</strong>
                      <p>Something went wrong. Please try again or email us directly at admin@bedaconsult.com</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-2 mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

               
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={LogoFooter} alt="BETA Housing Logo" className="h-20" />
          </div>
          <p className="text-gray-400 text-1xl">© B-Housing, Powered by B-Tech. 2025.</p>
        </div>
      </footer>
    </div>
  );
}