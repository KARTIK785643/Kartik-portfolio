import React from 'react';
import "../styles.css";

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'C++',
  'Python',
  'Git & GitHub',
  'Problem Solving (DSA)',
  'REST APIs'
];

const SkillSection = () => (
  <div className="skills-section glass">
    <h2>My Skills</h2>
    <div className="skills">
      {skills.map(skill => (
        <span className="skill" key={skill}>{skill}</span>
      ))}
    </div>
  </div>
);

export default SkillSection;
