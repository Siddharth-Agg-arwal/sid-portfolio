import React from 'react';
import styles from './projectpopup.module.css';
import Image from 'next/image';

interface PopupRightSectionProps {
    index: number;
}

const PopupRightSection: React.FC<PopupRightSectionProps> = ({ index }) => {
    const projectDetails = [
        {
            title: "Plexus",
            image1: "/works/plexus.png",
            image2: "/works/plexus.png",
            image3: "/works/plexus.png",
            description: "Sample description",
            organisationLink: "https://www.example.com",
            problems : [],
        },
        {
            title: "Project 2",
            image1: "/works/project2.png",
            image2: "/works/project2.png",
            image3: "/works/project2.png",
            description: "Another sample description",
            organisationLink: "https://www.example.com",
            problems : [],
        },
        {
            title: "Project 3",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            problems : [],
        },
    ];

    const project = projectDetails[index] || projectDetails[0];

    return (
        <div className={styles.rightSectionContent}>
            <div className={styles.projectImage}>
                <img src={project.image1} alt={project.title} />
                <div className={styles.projectIntro}>
                    {project.description}
                    <ul>
                        {project.problems.map((problem, i) => (
                            <li key={i}>{problem}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            <div className={styles.projectImage}>
                <img src={project.image2} alt={project.title} />
            </div>
            <div className={styles.projectImage}>
                <img src={project.image3} alt={project.title} />
            </div>

            <div className={styles.projectLink}>
                <a href={project.organisationLink} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </a>
            </div>
        </div>
    );
};

export default PopupRightSection;
