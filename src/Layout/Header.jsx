import React from 'react'
import {Link} from 'react-router-dom';
import hackrank from "../assets/hackerrank_logo.png"

import "../styles/header.scss"

// header component

const header = () => {
  return (
    <nav>
      <main>
        <img width = "170" src = {hackrank} alt = 'Graphics' />
        <div>
          <Link to = {"/"}>Products</Link>
          <Link to = {"/"}>Solutions</Link>
          <Link to = {"/"}>Resources</Link>
          <Link to = {"/"}>Pricing</Link>
        </div>
        <div>
          <Link to = "/">For candidates</Link>
          |
          <Link className = 'requestdemo' to = {"/"}>Request demo</Link>
          <Link className='signup' to = {"/signup"}>Sign up</Link>
        </div>
      </main>
    </nav>
  )
}

export default header