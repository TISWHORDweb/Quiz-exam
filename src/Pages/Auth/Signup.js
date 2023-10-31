import React from 'react'
import Footer from '../../components/Footer'

function Signup() {
    return (
        <div className="">
            <div className='signup'>
                <div class="col-md-12 ">
                    <div class=" ">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div className="one">
                                </div>

                            </div>
                            <div class="col-md-6 p-5">
                                <div class="navs">
                                    <span id="linn">Register</span>
                                </div>
                                <div class="inp p-5">
                                    <form action="">
                                        <label for="">Candidate Name</label> <br />
                                        <input type="text" placeholder="candidate name" name='name' id="cand" />  <br /><br />
                                        <label for="">Candidate Email</label> <br />
                                        <input type="text" placeholder="Enter Address" id="emmail" name='email' /> <br /><br />
                                        <label for="">Candidate Password</label> <br />
                                        <input type="password" placeholder="Enter Password" id="noom" name='password' /> <br /><br />
                                        <button type='submit' className="btn3">Register</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Signup