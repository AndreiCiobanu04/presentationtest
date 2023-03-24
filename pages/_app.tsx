import { AppProps } from "next/app";
import Header from "components/layout/header";
import "styles/index.css";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import BackToTopButton from "components/layout/back-to-top";
// import Footer from "components/sections/contact-us";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    if (router.asPath !== "/") {
      setIsLogoVisible(true);
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <div
        className={`h-full w-full flex flex-col ${
          router.asPath === "/" || pageProps?.isMobile ? "bg-gray" : ""
        }`}
      >
        <div className="md:hidden">
          <Header isLogoVisible={isLogoVisible} isMobile key="mobile-header" />
        </div>
        <div className="hidden md:block">
          <Header
            isLogoVisible={isLogoVisible}
            isMobile={false}
            key="desktop-header"
          />
        </div>
        <main className="h-full">
          <BackToTopButton />
          <div className="md:hidden h-full w-full">
            <AnimatePresence mode="wait">
              <Component
                key="mobile"
                setIsLogoVisible={setIsLogoVisible}
                {...pageProps}
                isMobile
              />
            </AnimatePresence>
          </div>
          <div className="hidden md:block h-full">
            <AnimatePresence mode="wait">
              <Component
                key="desktop"
                setIsLogoVisible={setIsLogoVisible}
                {...pageProps}
                isMobile={false}
              />
            </AnimatePresence>
          </div>
        </main>
        {/*<Footer />*/}
      </div>
    </>
  );
}

export default MyApp;
