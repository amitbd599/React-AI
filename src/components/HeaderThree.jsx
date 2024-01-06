import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HeaderThree = () => {
    const [active, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        var offCanvasNav = document.getElementById("offcanvas-navigation");
        var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

        for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
            offCanvasNavSubMenu[i].insertAdjacentHTML(
                "beforebegin",
                "<span class='menu-expand'><i></i></span>"
            );
        }

        var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
        var numMenuExpand = menuExpand.length;

        function sideMenuExpand() {
            if (this.parentElement.classList.contains("active") === true) {
                this.parentElement.classList.remove("active");
            } else {
                for (let i = 0; i < numMenuExpand; i++) {
                    menuExpand[i].parentElement.classList.remove("active");
                }
                this.parentElement.classList.add("active");
            }
        }

        for (let i = 0; i < numMenuExpand; i++) {
            menuExpand[i].addEventListener("click", sideMenuExpand);
        }
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
    }, []);

    const mobileMenu = () => {
        setActive(!active);
    };
    return (
        <>

            {/* header-area-start */}
            <header id="header-sticky" className={scroll ? "header-area-3 header__sticky" : "header-area-3"}>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-md-6 col-6">
                            <div className="logo-area">
                                <div className="logo">
                                    <a href="index-1.html">
                                        <img
                                            className="img-fluid"
                                            src="/assets/img/common/logo-white.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-10 col-md-6 col-6">
                            <div className="menu-area menu-padding d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown">
                                                <a href="index-1.html">Home</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="index-1.html">Home One</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">Home Two</a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="index-3.html">Home Three</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="team.html">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="project.html">Project</a>
                                                    </li>
                                                    <li>
                                                        <a href="project-details.html">Project Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="service-details.html">Service Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing.html">Pricing</a>
                                                    </li>
                                                    <li>
                                                        <a href="review.html">Review</a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="blog-grid.html">Blog</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-grid.html">Blog-Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-sidebar.html">Blog-Grid Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list.html">Blog-List</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="side-menu-icon d-lg-none text-end">
                                <a onClick={mobileMenu}
                                    href="javascript:void(0)"
                                    className="info-toggle-btn f-right sidebar-toggle-btn"
                                >
                                    <i className="fal fa-bars" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header-area-end */}


            {/* sidebar area start */}
            <div className={`sidebar__area ${active === true ? "sidebar-opened" : ""
                } `}>
                <div className="sidebar__wrapper">
                    <div className="sidebar__close">
                        <button className="sidebar__close-btn" id="sidebar__close-btn" onClick={mobileMenu}>
                            <i className="fal fa-times" />
                        </button>
                    </div>
                    <div className="sidebar__content">
                        <div className="sidebar-logo mb-40 mt-40">
                            <Link to="index">
                                <img src="assets/img/common/logo-white.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="sidebar__search mb-25">
                            <form action="#">
                                <input type="text" placeholder="What are you searching for?" />
                                <button type="submit">
                                    <i className="far fa-search" />
                                </button>
                            </form>
                        </div>
                        <nav className='offcanvas-navigation' id='offcanvas-navigation'>
                            <ul>
                                <li className="menu-item-has-children">
                                    <Link to="index">Home</Link>
                                    <ul className="sub-menu">
                                        <li className="active">
                                            <Link to="index">Home One</Link>
                                        </li>
                                        <li>
                                            <Link to="index-2">Home Two</Link>
                                        </li>
                                        <li>
                                            <Link to="index-3">Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="about">About Us</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <Link to="#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="team">Team</Link>
                                        </li>
                                        <li>
                                            <Link to="project">Project</Link>
                                        </li>
                                        <li>
                                            <Link to="project-details">Project Details</Link>
                                        </li>
                                        <li>
                                            <Link to="service">Service</Link>
                                        </li>
                                        <li>
                                            <Link to="service-details">Service Details</Link>
                                        </li>
                                        <li>
                                            <Link to="pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="review">Review</Link>
                                        </li>
                                        <li>
                                            <Link to="faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="404">404 Page</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-dropdown">
                                    <Link to="blog-grid">Blog</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="blog-grid">Blog-Grid</Link>
                                        </li>
                                        <li>
                                            <Link to="blog-grid-sidebar">Blog-Grid Sidebar</Link>
                                        </li>
                                        <li>
                                            <Link to="blog-list">Blog-List</Link>
                                        </li>
                                        <li>
                                            <Link to="blog-details">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="mobile-footer">
                            <div className="follow">
                                <div className="title">
                                    <h3>Follow Us:</h3>
                                </div>
                                <div className="social one">
                                    <Link to="#">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                    <Link to="#">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="title">
                                    <h3>Contact Us:</h3>
                                </div>
                                <ul>
                                    <li>
                                        <i className="fa-sharp fa-solid fa-location-dot" />
                                        1739 Kincheloe Road Portland, OR 97205
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope" />
                                        info@demo.com
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-phone" />
                                        +88 632-528-(859)
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-globe" />
                                        themesoft69.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sidebar area end */}
            <div className={active ? "body-overlay active" : "body-overlay"} />
        </>

    )
}

export default HeaderThree