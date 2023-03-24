import TextContent from "./TextContent";
import Image from "next/image";
import { AboutUsInterface } from "interfaces/AboutUsInterface";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar, FreeMode } from "swiper";
import Ticker from "react-ticker";

import "swiper/css/autoplay";
import "swiper/css";
import { useRouter } from "next/router";
interface ComponentProps {
  aboutUs: Array<AboutUsInterface>;
  isMobile: boolean;
  affiliates: Array<any>;
}

const AboutUs = ({ aboutUs, isMobile, affiliates = [] }: ComponentProps) => {
  const router = useRouter();

  const {
    text_subtitle1,
    text_block1,
    text_subtitle2,
    text_block2,
    core_values,
  } = aboutUs[0];

  return (
    <article className="md:px-32 px-8" id={isMobile ? "about-us1" : "about-us"}>
      <div className="w-full">
        <div className="grid">
          <h1 className="text-center text-4xl font-bold text-gray-200 my-10">
            ABOUT US
          </h1>
        </div>
        <div className="w-full mt-5">
          <Ticker>
            {({ index }) => (
              <div className="flex">
                {core_values.map((value, index) => (
                  <>
                    <div className="w-[80px] sm:w-[150px] justify-center sm:text-xl lowercase text-gray-200 opacity-50 text-center">
                      #{value}
                    </div>
                    <div className="w-[40px] sm:w-[150px] justify-center sm:text-lg lowercase text-gray-200 opacity-50 text-center">
                      |
                    </div>
                  </>
                ))}
              </div>
            )}
          </Ticker>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row mt-10 pb-5 justify-between">
        <div className="text-content">
          <TextContent title={text_subtitle1} text={text_block1} />
          <TextContent title={text_subtitle2} text={text_block2} />
        </div>
      </div>
      <div className="flex flex-col relative w-full sm:flex-row my-5">
        <SwiperComponent
          className="flex flex-col w-full col-span-3 test-sw"
          modules={[Scrollbar, Autoplay]}
          spaceBetween={isMobile ? 5 : 20}
          slidesPerView={isMobile ? 3 : 8}
          loop={true}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {affiliates.map((value) => {
            return (
              <SwiperSlide
                className="w-1/3 md:w-1/4 flex flex-row justify-center !h-auto cursor-pointer"
                onClick={() => router.push(value?.link)}
              >
                <Image
                  src="/ferrari-cool.png"
                  width={isMobile ? "100" : "150"}
                  height="100"
                  alt="affiliate image"
                  className="object-fill self-center align-middle my-auto"
                />
              </SwiperSlide>
            );
          })}
        </SwiperComponent>
      </div>
    </article>
  );
};

export default AboutUs;
