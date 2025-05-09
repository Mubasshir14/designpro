import React from 'react';
import Head from 'next/head';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Your IT Company</title>
                <meta
                    name="description"
                    content="Get in touch with Your IT Company for any inquiries, support, or custom IT solutions. We're here to help you."
                />
            </Head>

            <div
                className="container"
                style={{ paddingTop: '100px', paddingBottom: '60px', maxWidth: '900px' }}
            >
                <h1
                    className="text-center"
                    style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    Contact Us
                </h1>

                <p
                    className="text-center"
                    style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}
                >
                    We'd love to hear from you! Whether it's a project idea or a general inquiry, reach out and let's connect.
                </p>

                <div className="row mt-5">
                    <div className="col-md-6 mb-4">
                        <h4 style={{ fontWeight: 'bold' }}>Contact Info</h4>
                        <p style={{ fontSize: '1rem' }}>
                            <strong>Phone:</strong> +880 1234 567 890<br />
                            <strong>Email:</strong> contact@youritcompany.com<br />
                            <strong>Address:</strong> Level 5, Software Park, Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="col-md-6">
                        <h4 style={{ fontWeight: 'bold' }}>Send a Message</h4>
                        <form>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingName"
                                    placeholder="Your Name"
                                    style={{ borderRadius: '10px' }}
                                />
                                <label htmlFor="floatingName">Your Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="name@example.com"
                                    style={{ borderRadius: '10px' }}
                                />
                                <label htmlFor="floatingEmail">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a message here"
                                    id="floatingMessage"
                                    style={{ height: '150px', borderRadius: '10px' }}
                                ></textarea>
                                <label htmlFor="floatingMessage">Message</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-secondary w-100"
                                style={{
                                    padding: '12px 20px',
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
