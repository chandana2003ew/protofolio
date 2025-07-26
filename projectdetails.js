import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectData = {
  farm: {
    title: 'Farm Management System',
    description: 'A system to track crop yields, expenses, and schedule irrigation.'
  },
  portfolio: {
    title: 'Portfolio Website',
    description: 'This portfolio site styled like a book, built with React and love.'
  },
  ai: {
    title: 'AI Model Deployment',
    description: 'Deployed ML model using Flask + Streamlit + Docker.'
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="details">
      <Link to="/" className="back">← Back to Portfolio</Link>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
