import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { FaBreadSlice } from 'react-icons/fa';
import startup from '../images/startup.png'

const FinacialReportingSection = () => (
    <>
        <section class="tf-section section-services">
            <Carousel show={3.5} slide={2} transition={0.5}>
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
            </Carousel>
        </section>
    </>
)

export default FinacialReportingSection