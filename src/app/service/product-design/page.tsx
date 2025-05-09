import React from "react";
import Head from "next/head";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Our Software Products | Your IT Company</title>
        <meta
          name="description"
          content="Discover innovative software solutions designed to streamline your business. Explore our range of high-performance IT products today."
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
          Our Software Products
        </h1>

        <p
          className="text-center"
          style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}
        >
          At <strong>Your IT Company</strong>, we offer scalable, reliable, and
          secure software products tailored to meet the evolving needs of
          businesses in various industries.
        </p>

        <div className="row mt-10">
          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <div className="card-body">
                <h5 className="card-title">ERP System</h5>
                <p className="card-text">
                  A complete enterprise solution to manage your business
                  operations, finance, HR, and inventory from one place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <div className="card-body">
                <h5 className="card-title">POS Software</h5>
                <p className="card-text">
                  Modern point-of-sale system for retail stores, supporting
                  billing, stock, customer loyalty, and reports.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card h-100"
              style={{ border: "1px solid #dee2e6", borderRadius: "8px" }}
            >
              <div className="card-body">
                <h5 className="card-title">HR Management</h5>
                <p className="card-text">
                  An all-in-one HR solution for managing employee records,
                  attendance, payroll, and performance.
                </p>
              </div>
            </div>
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
            Request a Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
