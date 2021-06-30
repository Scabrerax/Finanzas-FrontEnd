import React from 'react'
import './home.css'

import { Navbar } from '../Navbar/Nabvar'
import { Footer } from '../footer/Footer'
import { Tarjetas } from './Tarjetas'

export const Home = () => {
  const tarjetas = [1, 2, 3, 4, 5,6,7,8,9,10,11,12]
  return (
    <div>
      <Navbar />

      <div className="container main">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            tarjetas.map((tarjeta, index) => (
              <Tarjetas
                key={index}
                tarjeta
              />
            ))
          }
        </div>
      <button className="ml-auto btn btn-success btn-circle btn-xl toggle mt-2">
        <h1>+</h1>
      </button>
      </div>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}
