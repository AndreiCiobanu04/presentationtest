import { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import withLazyComponent from "../../lazy-load/with-lazy-component";
import { BsInstagram, BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
};

const center = {
  lat: 44.44356,
  lng: 26.05594,
};

const Map = ({ isMobile }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAvnKmVMV55Ck3797Qw7Hl9B4aQLWZUFPM",
  });

  return (
    <div className="md:px-32 px-7" id={isMobile ? "contact-mobile" : "contact"}>
      <h1 className="text-center text-4xl sm:text-4xl font-bold text-gray-200 mt-5 mb-10">
        CONTACT US
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="text-xl sm:pr-16 md:w-1/2 flex flex-col justify-between text-white">
          <div>
            <div className="underline leading-10 underline-offset-8">
              Headquarter Address :
            </div>
          </div>
          <div className="">
            <div className="underline leading-10 underline-offset-8">
              Email :
            </div>
            presentationmockup@test.com
          </div>
          <div className="hidden md:flex flex-row items-center content-center mt-5">
            <a target="_blank" href="https://www.linkedin.com">
              <BsLinkedin className="w-8 h-8 mr-5" />
            </a>
            <a target="_blank" href="https://twitter.com">
              <BsTwitter className="w-8 h-8 mx-5" />
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <BsFacebook className="w-8 h-8 mx-5" />
            </a>
            <a target="_blank" href="https://www.instagram.com">
              <BsInstagram className="w-8 h-8 mx-5" />
            </a>
          </div>
        </div>
        <div className="border border-[#424244] h-80 sm:h-96 md:w-1/2 rounded-2xl mt-10 sm:mt-0">
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              options={{
                styles: [
                  { stylers: [{ saturation: -90 }, { gamma: 0.5 }] },
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [
                      {
                        visibility: "off",
                      },
                    ],
                  },
                ],
              }}
            >
              <Marker position={center} />
            </GoogleMap>
          )}
        </div>
        <div className="md:hidden flex flex-row items-center content-center mt-10 text-white">
          <a target="_blank" href="https://www.linkedin.com/compa">
            <BsLinkedin className="w-8 h-8 mr-5" />
          </a>
          <a target="_blank" href="https://twitter.com">
            <BsTwitter className="w-8 h-8 mx-5" />
          </a>
          <a target="_blank" href="https://www.facebook.com">
            <BsFacebook className="w-8 h-8 mx-5" />
          </a>
          <a target="_blank" href="https://www.instagram.com">
            <BsInstagram className="w-8 h-8 mx-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Map);
