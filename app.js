import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="book">
        <div className="page left">
          <h1>Chandana V</h1>
          <p>📧 vchandana00@gmail.com</p>
          <p>📱 +91-9113541977</p>
          <p><a href="https://www.linkedin.com/in/chandana-v-a4322231a" target="_blank">🔗 LinkedIn</a></p>
          <p><a href="https://github.com/chandana2003ew" target="_blank">🐙 GitHub</a></p>
        </div>
        <div className="page right">
          <h2>Projects</h2>
          <ul>
            <li><Link to="/project/farm">Farm Management System</Link></li>
            <li><Link to="/project/portfolio">Portfolio Website</Link></li>
            <li><Link to="/project/ai">AI Model Deployment</Link></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}
