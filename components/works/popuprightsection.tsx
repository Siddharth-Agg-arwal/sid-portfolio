import React from 'react';
import styles from './projectpopup.module.css';

interface PopupRightSectionProps {
    index: number;
}

const PopupRightSection: React.FC<PopupRightSectionProps> = ({ index }) => {
    const projectDetails = [
        {
            title: "Nyte",
            image1: "/works/nyte.png",
            image2: "/works/Nyte/2.png",
            image3: "/works/Nyte/1.png",
            description: "Sample description",
            organisationLink: "https://www.example.com",
            heading1 : "User Experience",
            heading2 : "Admin Functionality",
            keyfeatures1 : ["Browse upcoming events, view details, and discover clubs nearby.","Book entry passes effortlessly, eliminating long waiting times.","Use “cover points,” an in-app currency, to purchase food and beverages directly inside the club."],
            keyfeatures2 : ["Simplified customer admission process to manage crowd flow.","Easy event posting to keep the clientele updated with the latest happenings.","Transaction monitoring to track in-club purchases and manage finances efficiently."],
            role : "I designed the entire user interface for Nyte using Figma, ensuring that the design was both engaging and user-friendly. I then translated these designs into a fully functional mobile app using Flutter. On the backend, I built the server-side functionality with Node.js and integrated Firebase for robust authentication, which helped create a seamless and secure experience for both users and club managers.",
        },
        {
            title: "Plexus",
            image1: "/works/plexus.png",
            image2: "/works/Plexus/1.png",
            image3: "/works/Plexus/2.png",
            description: "Another sample description",
            organisationLink: "https://www.example.com",
            heading1 : "For Students",
            heading2 : "For Recruiters",
            keyfeatures1 : ["An intuitive application process where details from previous submissions are auto-populated, reducing repetitive data entry.","A centralized hub for job listings and placement notifications.","Built-in query and doubt resolution features allow direct communication between students, the placement cell, and recruiters."],
            keyfeatures2 : ["Customizable templates to quickly post job opportunities and internships.","A user-friendly dashboard to manage applications and interact with potential candidates."],
            role : "I took charge of the frontend design by creating detailed prototypes in Figma, focusing on a smooth and intuitive user experience for students, faculty, and recruiters. I then developed the web platform using React.js combined with Tailwind CSS, ensuring the interface was responsive and modern. This approach helped streamline the placement process and improve communication between all stakeholders."
        },
        {
            title: "HackOWASP 6.0",
            image1: "/works/hacko.png",
            image2: "/works/Hackowasp6/1.png",
            image3: "/works/Hackowasp6/2.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Event Details",
            heading2 : "Design and Registration",
            keyfeatures1 : ["Complete information on event schedules, tracks, prizes, sponsors, and frequently asked questions.", "A user-friendly layout that simplifies navigation and information discovery."],
            keyfeatures2 : ["Streamlined registration process to manage high volumes of participant sign-ups seamlessly.","Utilized Figma to design a clean and engaging interface that reflects the innovative spirit of the hackathon."],
            role : "I led a team of 10 developers and was deeply involved in both the design and development phases of the HackOWASP 6.0 website. I created comprehensive UI designs in Figma and implemented them using React.js. My role focused on ensuring that the website could handle high volumes of traffic during the event, while providing a seamless registration and information experience for thousands of participants."
        },
        {
            title: "AcadAlly",
            image1: "/works/acadally.png",
            image2: "/works/Acadally/1.png",
            image3: "/works/Acadally/4.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Content Integration",
            heading2 : "Interactive Learning",
            keyfeatures1 : ["Students can upload educational material (PDFs/PPTs) or simply enter a topic of interest.", "The system intelligently processes the content to tailor the learning session."],
            keyfeatures2 : ["An AI-powered 3D avatar serves as a virtual tutor, providing explanations and visual aids to enhance understanding.","The platform dynamically adjusts the pace of instruction based on the learner’s performance and comprehension."],
            role : "I developed the responsive frontend of Acadally using Next.js, concentrating on delivering a dynamic and engaging learning experience. My work involved creating an interface that supports the platform’s AI-driven features, ensuring that content delivery is both adaptive and user-friendly, thereby enhancing the overall educational experience."
        },
        {
            title: "Mystiqode",
            image1: "/works/mystiqode.png",
            image2: "/works/Mystiqode/3.png",
            image3: "/works/Mystiqode/2.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Registration Portal",
            heading2 : "Thematic Design",
            keyfeatures1 : ["A robust and intuitive system that supports team registrations, catering to thousands of participants.","A robust and intuitive system that supports team registrations, catering to thousands of participants."],
            keyfeatures2 : ["Seamless navigation and interactive elements that enhance the user experience and maintain engagement throughout the registration process.","Employed Firebase to handle registration data efficiently and securely."],
            role : "I managed a team of 8 developers and spearheaded the development and design of the Mystiqode registration portal. I crafted an intuitive, thematic UI in Figma that resonated with the event’s unique style, developed the frontend using React.js, and integrated Firebase to manage secure and efficient backend registration processes. This combination of technologies helped create a robust platform for around 2000 participants."
        },
        {
            title: "FlowCellutions",
            image1: "/works/flowcellutions.png",
            image2: "/works/FlowCellutions/1.png",
            image3: "/works/FlowCellutions/2.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Product & Service Information",
            heading2 : "Visual Design",
            keyfeatures1 : ["Detailed descriptions of the company’s offerings, including battery monitoring and diagnostic solutions.","Clear contact details and call-to-action sections to encourage user engagement."],
            keyfeatures2 : ["A clean, professional design that effectively communicates the brand’s identity and technological edge.","Intuitive layout and structure that allow visitors to easily find the information they need."],
            role : "I designed and developed the FlowCellutions website using Figma for the visual design and Framer as a no-code development tool. My focus was on creating a professional and modern website that clearly communicated the company’s battery monitoring and diagnostic services, ensuring both aesthetic appeal and functionality."
        },
        {
            title: "Prabhav Khandelwal's Portfolio",
            image1: "/works/prabhav.png",
            image2: "/works/Prabhav/2.png",
            image3: "/works/Prabhav/3.png",
            description: "Yet another description",
            organisationLink: "https://www.example.com",
            heading1 : "Project Showcase",
            heading2 : "Personal Branding",
            keyfeatures1 : ["Detailed sections highlighting various projects and past works, including case studies and visual samples.","A well-crafted \"About\" section that encapsulates Prabhav’s professional background, design philosophy, and achievements."],
            keyfeatures2 : ["An engaging and intuitive design that balances aesthetics with functionality, making navigation effortless and information easily accessible.","Ensures a smooth experience across devices, reflecting a modern, responsive design approach."],
            role : "I developed this comprehensive portfolio project using Next.js for a fast, responsive frontend and SCSS for maintainable, custom styling. My work was centered on building a detailed, engaging, and user-friendly platform that showcases Prabhav Khandelwal’s projects, professional background, and design expertise in an effective manner."
        },
    ];

    const project = projectDetails[index] || projectDetails[0];

    return (
        <div className={styles.rightSectionContent}>
            <div className={styles.projectImage}>
                <img src={project.image1} alt={project.title} />
                <div className={styles.projectIntro}>
                    <div className={styles.introLeft}>
                        <div className={styles.feature_heading}><strong>{project.heading1}</strong></div>
                        <ul>
                            {project.keyfeatures1.map((kf1, i) => (
                                <li key={i}>{kf1}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.introRight}>
                    <div className={styles.feature_heading}><strong>{project.heading2}</strong></div>
                        <ul>
                            {project.keyfeatures2.map((kf2, i) => (
                                <li key={i}>{kf2}</li>
                            ))}
                        </ul>
                    </div>                    
                </div>
                
            </div>
            <div className={`${styles.projectImage} ${styles.roleproject}`} >
                <img src={project.image2} alt={project.title} />
                <div className={styles.feature_heading}><strong>Role</strong></div>
                <div className={styles.projectRole}>
                    {project.role}
                </div>
            </div>
            <div className={styles.projectImage}>
                <img src={project.image3} alt={project.title} />
            </div>

            {/* <div className={styles.projectLink}>
                <a href={project.organisationLink} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </a>
            </div> */}
        </div>
    );
};

export default PopupRightSection;
