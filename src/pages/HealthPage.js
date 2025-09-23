import React from "react";
import DesktopUi from "../assets/Images/DesktopUi.png";
import MobileUi from "../assets/Images/Mobile Ui.png";

const HealthPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo placeholder */}
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-500 rounded mr-2"></div>
                            <span className="text-xl font-bold text-gray-900">HEALTH</span>
                        </div>
                        
                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                        </nav>
                        
                        {/* CTA Button */}
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                                Smarter Hospital
                                <br />
                                <span className="text-green-500">Management</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Streamline your healthcare operations with our intelligent 
                                management system. Improve patient care, reduce costs, and 
                                enhance efficiency across your entire hospital network.
                            </p>
                            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                                Get Started Today
                            </button>
                        </div>
                        
                       <div className="relative">
    {/* Main Dashboard Placeholder */}
    <div className="bg-white rounded-2xl shadow-2xl p-6 relative z-10">
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 rounded-lg mx-auto mb-4"></div>
                <img src={DesktopUi} alt="Desktop UI" className="mx-auto mb-4" />
            </div>
        </div>
    </div>
    
    {/* Mobile Dashboard Placeholder */}
    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 w-48 z-20">
        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
                <div className="w-8 h-8  rounded mx-auto mb-2"></div>
                <img src={MobileUi} alt="Mobile UI" className="mx-auto mb-2" />
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 mb-8">Trusted by leading healthcare providers</p>
                    <div className="flex justify-center items-center space-x-12 opacity-60">
                        {/* Logo placeholders */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-400">Logo {i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Every feature your team needs
                        </h2>
                        <h3 className="text-xl lg:text-2xl font-semibold text-green-500 mb-6">
                            to complete work faster
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive tools designed to streamline hospital operations, 
                            enhance patient care, and improve overall efficiency.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Patient Management</h4>
                            <p className="text-gray-600">Comprehensive patient records and care coordination</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Appointment Scheduling</h4>
                            <p className="text-gray-600">Intelligent scheduling system with automated reminders</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-purple-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Inventory Management</h4>
                            <p className="text-gray-600">Track medical supplies and equipment efficiently</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-orange-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Staff Management</h4>
                            <p className="text-gray-600">Streamlined staff scheduling and performance tracking</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-red-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Billing & Finance</h4>
                            <p className="text-gray-600">Automated billing and financial reporting systems</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-teal-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics & Reports</h4>
                            <p className="text-gray-600">Data-driven insights for better decision making</p>
                        </div>

                        {/* Feature 7 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-indigo-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Security & Compliance</h4>
                            <p className="text-gray-600">HIPAA compliant with advanced security features</p>
                        </div>

                        {/* Feature 8 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <div className="w-8 h-8 bg-pink-500 rounded"></div>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Integration Hub</h4>
                            <p className="text-gray-600">Seamless integration with existing hospital systems</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Upgrade your hospital to modern
                    </h2>
                    <p className="text-xl text-green-100 mb-8">
                        Join thousands of healthcare providers who trust our platform
                        to deliver exceptional patient care and operational efficiency.
                    </p>
                    <button className="bg-white text-green-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                        Start Free Trial
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded mr-2"></div>
                                <span className="text-xl font-bold">HEALTH</span>
                            </div>
                            <p className="text-gray-400">
                                Empowering healthcare providers with intelligent management solutions.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Security</a></li>
                                <li><a href="#" className="hover:text-white">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Help Center</a></li>
                                <li><a href="#" className="hover:text-white">Documentation</a></li>
                                <li><a href="#" className="hover:text-white">API Reference</a></li>
                                <li><a href="#" className="hover:text-white">Status</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Health Management System. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HealthPage;