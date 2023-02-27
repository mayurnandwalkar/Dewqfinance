import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import LogoImg from '../../images/logo/whitelogo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
                                            <AnchorLink class="menu-main active" data-toggle="tab" href="#home" role="tab">Home</AnchorLink>
                                        </li>
                                        <li class="menu-item menu-item-has-children ">
                                            <AnchorLink class="menu-main " data-toggle="tab" href="#choose_dewq" role="tab">About Us</AnchorLink>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <AnchorLink class="menu-main " data-toggle="tab" href="#services_btn" role="tab">Services</AnchorLink>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <AnchorLink class="menu-main" data-toggle="tab" href="#our_team" role="tab">Our Team</AnchorLink>
                                        </li>
                                        <li class="menu-item menu-item-has-children">
                                            <AnchorLink class="menu-main" data-toggle="tab" href="#contact_us" role="tab">Contact Us</AnchorLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="btn-header wow fadeInRight" data-wow-delay="800ms">
                            <AnchorLink data-toggle="tab" href="#contact_us" role="tab" id="free_consultation_btn" class="btn-action" style={{ "cursor": "pointer" }}>
                                 <span class="more">Free Consultation</span>                           
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header