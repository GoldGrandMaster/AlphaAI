import React from 'react';
import '../styles/home.scss'
import {Link} from 'react-router-dom';
import peloton from "../assets/peloton_black.png";
import atlassian from "../assets/atlassian_black.png";
import bloomberg from "../assets/bloomberg_black.png";
import vmware from "../assets/vmware_black.png";
import stripe from "../assets/stripe_black.png";
import goldmansachs from "../assets/goldmansachs_black.png";
import adobe from "../assets/adobe_black.png";
import linkedin from "../assets/linkedin_black.png";

const home = () => {
  return (
    <main>
      {/* <div className='home22-intro'>
        <div className='home22-intro-content'>
          <h1 className='home22-intro-title'>Skills speak louder than words</h1>
          <div className='home22-intro-text'>
            <p>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
            <p>
              <Link className='signup' to = {"/signup"}>Sign up</Link>
              <Link className = 'requestdemo' to = {"/"}>Request demo</Link>
            </p>
            <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
            <div className='client_logos'>
              <img src={peloton} alt='Graphics' style = {{width: '91px'}} />
              <img src={atlassian} alt='Graphics' style = {{width: '139px'}} />
              <img src={bloomberg} alt='Graphics' style = {{width: '91px'}} />
              <img width='91' src={vmware} alt='Graphics' />
              <img src={stripe} alt='Graphics' width='90px' />
              <img src={goldmansachs} alt='Graphics' width='121px' />
              <img src={adobe} alt='Graphics' width='89px' />
              <img src={linkedin} alt='Graphics' width='115px' />
            </div>
          </div>
        </div>
      </div> */}
      <div className='home22-hiring'>
        <h2 className='home22-hiring-title'>
          It's not a pipeline problem.
          <span>It's a spotlight problem.</span>
        </h2>
      </div>
    </main>
  );
};

export default home;