import { useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = ({ isLogoVisible, isMobile }) => {
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById("__next").scrollTop < 5) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    document.getElementById("__next").addEventListener("scroll", handleScroll);
    return () => {
      document
        .getElementById("__next")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigationClick = (href) => (e) => {
    const element = document.getElementById(href);
    if (!element) {
      return;
    }
    e.preventDefault();
    const elementPosition =
      element.getBoundingClientRect().top +
      document.getElementById("__next").scrollTop -
      60;

    document.getElementById("__next").scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };
  return (
    <header className="w-full h-[100px] z-20 fixed top-0">
      {!isMobile && (
        <div
          className={`flex justify-between text-white ${
            isFixed ? "bg-transparent" : "bg-[#E4E4E4]"
          } h-[60px] sm:px-20`}
        >
          <div className="logo">
            {isLogoVisible && (
              <HeaderLink href="/">
                <Image
                  src="/ferrari-cool.png"
                  alt="logo"
                  width={60}
                  height={50}
                />
              </HeaderLink>
            )}
          </div>
          <div className="flex">
            {!isMobile && (
              <div
                className={`flex hidden md:block md:flex font-semibold text-md ${
                  router.query.slug ? "" : ""
                } ${isFixed ? "" : "text-black"}`}
              >
                <HeaderLink href="/#about-us">
                  <span
                    className="cursor-pointer mx-1"
                    onClick={handleNavigationClick("about-us")}
                  >
                    About us
                  </span>
                </HeaderLink>
                <HeaderLink href="/#legal-services">
                  <span
                    className="cursor-pointer mx-1"
                    onClick={handleNavigationClick("legal-services")}
                  >
                    What we do
                  </span>
                </HeaderLink>
                <HeaderLink href="/#team">
                  <span
                    className="cursor-pointer mx-1"
                    onClick={handleNavigationClick("team")}
                  >
                    Team
                  </span>
                </HeaderLink>
                <HeaderLink href="/#contact">
                  <span
                    className="cursor-pointer mx-1"
                    onClick={handleNavigationClick("contact")}
                  >
                    Contact us
                  </span>
                </HeaderLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
