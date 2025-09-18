import React, { useContext, useEffect, useState } from "react";
import BedaLogo from "./BedaLogo";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import SendMsg from "../pages/MailGun";
import Frame from "../assets/Images/Frame 2.png";

function BedaFooter({ bgCl }) {
  const [contact, setContact] = useState();
  const { data, loading } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [alertt, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("negative");
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "contactDetails");
      setContact(content[0].fields);
    }
  }, [loading, data]);

  const [show, setShow] = useState(false);
  const [active, setActive] = useState("");

  const showDetails = (data) => {
    setActive("");
    if (data === active) {
      setShow(!show);
      return;
    }
    setShow(true);
    setActive(data);
  };

  function isEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  function showAlert() {
    setAlert(true);
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }

  const subscribe = async (e) => {
    if (isEmail(email)) {
      await SendMsg(email, email, `Newsletter Subscription for ${email}`)
        .then((data) => {
          setAlert(true);
          showAlert();
          setAlertMsg("Newsletter Subscription Successful");
          setAlertType("positive");
          setEmail("");
        })
        .catch((error) => {
          showAlert();
          setAlertType("negative");
          setAlertMsg("Oops! Failed to subscribe, please try again");
          console.error("There was a problem sending the email:", error);
        });
    } else {
      setAlertType("negative");
      setAlertMsg("Kindly enter a valid email address.");
      showAlert();
      return;
    }
  };

  return (
    <footer className={`w-full ${bgCl} relative overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-md"></div>
      </div>

      {/* Alert Message */}
      {alertt && (
        <div
          className={`${
            alertType.toLowerCase() === "negative"
              ? "bg-red-50 border-red-400 text-red-800 shadow-red-100"
              : "bg-green-50 border-green-400 text-green-800 shadow-green-100"
          } min-w-60 md:min-w-96 border-l-4 p-4 rounded-r-lg shadow-lg backdrop-blur-sm absolute left-1/2 transform -translate-x-1/2 top-4 z-50 transition-all duration-300 ease-in-out`}
          role="alert"
        >
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              alertType.toLowerCase() === "negative" ? "bg-red-500" : "bg-green-500"
            }`}></div>
            <p className="font-semibold text-sm">
              {alertType.toLowerCase() === "negative" ? "Error" : "Success"}
            </p>
          </div>
          <p className="text-sm mt-1">{alertMsg}</p>
        </div>
      )}

      <div className="relative z-10">
        {/* Main Footer Content - Logo Left, Social Media Right */}
        <div className="container mx-auto px-6 md:px-10 lg:px-20 py-12">
          <div className="flex items-center justify-between">
            {/* Logo on the Left */}
            <div className="flex items-center">
              <img 
                src={Frame} 
                alt="Beda Consult" 
                className="h-20 md:h-24 lg:h-32 object-contain filter drop-shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>

            {/* Social Media Icons on the Right */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://web.facebook.com/BedaKaffou/"
                className="group relative overflow-hidden bg-white/10 hover:bg-blue-600 p-4 rounded-full backdrop-blur-sm border border-white/20 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/company/beda-consult"
                className="group relative overflow-hidden bg-white/10 hover:bg-blue-700 p-4 rounded-full backdrop-blur-sm border border-white/20 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BedaFooter;