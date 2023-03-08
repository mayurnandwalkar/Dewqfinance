import React, { useEffect } from 'react'
import IdewqimageImg from '../images/SPlay.png'
import CloseImg from '../images/colose.png'
import testimage from '../images/testimages.jpg'

const AdvanceDeepModel = ({ flag, handleClosePopup }) => {
    return (
        <>
            <div class={`modal fade ${flag ? "show" : ""} bd-example-modal-lg`} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ "background": "#3a3839" ,"border-bottom" :"none"}}>
                            <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                            {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClosePopup}>
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            <img src={CloseImg} style={{ "width": "36px" }} onClick={handleClosePopup} />
                        </div>
                        <div class="modal-body" style={{ "background": "#3a3839" }}>
                            <div className='container'>
                                <video width="100%" controls poster={IdewqimageImg} className="sPlay"  >
                                    <source src="../../video/financialPro.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvanceDeepModel