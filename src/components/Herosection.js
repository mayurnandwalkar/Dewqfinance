import React, { useEffect, useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import IdewqimageImg from '../images/SPlay.png'
import AdvanceDeepModel from '../Models/AdvanceDeepModel'
import ClientTestimainials from '../Models/ClientTestimainials'
import CloseImg from '../images/colose.png'
import { AiFillStar } from "react-icons/ai";
import testimage from '../images/testimages.jpg'
import testimage2 from '../images/test2.png'
import testimage3 from '../images/test3.png'
import CoomaImg from '../images/commaImg.png'
import Carousel from 'react-grid-carousel'

const Herosection = () => {
    const ref = useRef(null);
    const videoRef = useRef(null);

    const [flag, setflag] = useState(false)
    const [flagtestimonial, setflagtestimonial] = useState(false)

    const handleVideoPopup = () => {
        setflag(true)
    }
    const handleTestimonials = () => {
        setflagtestimonial(true)
    }

    const handleClosePopup = () => {
        setflag(false)
        setflagtestimonial(false)
    }

    useEffect(() => {
        console.log("sdfgsdf");
        const handleOutsideClick = (event) => {
            videoRef.current.pause();
            if (ref.current && !ref.current.contains(event.target)) {
                setflag(false)
                setflagtestimonial(false)
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref]);


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
                        <AnchorLink className='custom-button-start mb-3' data-toggle="tab" href="#contact_us" role="tab">Start Now</AnchorLink>

                    </div>
                    <div class="col-sm-8">
                        <img src={IdewqimageImg} className="sPlay" />
                        {/* <video width="100%" controls poster={IdewqimageImg} className="sPlay" >
                            <source src="../../video/financialPro.mp4" type="video/mp4" />
                        </video> */}

                        <div className='row p-5'>
                            <div className='col mb-1'><button className='custom-button' onClick={handleVideoPopup}>Advance Deep Dive</button></div>
                            <div className='col mb-1'><button className='custom-button-extra' onClick={handleTestimonials}>Client Testimonials</button></div>
                        </div>
                    </div>
                </div>
                {/* <AdvanceDeepModel flag={flag} handleClosePopup={handleClosePopup} /> */}
                {/* <ClientTestimainials flagtestimonial={flagtestimonial} handleTestimonials={handleTestimonials} handleClosePopup={handleClosePopup} ref={ref} /> */}
                {/* model for ClientTestimainials */}
                <div class={`modal fade ${flagtestimonial ? "show" : ""} bd-example-modal-lg`} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header" style={{ "background": "#3a3839", "border-bottom": "none" }}>
                                <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                                <img src={CloseImg} style={{ "cursor":"pointer", "width": "36px" }} onClick={handleClosePopup} />
                            </div>

                            <div class="modal-body" style={{ "background": "#3a3839" }} ref={ref} >
                                <div className='container' >
                                    <Carousel cols={1} rows={1} gap={10} loop>
                                        <Carousel.Item>
                                            <div className='card text-center extra-bg-class'   >
                                                <div className='div-chalu-center'>
                                                    <img src={testimage2} />
                                                    <h3>Joost de Valk</h3>
                                                    <h4>Founder Yoast</h4>
                                                    <span><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /></span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                                <div className='div-left d-none d-sm-block'>
                                                    <img src={CoomaImg} class="flex" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className='card text-center extra-bg-class'>
                                                <div className='div-chalu-center'>
                                                    <img src={testimage} />
                                                    <h3>Joost de Valk</h3>
                                                    <h4>Founder Yoast</h4>
                                                    <span><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /></span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                                <div className='div-left d-none d-sm-block'>
                                                    <img src={CoomaImg} class="flex" />
                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className='card text-center extra-bg-class'>
                                                <div className='div-chalu-center'>
                                                    <img src={testimage3} />
                                                    <h3>Joost de Valk</h3>
                                                    <h4>Founder Yoast</h4>
                                                    <span><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /><AiFillStar className='chnagecolor-star' /></span>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                                <div className='div-left d-none d-sm-block'>
                                                    <img src={CoomaImg} class="flex" />
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >


                {/* model for advanve deep */}
                <div class={`modal fade ${flag ? "show" : ""} bd-example-modal-lg`} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ "background": "#3a3839" ,"border-bottom" :"none"}}>
                            <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClosePopup}>
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            <img src={CloseImg} style={{ "cursor":"arrow", "width": "36px"  }} onClick={handleClosePopup} />
                        </div>
                        <div class="modal-body" style={{ "background": "#3a3839" }}>
                            <div className='container'>
                                <video width="100%" controls poster={IdewqimageImg} className="sPlay" ref={videoRef} >
                                    <source src="../../video/financialPro.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Herosection