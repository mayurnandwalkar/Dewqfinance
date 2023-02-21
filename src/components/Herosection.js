import React from 'react'
import IdewqimageImg from '../images/SPlay.png'

const Herosection = () => {
    return (
        <section class="herosection tf-section section-choose-us">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <p className='know-where' >Know where your Business is and where it is going to be..</p>
                        <ul class="p-5">
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Pro Forma</h4></li>
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Business Plan</h4></li>
                            <li style={{ "color": "white", "list-style-type": "disc", "font-size": "30px " }}><h4>Live UpKeep</h4></li>
                        </ul>
                        <button className='custom-button-start'>Start Now</button>

                    </div>
                    <div class="col-sm-8">
                        <img src={IdewqimageImg} className="sPlay" />

                        <div className='row p-5'>
                            <div className='col'><button className='custom-button'>Advance Deep Dive</button></div>
                            <div className='col'><button className='custom-button-extra'>Client Testimonials</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection