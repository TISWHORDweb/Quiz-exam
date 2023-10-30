import React from 'react'

function Login() {
    return (
        <div>
            <div className='secondp'>
                <div class="col-md-12 ">
                    <div class="nav">
                        <h2 class=""><a href="#">LumenVeritas</a>  </h2>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div class="container ">
                        <div class="row m-5 p-5 ">
                            <div class="col-md-6  p-0 signss">
                                <div class="funcs">
                                    <p class=" ">"It is in fact a part of the function of education to help us escape, not from our own time – for we are bound by that—but from the intellectual and emotional limitations of our time." — <b>T.S. Eliot</b></p>
                                </div>

                            </div>
                            <div class="col-md-6  p-0">
                                <div class="navs">
                                    <a id="linn">Log in</a>
                                </div>
                                <div class="inp">
                                    <form action="">
                                        <label for="">Candidate Email</label> <br />
                                        <input type="text" placeholder="Enter Address" id="emmail" name='email' /> <br /><br />
                                        <label for="">Candidate Password</label> <br />
                                        <input type="password" placeholder="Enter Password" id="noom" name='password' /> <br /><br />
                                        <button type='submit' id="btnSign">Register</button>
                                    </form>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login