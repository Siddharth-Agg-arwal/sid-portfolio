import React from 'react';
import styles from './projectpopup.module.css';
import PopupLeftSection from './popupleftsection';
import PopupRightSection from './popuprightsection';

interface ProjectPopupProps {
    project: {
        title: string;
        description: string;
        link: string;
        index: number;
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
    ];

    const currPopup = popupInformation[project.index];

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.leftSection}>
                {/* Pass onClose to PopupLeftSection */}
                <PopupLeftSection index={project.index} onClose={onClose} />
            </div>
            <div className={styles.rightSection}>
                <PopupRightSection index={project.index} />
            </div>
        </div>
    );
};

export default ProjectPopup;
