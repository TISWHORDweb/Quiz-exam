import React from 'react'

function Result() {

    let Score = localStorage.getItem('score');

    return (
        <div>
            <div className="">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Quiz Results</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="models">
                                    <center>
                                        <h3 class="m-3">
                                            Congratulation you really did try your Best
                                        </h3>
                                        <h1>
                                            {Score}
                                        </h1>

                                        <div class="mt-3">
                                            <button className='btn3'>Home</button>
                                        </div>

                                        {/* <!-- <h1>your score is <span id="num"></span></h1> --> */}
                                    </center>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                {/* <!-- <button type="button" class="btn btn-primary">Save changes</button> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                <center>
                    <div class="  " id="">
                        <div class="col-md-12 " >
                            <button type="button" class="btn5 " data-bs-toggle="modal" id="check" data-bs-target="#exampleModal">
                                Check Result <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                </svg></button>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Result