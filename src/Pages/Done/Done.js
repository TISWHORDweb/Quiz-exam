import React from 'react'
import Navbar from '../../components/Navbar3'
import Img1 from '../../Assets/img/img (3).png'
import Result from '../../components/Result';

function Done() {

    return (
        <div>
            <div className="">
                <div class="DONE">
                    <div class="col-md-12">
                        <Navbar />
                        <div class="container pb-5" >
                            <div class="row ">
                                <div class="col-md-6 mt-5">
                                    <img src={Img1} alt="" />
                                </div>
                                <div class="col-md-6 p-5">
                                    <div class="textts m-5">
                                        <h1>Hi <span id="namy">Emmanuel</span></h1>
                                        <h2>Your Quiz have finish we believe you did your best</h2>
                                        <h2>We wish you Good luck!!!</h2>

                                        {/* <!-- <button id="check">check</button> --> */}
                                            <Result />
                                        {/* <center>
                                            <div class="  " id="">
                                                <div class="col-md-12 " >
                                                    <button type="button" class="btn btn-light " data-bs-toggle="modal" id="check" data-bs-target="#exampleModal">
                                                        Check Result <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                                        </svg></button>
                                                </div>
                                            </div>
                                        </center> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Done