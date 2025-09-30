import React from "react";
import DesktopUi from "../assets/Images/DesktopUi.png";
import DesktopUinew from "../assets/Images/image 14.svg";
import mobileuinew from "../assets/Images/iPhone 14 Pro Perspective Mockup-Photoroom 1.svg";
import MaskGroupnew from "../assets/Images/Mask group.svg";
import MobileUi from "../assets/Images/Mobile Ui.png";
import MaskGroup from "../assets/Images/Mask group.svg";
import Logo from "../assets/Images/B-HEAL+H.svg";

const HealthPage = () => { 

    return (
        <div className="min-h-screen bg-[#F2F2F2]">
            {/* Header */}
            <header className="bg-[#F2F2F2] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3 sm:py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                           <img src={Logo} alt="B-Health Logo" className="h-6 sm:h-8 w-auto" />
                        </div>
                        
                        {/* CTA Button */}
                        <a
                           href="https://calendly.com/beda-consult/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                         className="bg-green-500 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base">
                            Contact us
                        </a>
                    </div>
                </div>
            </header>
            


            {/* Hero Section */}
            <section className="bg-[#F2F2F2] py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                            Smarter Hospital
                            <br />
                            Management
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                           B-Health delivery a cloud-based platform for hospitals manage Patient, staff and Operation with ease.
                        </p>
                        <a  href="https://calendly.com/beda-consult/30min"
                            target="_blank"
                             className="bg-green-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-green-600 transition-colors">
                            Book a Demo
                        </a>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative max-w-5xl mx-auto pb-12 sm:pb-16 lg:pb-20">
                        {/* Main Desktop Dashboard */}
                        <div className="relative z-10">
                            <div className="h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
                                <img src={DesktopUinew} alt="Desktop UI" className="max-w-full max-h-full object-contain" />
                            </div>
                        </div>
                        
                        {/* Mobile Dashboard Overlay - Hidden on very small screens */}
                        <div className=" sm:block absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 right-4 sm:right-8 lg:right-12 z-20">
                            <div className="h-40 sm:h-56 md:h-72 lg:h-80 w-auto flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
                                <img src={mobileuinew} alt="Mobile UI" className="max-w-full max-h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-8 sm:py-12 bg-white-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">Trusted by these leading brands</p>
                    <div className="flex justify-center items-center space-x-6 sm:space-x-8 md:space-x-12 opacity-40">
                        <img src={MaskGroup} alt="Brand 1" className="h-10 sm:h-12 md:h-16 object-contain" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-[#F2F2F2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                            Every feature your team needs
                        </h2>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-green-500 mb-4 sm:mb-6">
                            to complete work faster
                        </h3>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                        {[
                            { icon: "/icon/Vector-2.svg", title: "Report", color: "bg-grey-100" },
                            { icon: "/icon/Vector.svg", title: "Doctors", color: "bg-white-100" },
                            { icon: "/icon/Vector-2.svg", title: "Payments", color: "bg-white-100" },
                            { icon: "/icon/Vector-1.svg", title: "Pharmacy", color: "bg-white-100" },
                            { icon: "/icon/Vector (2).svg", title: "Beds", color: "bg-white-100" },
                            { icon: "/icon/Vector (1).svg", title: "Blood Bank", color: "bg-white-100" },
                            { icon: "/icon/Vector-3.svg", title: "Laboratory", color: "bg-white-100" },
                            { icon: "/icon/Vector (4).svg", title: "Nurse", color: "bg-white-100" },
                            { icon: "/icon/Vector-5.svg", title: "Notice Board", color: "bg-white-100" },
                            { icon: "/icon/Vector (3).svg", title: "Patient", color: "bg-white-100" }
                        ].map((feature, index) => (
                            <div key={index} className="text-center p-3 sm:p-4">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                                    <img 
                                        src={feature.icon} 
                                        alt={feature.title}
                                        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain"
                                    />
                                </div>
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900">{feature.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 px-4 leading-tight">
                        Upgrade your hospital to modern
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        digital care today!
                    </h2>
                    <a href="https://calendly.com/beda-consult/30min"
                            target="_blank"
                             className="bg-green-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-green-600 transition-colors">
                        Get Started
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-white py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-3 sm:mb-4">
                           
                            <img src={Logo} alt="B-Health Logo" className="h-6 sm:h-8 w-auto" />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                            © B-Health Hospital Management System.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Powered by B-Tech 2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HealthPage;