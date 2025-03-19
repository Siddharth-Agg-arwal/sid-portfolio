import React from 'react';
import styles from './projectpopup.module.css';
import Image from 'next/image';

interface PopupRightSectionProps {
    index: number;
}

const PopupRightSection: React.FC<PopupRightSectionProps> = ({ index }) => {
    const projectDetails = [
        {
            title: "Nyte",
            image1: "/works/plexus.png",
            image2: "/works/plexus.png",
            image3: "/works/plexus.png",
            description: "Sample description",
            organisationLink: "https://www.example.com",
            heading1 : "User Experience",
            heading2 : "Admin Functionality",
            keyfeatures1 : ["Browse upcoming events, view details, and discover clubs nearby.","Book entry passes effortlessly, eliminating long waiting times.","Use “cover points,” an in-app currency, to purchase food and beverages directly inside the club."],
            keyfeatures2 : ["Simplified customer admission process to manage crowd flow.","Easy event posting to keep the clientele updated with the latest happenings.","Transaction monitoring to track in-club purchases and manage finances efficiently."]
        },
        {
            title: "Plexus",
            image1: "/works/project2.png",
            image2: "/works/project2.png",
            image3: "/works/project2.png",
            description: "Another sample description",
            organisationLink: "https://www.example.com",
            heading1 : "For Students",
            heading2 : "For Recruiters",
            keyfeatures1 : ["An intuitive application process where details from previous submissions are auto-populated, reducing repetitive data entry.","A centralized hub for job listings and placement notifications.","Built-in query and doubt resolution features allow direct communication between students, the placement cell, and recruiters."],
            keyfeatures2 : ["Customizable templates to quickly post job opportunities and internships.","A user-friendly dashboard to manage applications and interact with potential candidates."]
        },
        {
            title: "HackOWASP 6.0",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Event Details",
            heading2 : "Design and Registration",
            keyfeatures1 : ["Complete information on event schedules, tracks, prizes, sponsors, and frequently asked questions.", "A user-friendly layout that simplifies navigation and information discovery."],
            keyfeatures2 : ["Streamlined registration process to manage high volumes of participant sign-ups seamlessly.","Utilized Figma to design a clean and engaging interface that reflects the innovative spirit of the hackathon."]
        },
        {
            title: "AcadAlly",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Content Integration",
            heading2 : "Interactive Learning",
            keyfeatures1 : ["Students can upload educational material (PDFs/PPTs) or simply enter a topic of interest.", "The system intelligently processes the content to tailor the learning session."],
            keyfeatures2 : ["An AI-powered 3D avatar serves as a virtual tutor, providing explanations and visual aids to enhance understanding.","The platform dynamically adjusts the pace of instruction based on the learner’s performance and comprehension."]
        },
        {
            title: "Mystiqode",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Registration Portal",
            heading2 : "Thematic Design",
            keyfeatures1 : ["A robust and intuitive system that supports team registrations, catering to thousands of participants.","A robust and intuitive system that supports team registrations, catering to thousands of participants."],
            keyfeatures2 : ["Seamless navigation and interactive elements that enhance the user experience and maintain engagement throughout the registration process.","Employed Firebase to handle registration data efficiently and securely."]
        },
        {
            title: "FlowCellutions",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Product & Service Information",
            heading2 : "Visual Design",
            keyfeatures1 : ["Detailed descriptions of the company’s offerings, including battery monitoring and diagnostic solutions.","Clear contact details and call-to-action sections to encourage user engagement."],
            keyfeatures2 : ["A clean, professional design that effectively communicates the brand’s identity and technological edge.","Intuitive layout and structure that allow visitors to easily find the information they need."]
        },
        {
            title: "Prabhav Khandelwal's Portfolio",
            image1: "/works/project3.png",
            image2: "/works/project3.png",
            image3: "/works/project3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Project Showcase",
            heading2 : "Personal Branding",
            keyfeatures1 : ["Detailed sections highlighting various projects and past works, including case studies and visual samples.","A well-crafted \"About\" section that encapsulates Prabhav’s professional background, design philosophy, and achievements."],
            keyfeatures2 : ["An engaging and intuitive design that balances aesthetics with functionality, making navigation effortless and information easily accessible.","Ensures a smooth experience across devices, reflecting a modern, responsive design approach."]
        },
    ];

    const project = projectDetails[index] || projectDetails[0];

    return (
        <div className={styles.rightSectionContent}>
            <div className={styles.projectImage}>
                <img src={project.image1} alt={project.title} />
                <div className={styles.projectIntro}>
                    <div className={styles.introLeft}>
                        {project.heading1}
                        <ul>
                            {project.keyfeatures1.map((kf1, i) => (
                                <li key={i}>{kf1}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.introRight}>
                        {project.heading2}
                        <ul>
                            {project.keyfeatures2.map((kf2, i) => (
                                <li key={i}>{kf2}</li>
                            ))}
                        </ul>
                    </div>                    
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
