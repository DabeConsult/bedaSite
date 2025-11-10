import React from "react";
import { Car, Shield, DollarSign, Clock, MapPin, Smartphone } from "lucide-react";
import { Link } from 'react-router-dom';
import heroimage from "../assets/B-Transport/hero-bg.svg";
import CarImage from "../assets/B-Transport/Car-image.svg";
import EnjoyRideImage from "../assets/B-Transport/Enjoy-car.svg";
import AppImage from "../assets/B-Transport/Section.svg";
import AppleImage from "../assets/B-Transport/Component 4.svg";
import playstoreImage from "../assets/B-Transport/Component-4.svg";
import AppgalleryImage from "../assets/B-Transport/Component4.svg";
import Section from "../assets/B-Transport/Section.svg";

const TransportPage = () => {
      const countries = [
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "Zambia", flag: "🇿🇲" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Ghana", flag: "🇬🇭" },
    { name: "Cameroon", flag: "🇨🇲" },
    { name: "Senegal", flag: "🇸🇳" },
    { name: "Namibia", flag: "🇳🇦" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Mozambique", flag: "🇲🇿" },
    { name: "Côte d'Ivoire", flag: "🇨🇮" },
    { name: "Bolivia", flag: "🇧🇴" },
    { name: "Guatemala", flag: "🇬🇹" },
    { name: "Peru", flag: "🇵🇪" },
    { name: "Finland", flag: "🇫🇮" },
    { name: "Norway", flag: "🇳🇴" },
    { name: "Azerbaijan", flag: "🇦🇿" },
    { name: "Angola", flag: "🇦🇴" },
    { name: "Ethiopia", flag: "🇪🇹" },
    { name: "Colombia", flag: "🇨🇴" },
    { name: "Morocco", flag: "🇲🇦" },
    { name: "Nepal", flag: "🇳🇵" },
    { name: "Egypt", flag: "🇪🇬" },
    { name: "R.D. Congo", flag: "🇨🇩" },
  ];
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-yellow-400 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="icon-transport/Logo.svg" alt="B-Transport Logo" className="h-8 w-8" />
                </div>
               
                <img src="icon-transport/Item.svg" alt="Menu Icon" className="h-10 w-10 cursor-pointer" />
            </header>

            {/* Hero Section */}
              <section 
               className="relative h-96  overflow-hidden"
               style={{
                 backgroundImage: `url(${heroimage})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
               }}
             >
               <div className="absolute inset-0"></div>

               <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                 <h1 className="text-5xl font-bold text-white mb-4">
                   Ride with comfort in <br/>Ghana
                 </h1>
                 <p className="text-xl text-white mb-6">
                   B-Transport, more than just a taxi in Ghana. Forget about regular taxis,
                   <br/>book rides, become a driver, or be a partner.
                 </p>
                 <div className="flex gap-4">
                   <Link 
                     to="https://calendly.com/beda-consult/30min"
                     target="_blank"
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-800">
                     Get Started
                   </Link>
                 </div>
               </div>
             </section>
            {/* Why B-Transport Section */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Why B-Transport is better than a taxi</h2>
                <div className="container mx-auto grid md:grid-cols-3 gap-8 max-w-5xl">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                           <img src="icon-transport/Book your rides online.svg" alt="Dollar Sign" className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Book your ride online</h3>
                        <p className="text-gray-600">No more calls to taxi services or street hailing in Ghana</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <img src="icon-transport/Container.svg" alt="Clock" className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Check the price before the ride</h3>
                        <p className="text-gray-600">You don’t need to negotiate the price — you already know it while requesting a ride</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <img src="icon-transport/Container.svg" alt="Dollar Sign" className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Track Your Car</h3>
                        <p className="text-gray-600">See the driver’s location before his arrival or track your location during the ride</p>
                    </div>
                </div>
            </section>
          <section className="py-16 px-6 bg-white">
             <div className="container mx-auto max-w-6xl">
               {/* <div className="text-center mb-12">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold">
                    Get App
                 </button>
                 <button className="ml-4 bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                    Order Now
                 </button>
                </div> */}

                 <h2 className="text-4xl font-bold text-center mb-12">Ride safe</h2>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
                     <div>
                         <h3 className="text-xl font-semibold mb-2">Route sharing</h3>
                         <p className="text-gray-600">
                             Share a link, and the others will see your location
                         </p>
                     </div>

                     <div>
                         <h3 className="text-xl font-semibold mb-2">SOS-button</h3>
                         <p className="text-gray-600">
                             One button for emergency services
                         </p>
                     </div>

                     <div>
                         <h3 className="text-xl font-semibold mb-2">24/7 support</h3>
                         <p className="text-gray-600">
                             Our team of specialists will assist you any time day and night
                         </p>
                     </div>

                     <div>
                         <h3 className="text-xl font-semibold mb-2">Verified drivers</h3>
                         <p className="text-gray-600">
                             The drivers undergo rigorous screening before the first drive
                         </p>
                     </div>
                 </div>
             </div>
            </section>
            {/* Ride Options */}
            <section className="py-16 px-6 bg-white">
              <div className="container mx-auto max-w-6xl">
                  <h2 className="text-3xl font-bold text-center mb-12">Service classes</h2>

                  {/* Vehicle Cards */}
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {/* Economy Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                          <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 h-64 flex items-center justify-center">
                              <img src={CarImage} alt="Economy Car" className="w-full h-full object-cover" />
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-lg mb-1">Economy</h3>
                              <p className="text-sm font-medium mb-3">NOTHING FANCY, JUST A GOOD OLD RIDE</p>
                              <p className="text-gray-500 text-sm mb-4">
                                  For You, Volkswagen Polo, and Hyundai Solaris
                              </p>

                              {/* Features Dropdown */}
                              <details className="mb-4">
                                  <summary className="cursor-pointer text-sm font-medium py-2 border-t border-b border-gray-200 flex justify-between items-center">
                                      Features
                                      <span className="text-gray-400">▼</span>
                                  </summary>
                                  <div className="pt-3 text-sm text-gray-600">
                                      <ul className="space-y-1">
                                          <li>• Air conditioning</li>
                                          <li>• 4 passengers</li>
                                          <li>• Standard luggage space</li>
                                      </ul>
                                  </div>
                              </details>

                              {/* <button className="w-full py-3 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                                  Order now
                              </button> */}
                          </div>
                      </div>

                      {/* Comfort Card */}
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                          <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 h-64 flex items-center justify-center">
                              <img src={CarImage} alt="Comfort Car" className="w-full h-full object-cover" />
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-lg mb-1">Comfort</h3>
                              <p className="text-sm font-medium mb-3">GET AROUND THE CITY WITH COMFORT</p>
                              <p className="text-gray-500 text-sm mb-4">
                                  Kia Rio, Mitsubishi Mirage, and Toyota Corolla
                              </p>

                              {/* Features Dropdown */}
                              <details className="mb-4">
                                  <summary className="cursor-pointer text-sm font-medium py-2 border-t border-b border-gray-200 flex justify-between items-center">
                                      Features
                                      <span className="text-gray-400">▼</span>
                                  </summary>
                                  <div className="pt-3 text-sm text-gray-600">
                                      <ul className="space-y-1">
                                          <li>• Premium air conditioning</li>
                                          <li>• 4 passengers</li>
                                          <li>• Extra luggage space</li>
                                          <li>• Comfortable seating</li>
                                      </ul>
                                  </div>
                              </details>

                              {/* <button className="w-full py-3 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                                  Order now
                              </button> */}
                          </div>
                      </div>
                  </div>
              </div>
          </section>

            {/* App Download Section */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        You can find us in <span className="text-yellow-400">Kigali</span> and <span className="text-yellow-400">Rwanda</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8  item-center  rounded-lg">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Order a ride online</h3>
                            <h5 className="text-xl ">Download the B-Transport app on iOS and Android now to book your ride instantly. </h5>
                            <div className="flex gap-4 mb-8">
                                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <p className="text-gray-500 text-xs text-center">QR Code</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="h-64  rounded-3xl flex items-center justify-center">
                            <div className="text-center">
                                <img src={EnjoyRideImage} alt="App Screenshot" className="h-full object-contain" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driver Section */}
           <section className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12">Drive with B-Transport Pro</h2>
                <h5 className="text-xl text-center mb-6">Become our partner and earn up to 7000 GHC a month</h5>
                <div className="flex justify-center">
                    <div className="flex gap-4 mb-6">
                        <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500 text-xs text-center">QR Code</p>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Join B-Transport Pro</p>
                            <p className="text-gray-600 text-sm">Start earning on your schedule. Drive when you want.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

            {/* Testimonials */}
              <section className="py-16 px-6">
                  <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-center mb-12">What people think about us</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Enam */}
                      <div className="bg-gray-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-lg text-white">
                            E
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Enam</p>
                            <p className="text-xs text-gray-600">1 w ago</p>
                          </div>
                        </div>
                       
                        <p className="text-sm text-gray-800">This app is a life saver :)) I stopped being always late because of no taxis in the streets. Now, with online request, it's much easier</p>
                        <br/>
                         <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-xl">⭐</span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Oko */}
                      <div className="bg-gray-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-lg">
                            O
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Oko</p>
                            <p className="text-xs text-gray-600">2 w ago</p>
                          </div>
                        </div>
                       
                        <p className="text-sm text-gray-800">Booking a ride with this service is a breeze. I like the simplicity, especially during busy days</p>
                     <br/>
                      <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-xl">⭐</span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Sabir */}
                      <div className="bg-gray-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-lg">
                            S
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Sabir</p>
                            <p className="text-xs text-gray-600">2 w ago</p>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-800">hassle-free rides with great cars</p>
                        <br/>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-xl">⭐</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

            {/* Partners Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                  <h2 className="text-3xl font-bold text-center mb-12">Here for you, wherever you are</h2>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                    {countries.map((country, i) => (
                      <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-4xl mb-2">{country.flag}</div>
                        <p className="text-xs font-medium text-center text-gray-700">{country.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img src="icon-transport/Logo.svg" alt="B-Transport Logo" className="h-8 w-8" />
                            </div>
                            <div>
                              <img src={playstoreImage} alt="B-transport" className="h-10 w-10"/>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Cities</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-yellow-400">Kigali</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Muhanga</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Gisenyi</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-yellow-400">Help Center</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Safety</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-yellow-400">Terms</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Privacy</a></li>
                                <li><a href="#" className="hover:text-yellow-400">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2025 B-Transport. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TransportPage;