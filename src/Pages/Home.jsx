import React from 'react';
import '../styles/home.scss'
import {Link} from 'react-router-dom';

const home = () => {
  return (
    <>
      <div className='hr_container'>
        <div className='hr_content'>
          <div className='home22-intro-content'>
            <h1 className='home22-intro-title'>Skills speak louder than words</h1>
          </div>
          <div>
            <p className='home22-intro-text'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <p className='home22-intro-sign'>
              <Link className='signup' to = {"/signup"}>Sign up</Link>
              <Link className = 'requestdemo' to = {"/"}>Request demo</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;