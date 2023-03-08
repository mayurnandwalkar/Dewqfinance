import React, { useEffect } from 'react'
import CloseImg from '../images/colose.png'
import { AiFillStar } from "react-icons/ai";
import testimage from '../images/testimages.jpg'
import testimage2 from '../images/test2.png'
import testimage3 from '../images/test3.png'
import CoomaImg from '../images/commaImg.png'
import Carousel from 'react-grid-carousel'


const ClientTestimainials = ({ flagtestimonial, handleClosePopup ,ref}) => {
    return (
        <>
            <div class={`modal fade ${flagtestimonial ? "show" : ""} bd-example-modal-lg`} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ "background": "#3a3839", "border-bottom": "none" }}>
                            <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                            <img src={CloseImg} style={{ "width": "36px" }} onClick={handleClosePopup} />
                        </div>

                        <div class="modal-body" style={{ "background": "#3a3839" }}  ref={ref} >
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
                                                <img src={CoomaImg} class="flex"/>
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
                                                <img src={CoomaImg} class="flex"/>
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
                                                <img src={CoomaImg} class="flex"/>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ClientTestimainials