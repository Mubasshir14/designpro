import React from "react";
import Head from "next/head";
import Hero from "@/components/websites/hero";
import Projects from "@/components/websites/projects";

const WebsitePage = () => {
  return (
    <>
      <Head>
        <title>Graphic Design Services | Your IT Company</title>
        <meta
          name="description"
          content="Professional graphic design services to elevate your brand. Logos, brochures, social media graphics, and more by Your IT Company."
        />
      </Head>
      <div
        className="container"
        // style={{ paddingTop: "100px", paddingBottom: "60px" }}
      >
       <Hero/>
       <Projects/>
      </div>
    </>
  );
};

export default WebsitePage;
