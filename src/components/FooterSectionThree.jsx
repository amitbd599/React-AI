import React from 'react'

const FooterSectionThree = () => {
    return (
        <>
            {/* footer section three start */}
            <footer className="footer-section three">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-wrapper one">
                                <h2 className="title">Location Info</h2>
                                <div className="inner">
                                    <span>
                                        <i className="fa-sharp fa-solid fa-location-dot" /> 3487 Harter
                                        StreetDayton, OH 45402
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-phone" /> +88 251-856-63
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-envelope" /> info@demo.com
                                    </span>
                                    <span>
                                        <i className="fa-sharp fa-regular fa-clock" /> Opening Hours:
                                        8.30 AM – 7.00 PM
                                    </span>
                                </div>
                                <div className="social one">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-wrapper two mt-4 mt-md-0">
                                <h2 className="title">RECENT POSTS</h2>
                                <div className="inner">
                                    <ul>
                                        <li>
                                            <div>
                                                <div className="img-file">
                                                    <img
                                                        className="img-fluid"
                                                        src="/assets/img/blog/01_blog.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <a href="blog-details.html">
                                                    AI consulting services and solutions you achieve your
                                                    business faster.
                                                </a>
                                                <div>
                                                    <i className="fa-sharp fa-regular fa-clock" /> Wednesday,
                                                    April 26, 2023{" "}
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <div className="img-file">
                                                    <img
                                                        className="img-fluid"
                                                        src="/assets/img/blog/02_blog.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <a href="blog-details.html">
                                                    AI consulting services and solutions you achieve
                                                    objectives faster.
                                                </a>
                                                <div>
                                                    <i className="fa-sharp fa-regular fa-clock" /> Wednesday,
                                                    April 26, 2023{" "}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="footer-wrapper three mt-4 mt-lg-0">
                                <h2 className="title">NEWSLETTER</h2>
                                <div className="inner">
                                    <p>
                                        Oracle Cloud Infrastructure (OCI) AI Services is a collection of
                                        services with prebuilt machine learning models that make it
                                        easier for developers to apply AI to applications and business
                                        operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom">
                                <p>Copyright © 2023 FaconTech, All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <img
                        className="shape-2 poa"
                        src="/assets/img/shape/04_shape.png"
                        alt=""
                    />
                </div>
            </footer>
            {/* footer section one end */}
        </>

    )
}

export default FooterSectionThree