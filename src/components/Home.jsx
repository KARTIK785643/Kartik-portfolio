
import React from 'react';
import ResumeDownload from '../components/ResumeDownload';  // Import added

const Home = () => (
  <div className="home-section glass">
    {/* Image on the left */}
    <div className="profile-container">
      <img 
        src="/me.jpg" 
        alt="Kartik's portrait" 
        className="profile-photo"
      />
    </div>

    {/* Text content on the right */}
    <div className="home-content">
      <h1>Hi, I'm Kartik</h1>
      <p>E-mail : kartik4023@gmail.com</p>
      <p className="subtitle">Aspiring Software Developer | Creative Web Developer</p>
      <p>Welcome to my portfolio!</p>
      <ResumeDownload/>
    </div>
  </div>
);

export default Home;
