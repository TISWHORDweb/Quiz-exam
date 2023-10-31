import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Result from './Result'


function Navbar() {
    const [registered, setRegistered] = useState(true)
    return (
        <div>
            <div className="">
                <nav class="navbar navbar-expand-lg p-3">
                    <div class="container">
                        <Link to="/"> <span className='logo'>LumenVeritas</span></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <span class="navbar-nav me-auto mb-2 mb-lg-0"></span>
                            {registered ? <div className="">
                                <Link to="/signup"> <button className='btn1'>Register</button></Link>
                                <Link to="/signin"> <button className='btn2'>Log in</button></Link>
                            </div> : <Result /> }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar