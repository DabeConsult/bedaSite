import React, { useContext, useEffect, useState } from "react";
import BedaLogo from "./BedaLogo";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import SendMsg from "../pages/MailGun";

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
    // Regular expression for validating email format
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
    <div
      className={`w-full lg:w-[800px] flex flex-col lg:flex-row gap-5 pt-10 ${bgCl}`}
    >
      <div className="w-4/6 lg:w-[200px] h-32 flex justify-start items-center lg:items-start mb-5 ">
        <BedaLogo />
      </div>

      {/* lg:px-5 cos its not starting */}
      <div className="w-full lg:w-[600px] flex justify-center lg:justify-end z-50">
        {/* <div className="w-full px-6 md:px-10 lg:px-5 flex justify-center lg:justify-end z-50"> */}
        <div className="w-full grid grid-cols-1 md:mt-5 md:grid-cols-3 md:gap-5 mb-32">
          <div className="w-full px-2 z-50 relative">

          {alertt && (
              <div
                class={`${
                  alertType.toLowerCase() === "negative"
                    ? "bg-orange-100 border-orange-500 text-orange-700"
                    : "bg-teal-300 border-teal-700 text-black"
                } min-w-60 md:min-w-80 border-l-4  p-4 absolute left-20 md:left-20 -top-28`}
                role="alert"
              >
                <p class="font-bold ">
                  {alertType.toLowerCase() === "negative" ? "Error" : "Success"}
                </p>
                <p>{alertMsg}</p>
              </div>
            )}

            <p className="text-white font-bold text-lg">Newsletter</p>
            <div className="w-64 md:w-full border-b border-b-white flex gap-2 py-1 mt-5">
              <input
                name="EMAIL"
                onInput={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none border-none  text-white"
              ></input>
              <FaArrowRight
                className="font-normal text-white cursor-pointer"
                onClick={() => subscribe()}
                // onClick={() => submitSubscription()}
              />
            </div>
            <div className="w-full flex items-center justify-start mt-16 lg:mt-28">
              <div className="w-14 h-7">
                <a href="https://web.facebook.com/BedaKaffou/">
                  <AiFillFacebook className="w-full h-full text-white " />
                  {/* <img
                    src={socials}
                    alt="img"
                    className="w-full h-full object-contain"
                  /> */}
                </a>
              </div>
              <div className="w-14 h-7">
                <a href="https://www.linkedin.com/company/beda-consult">
                  <AiFillLinkedin className="w-full h-full text-white" />
                  {/* <img
                    src={IG}
                    alt="img"
                    className="w-full h-full object-contain"
                  /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden w-full flex md:flex-col gap-5 flex-wrap mt-10 mb-2 md:mt-0 px-3 md:px-10 z-50">
            <p className="md:hidden underline text-white font-bold text-lg">
              Explore
            </p>
          </div>
          <div className="w-full flex md:flex-col gap-5 md:gap-0 flex-wrap md:mt-0 px-3 md:px-10 z-50">
            <p className="hidden md:flex text-white font-bold text-lg">
              Explore
            </p>
            <div className="text-[#e8e7e7] md:mt-10 ">
              <RouteLink
                to="/aboutUs"
                className="text-left cursor-pointer transition hover:text-[#4ac9ff]"
              >
                About Us
              </RouteLink>
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <RouteLink
                to={"/services"}
                className="text-left cursor-pointer transition hover:text-[#4ac9ff]"
              >
                Services
              </RouteLink>
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <RouteLink
                to={"/projects"}
                className="text-left cursor-pointer transition hover:text-[#4ac9ff]"
              >
                Projects
              </RouteLink>
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <RouteLink
                to={"/blog"}
                className="text-left cursor-pointer transition hover:text-[#4ac9ff]"
              >
                Blog
              </RouteLink>
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <RouteLink
                to={"/contactUs"}
                className="text-left cursor-pointer transition hover:text-[#4ac9ff]"
              >
                Contact Us
              </RouteLink>
            </div>
          </div>

          <div className="md:hidden w-full flex md:flex-col gap-5 mb-2 md:gap-0 md:mt-0 px-2 z-50">
            <p className="md:hidden underline mt-10 text-white font-bold text-lg">
              Contact
            </p>
          </div>

          <div className="w-full flex md:flex-col gap-5 md:gap-0 md:mt-0 px-2 z-50">
            <p className=" hidden md:flex text-white font-bold text-lg">
              Contact
            </p>
            <div className="text-[#e8e7e7] md:mt-10">
              <p
                onClick={() => showDetails("Email")}
                className={`${
                  active === "Email" ? "text-[#4ac9ff]" : "text-white"
                } text-left cursor-pointer transition hover:text-[#4ac9ff]`}
              >
                Email
              </p>
              {active === "Email" && show && (
                <p className="max-w-10 md:w-auto text-sm text-slate-400 pl-3">
                  {contact?.email}
                </p>
              )}
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <p
                onClick={() => showDetails("Phone")}
                className={`${
                  active === "Phone" ? "text-[#4ac9ff]" : "text-white"
                } text-left cursor-pointer transition hover:text-[#4ac9ff]`}
              >
                Skype
              </p>
              {active === "Phone" && show && (
                <p className="max-w-10 md:w-auto text-sm text-slate-400 pl-3">
                  <a href={`skype:${contact?.phone}?call`} > Call</a>
                  {/* {contact?.phone} */}
                </p>
              )}
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <p
                onClick={() => showDetails("Address")}
                className={`${
                  active === "Address" ? "text-[#4ac9ff]" : "text-white"
                } text-left cursor-pointer transition hover:text-[#4ac9ff]`}
              >
                Address
              </p>
              {active === "Address" && show && (
                <p className="max-w-10 md:w-auto text-sm text-slate-400 pl-3">
                  {contact?.address}
                </p>
              )}
            </div>
            <div className="text-[#e8e7e7] md:mt-5">
              <p
                onClick={() => showDetails("Social")}
                className={`${
                  active === "Social" ? "text-[#4ac9ff]" : "text-white"
                } text-left cursor-pointer transition hover:text-[#4ac9ff]`}
              >
                Social Media
              </p>
              {active === "Social" && show && (
                <div className="flex flex-col px-3 gap-2">
                  <a
                    href="https://web.facebook.com/BedaKaffou/"
                    className="max-w-10 md:w-auto text-sm text-slate-400"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.linkedin.com/company/beda-consult"
                    className="max-w-10 md:w-auto text-sm text-slate-400"
                  >
                    Linkedin
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BedaFooter;
