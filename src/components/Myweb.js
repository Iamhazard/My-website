import './Myweb.css';
import React from 'react';
import Flag from './Flag.js';
import mountain from './mountain.png';
import MiddleConatiner from './Middleconatiner';
import cloud from './cloud.png';

const WebContainer =() =>{


    return  (<div className='body1'>
      <div className='top-container'>
      <Flag/>
    <h1>I'm Amrit.</h1>
    <h2 className="web"> A web developer.</h2>
    <img className='bottom-cloud' src ={cloud} alt="cloud"/>;
   <img src ={mountain} alt="mountain"/>;
</div>
 <MiddleConatiner/>
 <div class="bottom-container">
    <a class="footer-link" href="https://www.facebook.com/amrit.acharya.56863">Facebook</a>
    <a class="footer-link" href="https://www.instagram.com/_amrit_js/">Instagram</a>

    <p class="copyright">© Amrit Acharya. All rights reserved</p>
  </div>
    </div>

    );
};

export default WebContainer;