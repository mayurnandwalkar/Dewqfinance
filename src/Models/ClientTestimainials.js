import React, { useEffect } from 'react'
import CloseImg from '../images/colose.png'



const ClientTestimainials = ({ flagtestimonial, handleClosePopup }) => {
    return (
        <>
            <div class={`modal fade ${flagtestimonial ? "show" : ""} bd-example-modal-lg`} id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ "background": "#3a3839", "border-bottom": "none" }}>
                            <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                            <img src={CloseImg} style={{ "width": "36px" }} onClick={handleClosePopup} />
                        </div>
                        <div class="modal-body" style={{ "background": "#3a3839" }}>
                            <div className='container'>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientTestimainials