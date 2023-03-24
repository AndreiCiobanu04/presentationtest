import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (document.getElementById("__next").scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document
      .getElementById("__next")
      .addEventListener("scroll", toggleVisibility);
    return () => {
      document
        .getElementById("__next")
        .removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    document.getElementById("__next").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <span
      className={`fixed bottom-10 right-10 z-[1050] rounded-full p-4 ${
        isVisible ? "visible" : "invisible"
      } bg-black text-white`}
      onClick={scrollToTop}
      onTouchEnd={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 3.293L3.646 7.646a.5.5 0 0 0 .708.708L8 4.707l3.646 3.647a.5.5 0 0 0 .708-.708L8.707 3.293a.5.5 0 0 0-.707 0z"
        />
      </svg>
    </span>
  );
};

export default BackToTopButton;
