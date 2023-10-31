import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Body from './Body'
import Footer from '../../components/Footer'

function Index() {


    return (
        <div>
            <body >
                <Navbar />
                <Banner />
                <Body />
                <Footer />
                {/* <p>"You know you can do this, right? I know you can. YOU know you can. Well, that means you're already halfway there. And the last part of anything–a movie, a level in a video game, the last inning of a baseball game–is always the best."-- <b>TIM</b></p> */}
            </body>
        </div>
    )
}

export default Index