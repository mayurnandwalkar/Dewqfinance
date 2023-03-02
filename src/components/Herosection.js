import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import IdewqimageImg from '../images/SPlay.png'

const Herosection = () => {
    return (
        <section class="herosection tf-section section-choose-us" id='home'>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <p className='know-where' >Know where your Business is and where it is going to be..</p>
                        <ul class="p-5">
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Pro Forma</h4></li>
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Business Plan</h4></li>
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Live UpKeep</h4></li>
                        </ul>
                        {/* <button className='custom-button-start' data-toggle="tab" href="#contact_us">Start Now</button> */}
                        <AnchorLink className='custom-button-start mb-3' data-toggle="tab" href="#contact_us" role="tab">Start Now</AnchorLink>

                    </div>
                    <div class="col-sm-8">
                        {/* <img src={IdewqimageImg} className="sPlay" /> */}
                        <video width="100%" controls  poster={IdewqimageImg} className="sPlay" >
                            <source src="../../video/financialPro.mp4" type="video/mp4" />
                        </video>

                        <div className='row p-5'>
                            <div className='col mb-1'><button className='custom-button'>Advance Deep Dive</button></div>
                            <div className='col mb-1'><button className='custom-button-extra'>Client Testimonials</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection