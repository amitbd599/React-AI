import React, { Fragment, Suspense } from 'react'
import Preloader from '../elements/Preloader'
import HeaderOne from '../components/HeaderOne'
import Footer from '../components/Footer'



const Demo = () => {
    return (
        <Fragment>
            <Suspense fallback={<Preloader />}>
                {/* Header one */}
                <HeaderOne />

                {/* Intro Section Start */}
                <section className="demo-intro" id="intro">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="left-wrapper">
                                    <p
                                        className="sub-title  wow animated fadeInUp"
                                        data-wow-duration="1.2s"
                                        data-wow-delay="0.2s"
                                    >
                                        Full Responsive Layout
                                    </p>
                                    <h2
                                        className="title wow animated fadeInUp"
                                        data-wow-duration="1.2s"
                                        data-wow-delay="0.4s"
                                    >
                                        FaconTech - AI Technology &amp; IT Solutions HTML Template
                                    </h2>
                                    <div
                                        className="list-data wow animated fadeInUp"
                                        data-wow-duration="1.2s"
                                        data-wow-delay="0.6s"
                                    >
                                        <ul>
                                            <li>
                                                {"{"} Well Documented {"}"}
                                            </li>
                                            <li>
                                                {"{"} Fully Responsive Layout {"}"}
                                            </li>
                                            <li>
                                                {"{"} Built on Bootstrap {"}"}
                                            </li>
                                            <li>
                                                {"{"} Built with Sass {"}"}
                                            </li>
                                            <li>
                                                {"{"} 18 Total Pages {"}"}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <img
                            className="shape-1 wow animated fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="0.3s"
                            src="/assets/img/demo/intro-home-1.png"
                            alt=""
                        />
                        <img
                            className="shape-2 wow animated fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="0.3s"
                            src="/assets/img/demo/intro-home-2.png"
                            alt=""
                        />
                        <img className="shape-3" src="/assets/img/demo/bootstrap.png" alt="" />
                        <img className="shape-4" src="/assets/img/demo/sass.png" alt="" />
                        <img className="shape-5" src="/assets/img/icon/84_icon.png" alt="" />
                        <img className="shape-6" src="/assets/img/icon/48_icon.png" alt="" />
                    </div>
                </section>
                {/* Intro Section end */}

                {/* Home Page Section Start */}
                <section id="allHome" className="demo-home">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h2>3 Home Pages</h2>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="index-1.html">
                                    <div className="wrapper">
                                        <div
                                            className="img-file wow animated fadeInUp"
                                            data-wow-duration="1s"
                                            data-wow-delay="0.2s"
                                        >
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/home-1.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Home Demo - 1</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="index-2.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/home-2.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Home Demo - 2</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="index-3.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/home-3.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Home Demo - 3</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Home Page Section End */}

                {/* Inner Page Section Start */}
                <section id="allInnerPage" className="demo-inner">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title">
                                    <h2>15 Inner Pages</h2>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="about.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/about.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>About Us</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="team.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/team.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Team</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="project.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/project.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Projects</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="project-details.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/project-details.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Projects-Details</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="service.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/service.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Service</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="service-details.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/service-details.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Service-Details</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="pricing.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/price.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Price</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="review.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/review.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Review</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="faq.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/faq.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>FAQ</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="blog-grid.html  ">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/blog.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Blog Grid</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="blog-grid-sidebar.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/blog-grid-sidebar.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Blog Grid Sidebar</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="blog-details.html ">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/blog-details.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Blog Details</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="contact.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/contact.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>Contact</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <a href="404.html">
                                    <div
                                        className="wrapper wow animated fadeInUp"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="img-file">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/demo/404.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="link">
                                            <h2>404 Error</h2>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Inner Page Section End */}


                {/* footer section one start */}
                <footer
                    className="demo-footer"
                    data-background="./assets/img/shape/03_shape.svg"
                >
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wrapper">
                                    <h2>
                                        Purchase the FaconTech Template now <br /> and Build Your Awesome
                                        Website
                                    </h2>
                                    <div className="d-adjust my-btn">
                                        <a
                                            className="default-btn"
                                            href="https://www.templatemonster.com/authors/themesoft69/"
                                        >
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>Copy Right by themesoft69</p>
                    </div>
                </footer>
                {/* footer section one end */}




            </Suspense>
        </Fragment>

    )
}

export default Demo