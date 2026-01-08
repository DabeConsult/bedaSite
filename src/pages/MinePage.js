import { useState } from 'react';
import { Activity, Zap, Database, Menu, X } from 'lucide-react';
import heroImage from '../assets/B-Mine/Hero image.svg';
import mobile from "../assets/B-Mine/Card.svg";
import { Link } from 'react-router-dom';
import Menatwork from "../assets/B-Mine/Card (1).svg"
export default function MinePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#221E1B] text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link to="/">
              <img src='icon/bmine/Navbar Brand.svg' alt="B-Mineable" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
           

            <div className="flex items-center gap-4">
              <Link to="https://calendly.com/beda-consult/30min" target='_blank' className="hidden md:block px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition">
                Get Demo
              </Link>
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

        
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Smarter Mining, Digital Solutions.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
         B-Minerals helps mining companies trace, manage, and grow their operations with advanced dashboards and mobile apps powered by B-Tech.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="https://calendly.com/beda-consult/30min" target='_blank' className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded transition font-semibold">
            Get Started
          </Link>
         
        </div>

        {/* Dashboard Preview */}
        <div className="bg-zinc-800 rounded-lg p-4 md:p-8 max-w-6xl mx-auto">
          <img src={heroImage}/>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-orange-600 transition">
              <div className="flex items-center justify-center mb-4">
              <img src='icon/bmine/icon (2).svg' className="w-20 h-20" />
              </div>
            <h3 className="text-xl font-semibold mb-2">Complete Dashboard</h3>
            <p className="text-zinc-400">
              Track production, exports, and compliance in one place.
              </p>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-orange-600 transition">
              <div className="flex items-center justify-center mb-4">
              <img src="icon/bmine/icon (1).svg" className="w-20 h-20" />
              </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Blockchain Support</h3>
            <p className="text-zinc-400">
             Gold, Diamonds, Tin, Tantalum, Wolframite—your entire portfolio covered.
            </p>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-orange-600 transition">
              <div className="flex items-center justify-center mb-4">
              <img src="icon/bmine/icon.svg" className="w-20 h-20" />
              </div>
            <h3 className="text-xl font-semibold mb-2">App Integration</h3>
            <p className="text-zinc-400">
              Seamlessly manage operations on-the-go with our secure mobile app.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose B-Minerals</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <strong>Real-Time Data</strong>
                  
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <strong>Blockchain Traceability </strong>
                  
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <strong>Custom Reporting</strong>
                
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <strong>Offline Functionality</strong>
                 
                </div>
              </li>
            </ul>
            <Link
            to="https://calendly.com/beda-consult/30min"
            target='_blank'
             className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded transition font-semibold">
              Learn More
            </Link>
          </div>

          <div className="bg-zinc-800 rounded-lg p-8 h-96 flex items-center justify-center border-2 border-dashed border-zinc-700">
            <div className="text-center">
             <img src={mobile}/>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-zinc-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-zinc-400 mb-6">
               We provide mining companies with cutting-edge technology to ensure transparency, security, and growth. Built on the foundation of Minexx’s expertise and powered by B-Tech innovation, B-Minerals is the future of digital mining solutions.
              </p>
             
              <button className="px-8 py-3 border border-zinc-600 hover:border-zinc-500 rounded transition">
                Powered By B-tech
              </button>
            </div>

            <div className="rounded-lg p-8 h-50 flex items-center justify-center ">
              <div className="text-center">
               <img src={heroImage} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="h-50 flex items-center justify-center ">
              <div className="text-center">
               <img src={Menatwork}/>
              </div>
            </div>
            <div className="h-50 flex items-center justify-center ">
              <div className="text-center">
               <img src={Menatwork}/>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold">B</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-zinc-400 mb-8">
            Ready to optimize your mining operations? Get in touch with our team today.
          </p>
          <Link
          to={"https://calendly.com/beda-consult/30min"}
          target='_blank'
          className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded transition font-semibold w-full sm:w-auto">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} B-Mineral - Powered by B-Tech</p>
        </div>
      </footer>
    </div>
  );
}