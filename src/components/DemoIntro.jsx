import React from 'react'

const DemoIntro = () => {
    return (
        <>
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
                        src="./assets/img/demo/intro-home-1.png"
                        alt=""
                    />
                    <img
                        className="shape-2 wow animated fadeInRight"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.3s"
                        src="./assets/img/demo/intro-home-2.png"
                        alt=""
                    />
                    <img className="shape-3" src="./assets/img/demo/bootstrap.png" alt="" />
                    <img className="shape-4" src="./assets/img/demo/sass.png" alt="" />
                    <img className="shape-5" src="./assets/img/icon/84_icon.png" alt="" />
                    <img className="shape-6" src="./assets/img/icon/48_icon.png" alt="" />
                </div>
            </section>
            {/* Intro Section end */}
        </>

    )
}

export default DemoIntro