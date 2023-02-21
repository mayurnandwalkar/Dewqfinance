import React from 'react'
import OliviaImg from '../images/team/Olivia.png'
import YousafImg from '../images/team/Yousaf.png'
import QuincyImg from '../images/team/Quincy1.png'
import MilkahImg from '../images/team/Milkah.png'
import Carousel from 'react-grid-carousel'
import { FaLinkedin } from "react-icons/fa";

const CoreTeam = () => {
    return (
        <>
            <a name="our_team_section"></a>

            <section class="tf-section section-team style-2 finance_team_section">



                <a name="dewQ_finance_team"></a>
                <div class="container">
                    <div class="main-team">
                        <div class="intro-heading">
                            <h3 class="title wow" data-splitting>Core DewQ Finance <span class="color">Team</span></h3>
                        </div>

                        {/* <div class="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix"
                            data-gap="30" data-column="1" data-column2="1" data-column3="1" data-auto="true">
                            <div class="owl-carousel owl-theme">
                                <div class="list-services-box">
                                    <div class="main-content">
                                        <div class="team-box wow fadeInUp">
                                            <div class="img-team">
                                                <img src={QuincyImg} alt="" />
                                            </div>
                                            <div class="info">
                                                <a href="https://www.linkedin.com/in/quincychapman/"><i
                                                    class="fa fa-linkedin-square"></i></a>
                                                <h5>Quincy</h5>
                                                <p>Owner</p>
                                            </div>
                                        </div>
                                        <div class="team-box wow fadeInUp" data-wow-delay="400ms">
                                            <div class="img-team">
                                                <img src={OliviaImg} alt="" />
                                            </div>
                                            <div class="info">

                                                <a href="https://www.linkedin.com/in/oliviacharleschizorom"><i
                                                    class="fa fa-linkedin-square"></i></a>
                                                <h5>Olivia</h5>
                                                <p>Project Manager</p>
                                            </div>
                                        </div>


                                        <div class="team-box wow fadeInUp" data-wow-delay="1200ms">
                                            <div class="img-team">
                                                <img src={MilkahImg} alt="" />
                                            </div>
                                            <div class="info">
                                                <a href="https://www.linkedin.com/in/milkah-kirui"><i
                                                    class="fa fa-linkedin-square"></i></a>
                                                <h5>Milkah</h5>
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                        <div class="team-box wow fadeInUp">
                                            <div class="img-team">
                                                <img src={YousafImg} alt="" />
                                            </div>
                                            <div class="info">
                                                <a href="https://www.linkedin.com/in/syed-yousaf-tariq-acma-2baa0594/"><i
                                                    class="fa fa-linkedin-square"></i></a>
                                                <h5>Yousaf</h5>
                                                <p>Bookkeeper/Analytics</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div> */}
                        <Carousel cols={4} rows={1} gap={10} loop>
                            <Carousel.Item>
                                <div class="main-content">
                                    <div class="team-box wow fadeInUp">
                                        <div class="img-team">
                                            <img src={QuincyImg} alt="" />
                                        </div>
                                        <div class="info">
                                            <a href="https://www.linkedin.com/in/quincychapman/">
                                                <FaLinkedin /> </a>
                                            <h5>Quincy</h5>
                                            <p>Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="main-content">
                                    <div class="team-box wow fadeInUp" data-wow-delay="400ms">
                                        <div class="img-team">
                                            <img src={OliviaImg} alt="" />
                                        </div>
                                        <div class="info">

                                            <a href="https://www.linkedin.com/in/oliviacharleschizorom">
                                                <FaLinkedin />

                                            </a>
                                            <h5>Olivia</h5>
                                            <p>Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="main-content">

                                    <div class="team-box wow fadeInUp" data-wow-delay="1200ms">
                                        <div class="img-team">
                                            <img src={MilkahImg} alt="" />
                                        </div>
                                        <div class="info">
                                            <a href="https://www.linkedin.com/in/milkah-kirui"> <FaLinkedin /></a>
                                            <h5>Milkah</h5>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="main-content">

                                    <div class="team-box wow fadeInUp">
                                        <div class="img-team">
                                            <img src={YousafImg} alt="" />
                                        </div>
                                        <div class="info">
                                            <a href="https://www.linkedin.com/in/syed-yousaf-tariq-acma-2baa0594/"> <FaLinkedin /></a>
                                            <h5>Yousaf</h5>
                                            <p>Bookkeeper/Analytics</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CoreTeam