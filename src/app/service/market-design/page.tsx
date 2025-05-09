import React from "react";
import Head from "next/head";

const MarketPage = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing Services | Your IT Company</title>
        <meta
          name="description"
          content="Grow your business online with our expert digital marketing services including SEO, social media marketing, PPC, and more."
        />
      </Head>
      <div
        className="container"
        style={{ paddingTop: "100px", paddingBottom: "60px" }}
      >
        <h1
          className="text-center"
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Digital Marketing Services
        </h1>

        <p
          className="text-center"
          style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}
        >
          Our expert marketing team at <strong>Your IT Company</strong> helps
          your business stand out in the digital space. We offer
          performance-driven solutions that increase your brand's visibility and
          attract the right audience.
        </p>

        <div className="row mt-10">
          <div className="col-md-6">
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Our Marketing Solutions
            </h3>
            <ul style={{ lineHeight: "2", fontSize: "1rem" }}>
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Pay-Per-Click Advertising (PPC)</li>
              <li>Email Marketing</li>
              <li>Content Marketing</li>
              <li>Online Reputation Management</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.ibb.co.com/WvPrrQqs/digital-marketing-banner.png"
              alt="Digital Marketing Services"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="btn btn-secondary"
            style={{
              padding: "12px 25px",
              fontSize: "1.1rem",
              borderRadius: "5px",
            }}
          >
            Start Your Marketing Journey
          </a>
        </div>
      </div>
    </>
  );
};

export default MarketPage;
