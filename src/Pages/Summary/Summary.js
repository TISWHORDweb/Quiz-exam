import React from 'react'
import Img1 from '../../Assets/img/img (2).png'
import Navbar from '../../components/Navbar2'

function Summary() {
    return (
        <div>
            <div class="summary">
                <div class="col-md-12">
                    <Navbar />
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="textt mt-5">
                                    <h2>WELCOME Emmanuel</h2>
                                    <h2>From Rework</h2>
                                    <p>Congrats you've been registered to this year 2022 Quiz competition, you can start anytime from now </p>
                                    <p>Read this instructions carefully :</p>
                                    <ul>
                                        <li>NO Cheating</li>
                                        <li>You have only two (2) minutes to answer each questions</li>
                                        <li>Be fast</li>
                                        <li>Dont start the quiz if any metal items are with you</li>
                                        <li>only pencils allowed for calculation</li>
                                        e.t.c
                                    </ul>
                                </div>
                                <div class="buth">
                                    <a href="/quiz.html"><button id="start">START QUIZ</button></a> <br />
                                    <span>Reminder: Quiz start immediately after Clicking START QUIZ</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <img src={Img1} alt="" />
                            </div>
                        </div>

                        <div class="m-5">
                            <h3>Lists of all the winners from previous years.</h3>
                        </div>

                        <div class="slide pb-5">
                            <div class="carousel">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div class="cell1">
                                            <div class="james">
                                                <div class="txt1">
                                                    <span>★★★★★</span>
                                                    <h5>Nicoletthe Afable</h5>
                                                    <p class="mt-2">He's one of the Best won it three times in a row ,From Unique Technology school</p>
                                                    <span>2019-2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="cell1">
                                            <div class="james">
                                                <div class="txt1">
                                                    <span>★★★★★</span>
                                                    <h5>Nicoletthe Afable</h5>
                                                    <p class="mt-2">He's one of the Best won it three times in a row ,From Unique Technology school</p>
                                                    <span>2019-2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="cell1">
                                            <div class="james">
                                                <div class="txt1">
                                                    <span>★★★★★</span>
                                                    <h5>Nicoletthe Afable</h5>
                                                    <p class="mt-2">He's one of the Best won it three times in a row ,From Unique Technology school</p>
                                                    <span>2019-2022</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="cell1">
                                            <div class="james">
                                                <div class="txt1">
                                                    <span>★★★★★</span>
                                                    <h5>Nicoletthe Afable</h5>
                                                    <p class="mt-2">He's one of the Best won it three times in a row ,From Unique Technology school</p>
                                                    <span>2019-2022</span>
                                                </div>
                                            </div>
                                        </div>
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

export default Summary