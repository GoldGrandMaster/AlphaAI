import React from 'react';
import '../styles/home.scss'
import {Link} from 'react-router-dom';

const home = () => {
  return (
    <>
      <div className='home22-intro'>
        
        <div className='home22-intro-content'>
          <h1 className='home22-intro-title'>Skills speak louder than words</h1>
          <div className='home22-intro-text'>
            <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <p>
              <Link className='signup' to = {"/signup"}>Sign up</Link>
              <Link className = 'requestdemo' to = {"/"}>Request demo</Link>
            </p>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;