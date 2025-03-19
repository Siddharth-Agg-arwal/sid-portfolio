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
            title: "Nyte",
            description: "Nyte is a mobile application designed to revolutionize the clubbing experience by seamlessly integrating social discovery with event management and in-club transactions. The app caters to both club-goers and club managers, creating a cohesive environment where fun and convenience intersect.",
            techStack: ["Flutter", "NodeJS", "SQL", "Figma"],
            organisation: "Nyte Ventures",
            organisationLink: "https://www.example.com"
        },
        {
            title: "Plexus",
            description: "Plexus is a dynamic web platform tailored for the Thapar Institute of Engineering and Technology, aimed at streamlining the placement process for students, faculty, and recruiters. By automating and centralizing various aspects of recruitment, Plexus bridges the communication gap between students and recruiters, simplifying the overall placement journey.",
            techStack: ["Figma", "ReactJS", "Tailwind CSS"],
            organisation: "Thapar Institute of Engineering and Technology",
            organisationLink: "https://www.techcorp.com"
        },
        {
            title: "HackOWASP 6.0",
            description: "HackOWASP 6.0 served as the flagship hackathon event for the OWASP TIET student chapter, attracting thousands of participants. The official website was meticulously crafted to provide detailed information about the event, facilitating registrations and offering comprehensive insights into the hackathon’s structure, tracks, prizes, sponsors, and FAQs.",
            techStack: ["ReactJS", "ThreeJS", "SCSS"],
            organisation: "OWASP TIET Student Chapter",
            organisationLink: "https://www.nebulainc.com"
        },
        {
            title: "AcadAlly",
            description: "Acadally is an innovative, AI-driven education platform that personalizes learning experiences for students. By integrating advanced AI technology with interactive 3D avatars, Acadally transforms conventional studying into an engaging and adaptive learning journey.",
            techStack: ["NextJS", "Figma", "CSS"],
            organisation: "College Project",
            organisationLink: "https://www.nebulainc.com"
        },
        {
            title: "Mystiqode",
            description: "Mystiqode is an event portal designed for a Capture The Flag (CTF) competition organized by the OWASP Thapar Student Chapter. The website’s design is thematically inspired by the enigmatic Zodiac Killer, creating an immersive experience for around 2000 participants who register as teams to compete in the challenge.",
            techStack: ["ReactJS", "React Fiber"],
            organisation: "OWASP TIET Student Chapter",
            organisationLink: "https://www.nebulainc.com"
        },
        {
            title: "FlowCellutions",
            description: "FlowCellutions is a corporate website for a company specializing in battery monitoring and diagnostics. The website is designed to convey the company’s expertise in providing innovative diagnostic solutions and to offer clear, accessible information about its products and services.",
            techStack: ["Framer", "Figma"],
            organisation: "FlowCellutions",
            organisationLink: "https://www.nebulainc.com"
        },
        {
            title: "Prabhav Khandelwal's Portfolio",
            description: "This is a comprehensive personal portfolio designed for Brooklyn-based developer and designer Prabhav Khandelwal. The portfolio is intended to serve as an all-encompassing showcase of Prabhav’s projects, professional journey, and design expertise, making it easier for potential employers and collaborators to understand his skill set and past work.",
            techStack: ["NextJS", "SCSS"],
            organisation: "Pixel Canine Design Studios",
            organisationLink: "https://www.nebulainc.com"
        },
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
                        {/* <a href={project.organisationLink} target="_blank" rel="noopener noreferrer"> */}
                            {project.organisation}
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupLeftSection;
