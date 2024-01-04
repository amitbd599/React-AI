import React from 'react'

const NewsSectionOne = () => {
    return (
        <>
            {/* News Letter One start */}
            <section
                className="news-letter one"
                data-background="/assets/img/shape/06_shape.png"
            >
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div
                                className="left-wrapper wow animated fadeInLeft"
                                data-wow-duration="1s"
                                data-wow-delay="0.3s"
                            >
                                <h5>Newsletter</h5>
                                <h2>
                                    Subscribe to newsletter <br /> &amp; get company news.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div
                                className="right-wrapper wow animated fadeInRight"
                                data-wow-duration="1s"
                                data-wow-delay="0.3s"
                            >
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" placeholder="Enter Your Email Address" />
                                        <a className="submit" href="#">
                                            Sign Up Free
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <img className="shape-1 poa" src="/assets/img/icon/60_icon.png" alt="" />
                    <img className="shape-2 poa" src="/assets/img/icon/61_icon.png" alt="" />
                </div>
            </section>
            {/* News Letter One end */}
        </>

    )
}

export default NewsSectionOne