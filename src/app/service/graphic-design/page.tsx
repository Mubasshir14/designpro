import React from 'react';
import Head from 'next/head';

const GraphicsPage = () => {
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
                    Graphic Design Services
                </h1>

                <p
                    className="text-center"
                    style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}
                >
                    At <strong>Your IT Company</strong>, we offer creative and customized graphic design solutions that help businesses communicate visually, build their brand identity, and stand out in the digital world.
                </p>

                <div className="row mt-10">
                    <div className="col-md-6">
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                            Our Design Services
                        </h3>
                        <ul style={{ lineHeight: "2", fontSize: "1rem" }}>
                            <li>Logo & Brand Identity Design</li>
                            <li>Business Cards & Stationery</li>
                            <li>Brochures & Flyers</li>
                            <li>Social Media Graphics</li>
                            <li>Website & App UI Mockups</li>
                            <li>Banner Ads & Posters</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://i.ibb.co.com/GfSGc6jk/Graphic-design.png"
                            alt="Graphic Design Services"
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
                        Get a Free Quote
                    </a>
                </div>
            </div>
        </>
    );
};

export default GraphicsPage;
