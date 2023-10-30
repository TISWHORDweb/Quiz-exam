import React, { useEffect, useState } from 'react'
import Img1 from '../../Assets/img/img (1).png'
import { Link } from 'react-router-dom'

function Index() {

    const [textDay, setTextDay] = useState("")
    const [textHour, setTextHour] = useState("")
    const [textMinute, setTextMinute] = useState("")
    const [textSecond, setTextSecond] = useState("")

    const [Day, setDay] = useState("")
    const [dayDate, setDayDate] = useState("")
    const [month, setmonth] = useState("")
    const [year, setYear] = useState("")

    const updateClock = () => {
        let now = new Date();
        let dname = now.getDay(),
            mo = now.getMonth(),
            dnum = now.getDate(),
            yr = now.getFullYear(),
            hou = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds(),
            pe = "AM";

        if (hou === 0) {
            hou = 12;
        }
        if (hou > 12) {
            hou = hou - 12;
            pe = "PM"
        }

        Number.prototype.pad = function (digits) {
            for (var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"]
        let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"]
        let values = [weeks[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

        for (let i = 0; i < ids.length; i++)
            // document.getElementById(ids[i]).firstChild.nodeValue = values[i];
            setDay( values[0])
            setDayDate( values[2])
            setmonth( values[1])
            setYear( values[3])

    }

    // function initClock() {
      
    //     window.setInterval("updateClock()", 1);
    // }

    useEffect(()=>{
        updateClock()
    },[])

    const countdown = () => {
        const countDate = new Date("December 1, 2023 00:00:00").getTime()
        const now = new Date().getTime();
        const gap = countDate - now

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60
        const day = hour * 24


        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        setTextDay(textDay)
        setTextHour(textHour)
        setTextMinute(textMinute)
        setTextSecond(textSecond)


        if (textDay === 0 && textHour === 0 && textMinute === 0 && textSecond === 0) {
            alert("Time up for free registration you have to pay before registering")
        }

    };

    useEffect(() => {
        countdown()
    })
    return (
        <div>
            <body >
                <div class="first">
                    <div class="col-md-12 func">
                        <div class="nav">
                            <h2 class=""><span>LumenVeritas</span>  </h2>
                            <ul>
                                <li><span>About Us</span></li>
                                <li><span >Contact</span></li>
                                <li><span ><Link to="/">Register</Link></span></li>
                                <li><span >Login</span></li>
                            </ul>
                        </div>
                        <div class="container">
                            <div class="row mt-5">
                                <div class="col-md-6 mt-2">
                                    <img src={Img1} alt="" />
                                </div>
                                <div class="col-md-6 mt-5 ">
                                    <div class="sect">
                                        <p class="well">WELCOME to this year quiz competiion, you can register your school and candidate now before 1st of october, failure to do so before then you will have to pay Five thousand naira (# 5000) and this the time remaining:  </p>
                                        <div class="datetime pb-3">
                                            <div class="date">
                                                <span id="dayname">{Day} </span>
                                                <span id="month">{month} </span>
                                                <span id="daynum">{dayDate} </span>
                                                <span id="year">{year} </span>
                                            </div>
                                            <div class="time">
                                                <div class="container-">

                                                    <h2 class="day">{textDay} </h2>
                                                    <h4 class="">Day</h4>
                                                </div>
                                                <h2>:</h2>
                                                <div class="container-">

                                                    <h2 class="hour">{textHour}</h2>
                                                    <h4 >Hour</h4>
                                                </div>
                                                <h2>:</h2>
                                                <div class="container-">

                                                    <h2 class="minute">{textMinute}</h2>
                                                    <h4>Minute</h4>
                                                </div>
                                                <h2>:</h2>
                                                <div class="container-">

                                                    <h2 class="second">{textSecond}</h2>
                                                    <h4>Second</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="long ">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 pt-3">
                                        <p>"You know you can do this, right? I know you can. YOU know you can. Well, that means you're already halfway there. And the last part of anything–a movie, a level in a video game, the last inning of a baseball game–is always the best."-- <b>TIM</b></p>
                                    </div>
                                    <div class="col-md-6"><button id="make">Make payment</button>   <Link to="/signup"><button id="sign">Register</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
}

export default Index