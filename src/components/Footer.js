import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/signup"><h1>LumenVeritas</h1></Link>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <div className="">
                                <Link to="/signup"> <button className='btn3'>Register</button></Link>
                                <Link to="/signin"> <button className='btn4'>Log in</button></Link>
                                <div className="m-3"></div>
                                <p className='courtesy'>© 2023 EmmyTech, Int.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer