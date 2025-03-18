import Image from 'next/image';
import styles from './projectpopup.module.css';
import React from 'react';

interface PopupLeftSectionProps {
    index: number;
    onClose: () => void;
}

const PopupLeftSection: React.FC<PopupLeftSectionProps> = ({ index, onClose }) => {
    // Dictionary containing project data mapped by index
    const projectDetails = [
        {
            title: "Plexus",
            description: "In dolor est. dui. quam lorem. scelerisque elit lobortis, in tincidunt facilisis commodo non lobortis, ac Nunc tincidunt quis adipiscing eu risus viverra ex non placerat Nunc Vestibulum odio facilisis hendrerit tincidunt.",
            techStack: ["React", "Node", "Express", "MongoDB"],
            organisation: "Example",
            organisationLink: "https://www.example.com"
        },
        {
            title: "Quantum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nunc eu suscipit malesuada.",
            techStack: ["Python", "Django", "PostgreSQL"],
            organisation: "Tech Corp",
            organisationLink: "https://www.techcorp.com"
        },
        {
            title: "Nebula",
            description: "Aenean interdum nulla sit amet leo venenatis, eget facilisis velit varius. Sed ut nulla non purus ultricies aliquet.",
            techStack: ["Vue", "Firebase", "Tailwind CSS"],
            organisation: "Nebula Inc.",
            organisationLink: "https://www.nebulainc.com"
        }
    ];

    // Ensure index is within bounds
    const project = projectDetails[index] || projectDetails[0];

    return (
        <div className={styles.leftSectionContent}>
            <div className={styles.closeProject}>
                <Image onClick={onClose} src='/works/Cancel.png' width={40} height={40} alt={''} />
            </div>
            <div className={styles.content}>
                <div className={styles.projectTitle}>{project.title}</div>
                <div className={styles.projectDescription}>{project.description}</div>
                <div className={styles.tech_stack}>
                    <div className={styles.tech_stack_title}>Tech Stack</div>
                    <div className={styles.tech_stack_list}>
                        <ul>
                            {project.techStack.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.organisation}>
                    <div className={styles.organisation_title}>Organisation</div>
                    <div className={styles.organisation_name}>
                        <a href={project.organisationLink} target="_blank" rel="noopener noreferrer">
                            {project.organisation}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupLeftSection;
