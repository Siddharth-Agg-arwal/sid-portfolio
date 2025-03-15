// projectpopup.tsx
"use client";
import React from 'react';
import styles from './projectpopup.module.css';

interface ProjectPopupProps {
  project: {
    title: string;
    description: string;
    link: string;
    // add any other properties as needed
  };
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button onClick={onClose}>Close</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* <img src={project.link} alt={project.title} /> */}
      </div>
    </div>
  );
};

export default ProjectPopup;
