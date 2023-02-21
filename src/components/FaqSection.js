import React from 'react'
import FaqImg from '../images/background/Services-FAQ.jpg'
export const FaqSection = () => {
    return (
        <>
            <section class="tf-section section-faqs">
                <div class="container">
                    <div class="main-faqs">
                        <h1 class="wow heading-title" data-splitting>FAQ</h1>
                        <div class="main-content">
                            <div class="intro-content">
                                <h3 class="title wow" data-splitting>Read our answers to questions <br />that other clients
                                    have already asked.
                                </h3>
                                <div class="flat-question wow fadeInUp" data-wow-delay="800ms">
                                    <div class="accordion">
                                        <div class="accordion-toggle active">
                                            <div class="toggle-title active">
                                                <span>01.</span>
                                                How much does your service
                                                cost ?
                                            </div>
                                            <div class="toggle-content">
                                                With consultants the answer will vary depending on what you are looking for.
                                                However, we like to be very transparent and want to generally let you know
                                                what to expect. Our current average client is about $5,000 per month. We run
                                                on a fixed price per month retainer model. After you schedule your first
                                                free consultation with us, we will walk through the areas you have covered
                                                and those areas that you don’t. Once we have a better idea of where we will
                                                integrate to free up your time, we will get you a fixed monthly bid with
                                                options on contract length. (Our minimum contract length is 2 months)
                                            </div>
                                        </div>

                                        <div class="accordion-toggle">
                                            <div class="toggle-title"><span>02.</span>What payment methods do you accept?</div>
                                            <div class="toggle-content">
                                                We accept your typical payments such as PayPal, ACH Direct, and Venmo. We
                                                are also confident in the emerging tech space. Crypto coins, tokens, NFTs,
                                                and other suggested payment methods are common with our clients.
                                            </div>
                                        </div>

                                        <div class="accordion-toggle">
                                            <div class="toggle-title"><span>03.</span>Will you work with my Business Type?
                                            </div>
                                            <div class="toggle-content">
                                                We can work with just about any business! In our initial consultation we can
                                                discuss this further if needed. Past experience has taken us down many
                                                different industries. Lately, we have gone really deep into businesses
                                                dealing in crypto. We also have retail, subscription, service, food service,
                                                recruiting/bounty, and hospitality experience. Sit down for a chat, and we
                                                will show you how it will work.
                                            </div>
                                        </div>
                                        <div class="accordion-toggle">
                                            <div class="toggle-title"><span>04.</span>What happens during the free
                                                consultation?</div>
                                            <div class="toggle-content">
                                                We are going to ask you questions about your future plans. Are you a
                                                business? Do you want to be a business? How often do you want financial
                                                reports? Do you want full accounting records? Do you need those records
                                                verified by a CPA? And the list goes on. Basically it is our time to ask you
                                                as many questions as we can. At the end of the call, we will take you
                                                through our thoughts on what we would do for your project/business and then
                                                send a written proposal along with a Master Service Agreement, and a
                                                Statement of Work for you to review that includes our monthly price for you
                                                specifically to review and decide if you would like to move forward.
                                            </div>
                                        </div>
                                        <div class="accordion-toggle">
                                            <div class="toggle-title"><span>05.</span>What consulting services can you
                                                provide?</div>
                                            <div class="toggle-content">
                                                We are not a CPA firm or an investment advisor. We are an independent
                                                consulting firm that will use your business data to present facts and
                                                opinions to help you make decisions. Our services include: Financial
                                                Reporting, Forecasting, Analytics, Marketing Efficiency, Key Performance
                                                Indicators (KPIs), Regular Monitoring Reporting, Meeting with Teams, Public
                                                Research, Deck/Presentation Creation, Organization, Working with other
                                                Contractors and Employees, and other general business needs. All of our work
                                                is in partnership with the leadership of the business and all business
                                                directional decisions are the ultimate responsibility of the
                                                owner/founder/creator. We aim to be your business partner with a breadth of
                                                knowledge readily available. Note, that we do have 3rd parties that we are
                                                able to work with that are lawyers, CPAs, and other designated professions.
                                                Their opinions and actions are subcontracted and are also not considered
                                                advisory unless you decide to contract them separately under an advisory
                                                contract.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="img-faq wow fadeInRight" data-wow-delay="400ms">
                                <img src={FaqImg} alt={FaqImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
