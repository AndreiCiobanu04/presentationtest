import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AboutUs from "components/sections/about-us";
import TeamSection from "components/sections/team";
import Map from "components/sections/map";
import Footer from "components/sections/contact-us";
import ManifestoSection from "components/sections/manifesto-section";
import WhatWeDo from "components/sections/what-we-do";

const IndexPage = ({
  whatWeDo,
  isMobile,
  aboutUs,
  teamMembers,
  manifesto,
  affiliates,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.includes("#")) {
      router.replace("/");
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Presentation Mockup</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="presentatio mockup" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ManifestoSection manifestoData={manifesto} isMobile={isMobile} />
      <AboutUs aboutUs={aboutUs} isMobile={isMobile} affiliates={affiliates} />
      <WhatWeDo whatWeDo={whatWeDo} isMobile={isMobile} />
      <TeamSection teamMembers={teamMembers} isMobile={isMobile} />
      <Map isMobile={isMobile} />
      <Footer />
    </>
  );
};

// export async function getServerSideProps({ req, res }) {
//   try {
//     const isMobile = req.headers["user-agent"]?.match(
//       /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     );
//     const url = req.headers["host"].includes("localhost")
//       ? "http://" + req.headers["host"] + "/api/"
//       : "https://" + req.headers["host"] + "/api/";
//
//     // res.setHeader(
//     //   "Cache-Control",
//     //   "public, s-maxage=100000, stale-while-revalidate=100000"
//     // );
//
//     const result = await fetch(url);
//     const pageProps = await result.json();
//     return { props: { ...pageProps, isMobile } };
//   } catch (e) {
//     console.log("error", e);
//     return { props: { error: e } };
//   }
// }

export async function getStaticProps() {
  const whatWeDo = [
    {
      title: "Test1",
      slug: "/test1",
      description: "see more",
      position: "1",
      content: "text",
    },
    {
      title: "Test1",
      slug: "/test1",
      description: "see more",
      position: "1",
      content: "text",
    },
    {
      title: "Test1",
      slug: "/test1",
      description: "see more",
      position: "1",
      content: "text",
    },
  ];

  const aboutUs = [
    {
      header_description: "About us",
      core_values: ["test1", "test2", "test3", "test4", "test5", "test6"],
      text_subtitle1: "test",
      text_block1: "test",
      text_subtitle2: "test",
      text_block2: "test",
    },
  ];

  const teamMembers = [
    {
      first_name: "First Name",
      last_name: "Last Name",
      role: "Role",
      email: "email",
      phone_number: "phone number",
    },
    {
      first_name: "First Name",
      last_name: "Last Name",
      role: "Role",
      email: "email",
      phone_number: "phone number",
    },
    {
      first_name: "First Name",
      last_name: "Last Name",
      role: "Role",
      email: "email",
      phone_number: "phone number",
    },
    {
      first_name: "First Name",
      last_name: "Last Name",
      role: "Role",
      email: "email",
      phone_number: "phone number",
    },
  ];
  const manifesto = [
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
    {
      title: "Ferrari",
      url: "",
      review: "text",
    },
  ];

  return {
    props: {
      whatWeDo,
      aboutUs,
      teamMembers,
      manifesto,
    },
  };
}
export default IndexPage;
