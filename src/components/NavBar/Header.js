import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import LogoImg from '../../images/logo/whitelogo.png'
const Header = () => {
    return (
        <>
            <header class="header" id="site-header" style={{ "background-color": "black" }}>
                <div class="container">
                    <div class="main-header" id="site-header-inner">
                        {/* <!-- logo --> */}
                        <div class="main-header-logo" id="site-logo">
                            <a href="#">
                                <img src={LogoImg} />
                            </a>
                        </div>
                        {/* <!-- main header --> */}
                        <div class="main-nav-header">
                            <div class="header-top">
                                <div class="slogan">
                                    <h4 class="text-slogan">Experts in Blockchain Data Integration</h4>
                                </div>
                                <ul class="list-social">
                                    <li><a href="https://www.linkedin.com/company/dewq-finance/"><FaLinkedinIn /></a></li>
                                    <li><a href="https://twitter.com/quincychapman"><FaTwitter /></a></li>
                                </ul>
                            </div>
                            <div class="mobile-button">
                                <span></span>
                            </div>
                            <div class="tf-nav">
                                <nav id="main-nav" class="main-nav">
                                    <ul id="menu-primary-menu" class="menu">
                                        <li class="menu-item menu-item-has-children ">
                                            <a class="menu-main active" href="#">Home </a>
                                        </li>

                                        <li class="menu-item menu-item-has-children ">
                                            <a class="menu-main" id="choose_dewq">About Us </a>
                                            {/* <!-- <ul class="sub-menu">
                                                <li class="menu-item current-item">
                                                    <a href="index.html">Home 1</a>
                                                </li>
                                                <li class="menu-item"><a href="home-v2.html">Home 2</a></li>
                                            </ul>--> */}
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a class="menu-main" id="services_btn">Services </a>
                                            {/* <!--<ul class="sub-menu">
                                                <li class="menu-item current-item">
                                                    <a href="services.html">Services</a>

                                                </li>

                                                <li class="menu-item">

                                                    <a href="team.html">Team</a>

                                                </li>

                                                <li class="menu-item">

                                                    <a href="testimonials.html">Testimonials</a>

                                                </li>

                                            </ul>--> */}

                                        </li>                                           
                                        <li class="menu-item menu-item-has-children">
                                            <a class="menu-main" id="our_team">Our Team</a>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <a class="menu-main" id="contact_us">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="btn-header wow fadeInRight" data-wow-delay="800ms">
                            <a id="free_consultation_btn" class="btn-action" style={{ "cursor": "pointer" }}>
                                <span class="more">Free Consultation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header