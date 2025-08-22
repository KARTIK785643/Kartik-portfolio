import React from 'react';

const ResumeDownload = () => {
  const resumeUrl = '/Kartik.resume.pdf'; // Put your resume file in the public folder with this name or update path

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <a 
        href={resumeUrl}
        download="Kartik.resume.pdf"
        className="download-button"
        aria-label="Download my resume"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default ResumeDownload;