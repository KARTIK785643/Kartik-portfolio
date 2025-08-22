
import React from 'react';

/**
 * For each project, you can add:
 * - title
 * - description
 * - optional image URL (preview)
 * - optional live demo URL or repo link
 */
const projects = [
  {
    title: "Quiz Gnerator website",
    description: "Create, share links and attempt quizzes with live leaderboard feature",
    image: "/quiz.png", // example path, add actual image in public folder
    url: "https://github.com/KARTIK785643/Quiz-Generator-website",
  },
  {
    title: "Country Explorer",
    description: "Find all details about every country with latest news",
    image: "/country.png",
    url: "https://github.com/KARTIK785643/Countryexplorer",
  },
  {
    title: "Movie recommendation system",
    description: "Find best movie as per your choice ",
    image: "/movie.png",
    url: "https://github.com/KARTIK785643/movie-recommendation",
  },
];

const Projects = () => (
  <div className="projects-section glass">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map(({ title, description, image, url }, index) => (
        <a
          key={index}
          href={url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
          aria-label={`View project ${title}`}
        >
          {image && <img src={image} alt={`${title} screenshot`} className="project-image" />}
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      ))}
    </div>
  </div>
);

export default Projects;
