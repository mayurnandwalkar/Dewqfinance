import React from 'react'
import LogoFooter from '../../images/logo/whitelogo.png';
import LocationImg from '../../images/icon/location.png';
import EmailImg from '../../images/icon/email.png';
import { FaDribbble, FaInstagram, FaTwitter } from 'react-icons/fa';




const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="main-footer">
          <div class="container">
            <div class="list-footer">
              <div class="widget-about">
                <div class="logo">
                  <a href="https://dewqfinance.com/">
                    <img src={LogoFooter} alt={LogoFooter} />
                  </a>
                </div>
                <h6 class="text">Business Consulting for the Best Business Outcomes<br />*DewQ Finance is not a CPA Firm.</h6>
                <div class="location">
                  <div class="icon-location">
                    <img src={LocationImg} alt={LocationImg} />
                  </div>
                  <p class="info">SALT LAKE CITY, UTAH</p>
                </div>
              </div>
              <div class="widget-link v1">
                <h4 class="widget-title">Categories</h4>
                <ul class="list-wrap">
                  <li><a href="https://dewqfinance.com/">Home</a></li>
                  <li><a id="choose_dewq2">About Us</a></li>
                  <li><a id="services_btn2">Services</a></li>
                  {/* <li><a id="articles_press2">Articles & Press</a></li>  */}
                  <li><a id="our_team2">Our Team</a></li>
                  <li><a id="contact_us2">Contact Us</a></li>
                </ul>
              </div>
              <div class="widget-contact-form">
                <div class="heading">
                  <img src={EmailImg} alt={EmailImg} />
                  <h3>Free Consultati<span class="color">on!</span></h3>
                  {/* <!--<p>Please Crate Your E-mail And Free Consultation*</p>--> */}
                </div>
                <div class="fomr-contact">
                  <form action="/contact/contact-process2.php" method="post" accept-charset="utf-8" class="form-submit contact-form wpcf7-form">
                    <div class="form-group">
                      {/* <!--<input type="email" name="email" value="" class="email" placeholder="Enter Your Email...">
                        <button name="submit" type="submit" class=" submit btn">Get started</button> --> */}
                      <a id="get_started_btn" name="submit" type="submit" class="submit btn get_started_btn">Get started</a>
                    </div>
                  </form>
                </div>
                <h6 class="copyright">Copyright 2022 <span>DewQ Finance</span>. All Rights Reserved.</h6>
              </div>
            </div>
          </div>
          <hr />
          <div class="container">
            <div class="bottom-footer">
              <div class="content">
                {/* <!-- <h5>About Intuit <span>Join our team</span> </h5> --> */}
                <ul>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">STATEMENT TO CONSUMERS OF DEWQ FINANCE DATA AND SERVICES</a></li>
                </ul>
              </div>

              <div class="info">
                <ul class="list-social">
                  <li><a href="https://www.linkedin.com/company/dewq-finance/"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="https://twitter.com/quincychapman"><FaTwitter/></a></li>
                  <li><a href="#"><FaDribbble /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer