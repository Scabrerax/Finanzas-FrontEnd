import React from 'react'
import './home.css'

import {Navbar} from '../Navbar/Nabvar'
import { Footer} from '../footer/Footer'

export const Home = () => {
    // const tarjetas = [1,2,3,4,5]
    return (
        <div>
            <Navbar />
            <h1>Hola putito</h1>
            <Footer />
        </div>
    )
}
