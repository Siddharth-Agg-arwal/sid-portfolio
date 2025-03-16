// projectpopup.tsx
"use client";
import React from 'react';
import styles from './projectpopup.module.css';

interface ProjectPopupProps {
    project: {
        title: string;
        description: string;
        link: string;
        index : number;
        // add any other properties as needed
    };
    onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {

    const popupInformation = [
        {
            title: "Project 1",
            description: "Description of Project 1",
            link: "https://www.example.com",
        },
        {
            title: "Project 2",
            description: "Description of Project 2",
            link: "https://www.example.com",
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
            link: "https://www.example.com",
        },
    ]

    const currPopup = popupInformation[project.index];

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
