import React from "react";
import profile from './profile.png';
import webdeveloper from './webdeveloper.png';
import './MiddleContainer.css';

const MiddleConatiner =()=>{

    return(<div className="middle-container">
    <div className="profile">
        <img className="profile-image" src={profile} alt="profilephoto"/>
        <h2>Hello.</h2>
        <p className="intro">I'm a web developer and a digital marketer.I love travelling and music.</p>
    </div>

<div className="skills">
    <h2>My Skills</h2>
    <div className="skill-row">
        <img className="web-developer" src={webdeveloper} alt="web-developer"></img>
        <h3>Web development</h3>
        <p>Although I started lately on coding it didn't took me long to be a good web developer.
        Overtime, I have gained a lot of experience in this field and can provide good value for you.</p>

    </div>
    
    
</div>
<div className="contact-message">
<h2>Get In Touch</h2>
      <p className="contact-message">
    Love travelling as much as I do?
      Lets exchange our travel stories while coding.</p>
      <a className="btn" href="mailto:amrithazard@gamil.com">CONTACT ME</a>
</div>
</div>

    );
};

export default MiddleConatiner;