import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { FaBreadSlice } from 'react-icons/fa';
import startup from '../images/startup.png'
import AnalysisImg from '../images/icon/analysis.png'
import BullhornImg from '../images/icon/bullhorn.png'
import LightbulbImg from '../images/icon/light-bulb.png'
import StarttupImg from '../images/icon/startupimg.png'





const FinacialReportingSection = () => (
    <>
        {/* <section class="tf-section section-services">
                 <div class="container">
                    <div class="services-main">
                        <div class="services-list-main wow fadeInUp" data-wow-delay="400ms">
                            <>
                                <div class="list-services-box">
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-startup"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">BLOCKCHAIN ACCOUNTING</h5>
                                            <p class="text">Prioprietary software converts blockchain transactions
                                                directly in Quickbooks readable files that monitor cost basis,                                                appreciation/depreciation, and great record keeping.</p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-bullhorn"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">MARKETING EFFICIENCY</h5>
                                            <p class="text">If your business is spending money on Marketing, then you
                                                want it to be as efficient as possible. Learning what your customer
                                                acquisition cost is trending at, and working to keep it the best it can
                                                be is vital. Cost per actions, Lifetime value of customers, and other
                                                key metrics are one of our many strengths.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-light-bulb"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">REPORTING & PRESENTATIONS</h5>
                                            <p class="text">Researching broad data and condensing it into important
                                                factual decks for your business to make decisions on can be time
                                                consuming. Ready to build a slide deck for potential investors or
                                                current holders? The formatting alone can take away valuable time for
                                                you to BUILD. Let us do the lifting.</p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-startup"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">BUSINESS ORGANIZATION</h5>
                                            <p class="text">Meetings, Company Structure, Registrations, Contracts, or
                                                any other side task that doesn’t directly build your business can be
                                                handed over. We’ll lead that team meeting, assign tasks, and send you
                                                the notes on the outcome. Following up with legal teams, contractor
                                                signing flow, or thinking through a team's structure. We have got that
                                                covered.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                            <p class="text wow">You are running your business. We know that you would like to be
                                able to do it all. Get more hands on your project that you can trust.</p>
                        </div>
                    </div>
                </div>
         </section> */}

        <section class="tf-section section-services" id='services_btn'>
            <a name="services_section"></a>
            <div class="container">
                <div class="services-main">
                    <div class="services-list-main wow fadeInUp" data-wow-delay="400ms">
                        {/* <div class="themesflat-carousel-box data-effect has-bullets bullet-circle bullet24 clearfix" data-gap="30" data-column="1" data-column2="1" data-column3="1" data-auto="true"> */}
                        {/* <div class="owl-carousel owl-theme"> */}
                        <div class="list-services-box">
                            <div class="box-item">
                                <div class="icon-box">
                                    {/* <span class="icon icon-analysis"></span> */}
                                </div>
                                <img src={AnalysisImg} className="cst-img-icons" />
                                <div class="content-box">
                                    <h5 class="title">FINANCIAL REPORTING</h5>
                                    <p class="text">How much did you spend last month on contractors? Marketing? Could you have found a more cost efficient way to build? Regular reporting keeps you in the loop on performance.</p>
                                </div>
                            </div>
                            <div class="box-item">
                                <img src={BullhornImg} className="cst-img-icons" />
                                <div class="content-box">
                                    <h5 class="title">P & L FORECASTING</h5>
                                    <p class="text">You know where your business is today. You hope that your business will be better in the future. Where will you be in 1 year? Build a plan, execute to the plan, track to the plan, and adapt with great forecasting.</p>
                                </div>
                            </div>
                            <div class="box-item">
                                <img src={LightbulbImg} className="cst-img-icons" />
                                <div class="content-box">
                                    <h5 class="title">BOOKKEEPING</h5>
                                    <p class="text">Do you already have a bookkeeper? Great! We will work with them. If not, we have a great bookkeeping team internally. Keep your records and transactions clean with monthly closes and regular audits. Let’s make use of all this data!</p>
                                </div>
                            </div>
                            <div class="box-item">
                                <img src={StarttupImg} className="cst-img-icons" />
                                <div class="content-box">
                                    <h5 class="title">Key Performance Indicators</h5>
                                    <p class="text">You have a handful of statistics that when you measure and follow them closely, they change your business for the better. Together we will dive deep and find out what data is telling you something, and what data appears to be “extra”. Building KPIs and keeping them monitored will boost your business.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="list-services-box">
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-startup"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">BLOCKCHAIN ACCOUNTING</h5>
                                            <p class="text">Prioprietary software converts blockchain transactions directly in Quickbooks readable files that monitor cost basis, appreciation/depreciation, and great record keeping.</p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-bullhorn"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">MARKETING EFFICIENCY</h5>
                                            <p class="text">If your business is spending money on Marketing, then you want it to be as efficient as possible. Learning what your customer acquisition cost is trending at, and working to keep it the best it can be is vital. Cost per actions, Lifetime value of customers, and other key metrics are one of our many strengths.</p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-light-bulb"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">REPORTING & PRESENTATIONS</h5>
                                            <p class="text">Researching broad data and condensing it into important factual decks for your business to make decisions on can be time consuming. Ready to build a slide deck for potential investors or current holders? The formatting alone can take away valuable time for you to BUILD. Let us do the lifting.</p>
                                        </div>
                                    </div>
                                    <div class="box-item">
                                        <div class="icon-box">
                                            <span class="icon icon-startup"></span>
                                        </div>
                                        <div class="content-box">
                                            <h5 class="title">BUSINESS ORGANIZATION</h5>
                                            <p class="text">Meetings, Company Structure, Registrations, Contracts, or any other side task that doesn’t directly build your business can be handed over. We’ll lead that team meeting, assign tasks, and send you the notes on the outcome. Following up with legal teams, contractor signing flow, or thinking through a team's structure. We have got that covered.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-services-box">
                                </div> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div class="services-control">
                        <div class="box-left-control">
                            <div class="main-control">
                                <h5 class="sub-title wow" data-splitting>Consulting</h5>
                                <div class="title-parent">
                                    <h2 class="title wow" data-splitting>Services</h2>
                                </div>
                                <p class="text wow">You are running your business. We know that you would like to be able to do it all. Get more hands on your project that you can trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default FinacialReportingSection