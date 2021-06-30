import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="text-center p-3 copy">
        © 2020 Copyright:
        <Link className="text-light" to="/">   Piggy-Bank</Link>
      </div>
    </footer>
  )
}