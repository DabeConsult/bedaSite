import React, { useContext, useEffect, useState } from "react";
import { FaPhoneAlt, FaSkype } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import SendMsg from "../pages/MailGun";
import { AiFillSkype } from "react-icons/ai";
import { color } from "framer-motion";

function ContactUsComp() {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertt, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("negative");
  const [alertMsg, setAlertMsg] = useState("");

  const [contact, setContact] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "contactDetails");
      setContact(content[0].fields);
    }
  }, [loading, data]);

  const contactCard = [
    {
      icon: <FaSkype />,
      name: "Skype",
      value: <a href={`skype:${contact?.phone}?call`} > Start Call</a>,
    },
    {
      icon: <MdOutlineEmail />,
      name: "Email",
      value: contact?.email,
    },
  ];

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

  async function sendEmail(e) {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setAlertType("negative");
      setAlertMsg("All fields are required.");
      showAlert();
      return;
    }

    if (isEmail(email)) {
      await SendMsg(email, name, message)
        .then((data) => {
          setAlert(true);
          showAlert();
          setAlertMsg("Yaay! Message sent.");
          setAlertType("positive");
          console.log("Email sent successfully:", data);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          showAlert();
          setAlertType("negative");
          setAlertMsg("Oops! Failed to send message, please try again");
          console.error("There was a problem sending the email:", error);
        });
    } else {
      setAlertType("negative");
      setAlertMsg("Kindly enter a valid email address.");
      showAlert();
      return;
    }

    if (agree) {
      if (isEmail(email)) {
        await SendMsg(email, email, `Newsletter Subscription for ${email}`)
          .then((data) => {
            setAlert(true);
            showAlert();
            setAlertMsg("Newsletter Subscription Successful");
            setAlertType("positive");
            setName("");
            setEmail("");
            setMessage("");
            setAgree(false);
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
    }
  }

  return (
    <div className="cnctBg2 w-full min-h-screen max-h-fit relative overflow-hidden">
      {/* <div className="srvBg w-full h-full absolute"></div> */}
      <div className="w-full h-44 flex flex-col justify-center px-[24px] md:px-[64px] lg:px-[150px]">
        <div className="text-white z-20">
          <p className="flex text-slate-300 items-center">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; Contact Us &nbsp;
          </p>
          <p className=" text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
            Contact Us
          </p>
        </div>
      </div>
      <div className="w-full min-h-72 max-h-fit px-[24px] md:px-[64px] lg:px-[150px] mt-10">
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-2 py-5 border-t-2 border-b-2 border-dotted border-y-[#6e6f711e]">
          <div className="w-full lg:w-1/3 lg:h-full flex items-center">
            <p className="font-bold text-4xl md:text-6xl text-white leading-[1.2]">
              Let's get in touch!
            </p>
          </div>
          <div className="w-full lg:w-2/3 mt-5 lg:mt-0 lg:h-full flex flex-col md:flex-row items-center gap-5">
            {contactCard.map((card, index) => (
              <div
                key={index}
                className={` ${
                  index === 1 ? "w-80" : "w-72"
                } h-52 rounded-lg p-10 bg-[#3A5581] text-white`}
              >
                <div className="w-full h-2/4">
                  <div className="w-fit p-3 rounded-full border">
                    {card.icon}
                  </div>
                </div>
                <div className="w-full h-1/4">
                  <p className="font-thin">{card.name}</p>
                </div>
                <div className="w-full h-1/4">
                  <p className="font-bold">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] md:h-[660px] px-[24px] md:px-[60px] lg:px-[100px] mt-10 lg:flex lg:justify-center">
        <div className="w-5/6 ">
          <div className="w-[320px] md:w-[550px] lg:w-[630px] h-[400px] relative">
            {alertt && (
              <div
                class={`${
                  alertType.toLowerCase() === "negative"
                    ? "bg-orange-100 border-orange-500 text-orange-700"
                    : "bg-teal-300 border-teal-700 text-black"
                } min-w-60 md:min-w-80 border-l-4  p-4 absolute left-14 md:left-40 -bottom-14 z-50`}
                role="alert"
              >
                <p class="font-bold ">
                  {alertType.toLowerCase() === "negative" ? "Error" : "Success"}
                </p>
                <p>{alertMsg}</p>
              </div>
            )}

            {/* <div className="w-full bg-red-400 h-[1000px] md:h-[900px] lg:h-[700px] px-[24px] md:px-[64px] lg:px-[150px] mt-10 relative"> */}
            <div className="w-[320px] md:w-[550px] lg:w-[600px] h-[380px] rounded-2xl overflow-hidden absolute top-1 left-1">
              <iframe
                title="MapImage"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.51453843681!2d30.1299327113598!3d-1.9471645366990236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca71254a22233%3A0xeed655a729a9ae6b!2sKG%2097%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sgh!4v1721244981413!5m2!1sen!2sgh"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9421711617524!2d-0.28538792688950276!3d5.57556833345648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf992979bdf137%3A0x8287535666ec5588!2sBeda%20Techsurance%20Ltd!5e0!3m2!1sen!2sgh!4v1716983439158!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <form
              onSubmit={sendEmail}
              className="w-[320px] md:w-[550px] lg:w-[550px] h-[520px] md:h-[350px] p-3 bg-[#92DEED] rounded-2xl absolute -bottom-[380px] -right-8 md:-bottom-[200px] md:-right-[100px] lg:-right-[200px] z-20"
            >
              {/* <div className="w-[320px] md:w-[550px] lg:w-[600px] h-fit md:h-[400px] p-7 bg-[#92DEED] rounded-lg absolute top-[367px] right-[25px] md:top-[370px] md:right-[40px] lg:top-28  lg:right-40 z-20"> */}
              <p className="text-xl md:text-2xl font-extrabold">
                Send Us A Message
              </p>
              <p className="text-xs md:text-sm">
                Have any questions regarding our services? Send us your message.
              </p>
              <div className="w-full h-40 md:h-16 mt-3 flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-full md:w-1/2 h-full">
                  <p className="h-1/3 p-0 m-0 font-bold">Name</p>
                  <input
                    onInput={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Enter your name.."
                    className="w-full h-[60%] border rounded-xl px-5 text-sm"
                    name="name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 h-full">
                  <p className="h-1/3 p-0 m-0 font-bold">Email</p>
                  <input
                    onInput={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Enter your email address.."
                    className="w-full h-[60%] border rounded-xl px-5 text-sm"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="w-full h-fit mt-2">
                <p className="h-fit p-0 m-0 font-bold">Message</p>
                <textarea
                  onInput={(e) => setMessage(e.target.value)}
                  value={message}
                  className="w-full h-[100px] text-sm rounded-xl m-0 p-5 outline-none resize-none"
                  placeholder="Enter your message..."
                  name="message"
                ></textarea>
              </div>
              <div className="w-full h-fit md:h-12 flex flex-col md:flex-row items-center gap-3 ">
                <div className="w-full md:w-4/5 h-16 md:h-full flex items-center">
                  <div className="w-[10%] md:w-[5%]  h-full flex items-center">
                    <input
                      onClick={() => setAgree(!agree)}
                      checked={agree}
                      type="checkbox"
                      className=""
                    />
                  </div>
                  <div className="w-[90%] md:w-[95%] ">
                    <p className="text-xs font-semibold">
                      By ticking this box, I am consenting to be sent monthly
                      articles and promotions through newsletters.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/5 h-12 md:h-full flex items-center justify-end ">
                  <button
                    type="submit"
                    // onClick={() => submitMsg()}
                    className="h-2/3 px-5 rounded-md text-white bg-[#3A5581]"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* <div className="w-2/3 h-12 mx-[18%] absolute bottom-20 p-5 rounded-2xl bg-[#3ba3f3d1] z-50">
              Hello
            </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComp;
