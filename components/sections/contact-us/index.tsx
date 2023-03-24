import Image from "next/image";
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import withLazyComponent from "../../lazy-load/with-lazy-component";
const footerSections = [
  // { name: "CONTACT" },
  // { name: "CSR" },
  // { name: "ABOUT US" },
  // { name: "CAREER" },
  // { name: "COOKIES" },
  // { name: "PRIVACY POLICY" },
  // { name: "GENERAL TERMS AND CONDITIONS" },
  // { name: "BUSINESS TERMS" },
];

const Footer = () => {
  return (
    <footer className="text-[#E4E4E4] flex flex-col items-center bg-gray">
      {footerSections?.length > 0 && (
        <div className="flex flex-row flex-wrap items-center justify-center">
          {footerSections.map((section, index) => (
            <div
              className=" mx-2 md:mx-6  text-base md:text-2xl inline-block relative
            before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-green-400 before:transition-all before:duration-500
            hover:before:w-full hover:before:left-0 hover:before:bg-green-500
            transition hover:text-green-400 hover:cursor-pointer duration-500
            "
              key={index}
            >
              {section.name}
            </div>
          ))}
        </div>
      )}
      <div className="h-16 sm:h-20" />
      <div className="flex flex-col sm:flex-row m-auto justify-around sm:w-full text-lg opacity-50 px-5 text-center">
        <div>
          <span className="sm:mr-5">Privacy Policy</span>|
          <span className="sm:ml-5">Cookie Policy</span>
        </div>
        <div>Presentation Mockup</div>
      </div>
      <div className="h-2" />
    </footer>
  );
};

export default Footer;
