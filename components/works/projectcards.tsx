"use client";
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { JSX, useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import styles from './projectcards.module.css';
import React from 'react';
import ProjectPopup from './projectpopup';
import { useLenis } from 'lenis/react';


const projects = [
{   
    index : 0,
    title: 'Nyte',
    description: "Nyte is a mobile application designed to revolutionize the clubbing experience by seamlessly integrating social discovery with event management and in-club transactions. The app caters to both club-goers and club managers, creating a cohesive environment where fun and convenience intersect.",
    src: 'rock.jpg',
    link: '/works/nyte.png',
    color: '#F4F4F2',
    bordercolor : '#212121',
    textcolor : "#212121",
},
{   
    index : 1,
    title: 'Plexus',
    description: "Plexus is a dynamic web platform tailored for the Thapar Institute of Engineering and Technology, aimed at streamlining the placement process for students, faculty, and recruiters. By automating and centralizing various aspects of recruitment, Plexus bridges the communication gap between students and recruiters, simplifying the overall placement journey.",
    src: 'tree.jpg',
    link: '/works/plexus.png',
    color: '#212121',
    bordercolor : '#000000',
    textcolor : "#F4F4F2",

},
{
    index : 2,
    title: 'HackOWASP 6.0',
    description: "HackOWASP 6.0 served as the flagship hackathon event for the OWASP TIET student chapter, attracting thousands of participants. The official website was meticulously crafted to provide detailed information about the event, facilitating registrations and offering comprehensive insights into the hackathon’s structure, tracks, prizes, sponsors, and FAQs.",    src: 'water.jpg',
    link: '/works/hacko.png',
    color: '#233EFF',
    bordercolor : '#233eff',
    textcolor : "#F4F4F2",

},
{
  index : 3,
  title: 'AacadAlly', 
  description: "Acadally is an innovative, AI-driven education platform that personalizes learning experiences for students. By integrating advanced AI technology with interactive 3D avatars, Acadally transforms conventional studying into an engaging and adaptive learning journey.",
  src: 'cactus.jpg',
  link: '/works/acadally.png',
  color: '#F4f4f2',
  bordercolor : '#212121',
  textcolor : "#212121",
},
{
    index : 4,
    title: 'Mystiqode',
    description: "Mystiqode is an event portal designed for a Capture The Flag (CTF) competition organized by the OWASP Thapar Student Chapter. The website’s design is thematically inspired by the enigmatic Zodiac Killer, creating an immersive experience for around 2000 participants who register as teams to compete in the challenge.",
    src: 'cactus.jpg',
    link: '/works/mystiqode.png',
    color: '#212121',
    bordercolor : '#212121',
    textcolor : "#f4f4f2",
},
{
    index : 5,
    title: 'FlowCellutions',
    description: "FlowCellutions is a corporate website for a company specializing in battery monitoring and diagnostics. The website is designed to convey the company’s expertise in providing innovative diagnostic solutions and to offer clear, accessible information about its products and services.",
    src: 'cactus.jpg',
    link: '/works/flowcellutions.png',
    color: '#233eff',
    bordercolor : '#233eff',
    textcolor : "#f4f4f2",
},
{
    index : 6,
    title: 'Prabhav Khandelwal\'s Portfolio',
    description: "This is a comprehensive personal portfolio designed for Brooklyn-based developer and designer Prabhav Khandelwal. The portfolio is intended to serve as an all-encompassing showcase of Prabhav’s projects, professional journey, and design expertise, making it easier for potential employers and collaborators to understand his skill set and past work.",
    src: 'cactus.jpg',
    link: '/works/prabhav.png',
    color: '#f4f4f2',
    bordercolor : '#212121',
    textcolor : "#212121",
},
];

export default function ProjectCards(): JSX.Element {

  const lenis = useLenis();
    const container = useRef(null);
    // Instead of a boolean, we store the project that was clicked.
    const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  
    function openPopup(project: typeof projects[0]) {
      setSelectedProject(project);
    }
  
    function closePopup() {
      setSelectedProject(null);
    }

    useEffect(() => {
      if (selectedProject) {
        lenis?.stop(); // explicitly stops Lenis scrolling
        document.body.style.overflow = 'hidden'; // extra protection
        document.documentElement.style.overflow = 'hidden';
      } else {
        lenis?.start(); // restarts Lenis scrolling
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    
      return () => {
        lenis?.start();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      };
    }, [selectedProject, lenis]);
    
      const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
      });
  
    return (
      <ReactLenis root>
        <main className={styles.main} ref={container}>
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}></div>
          </section>
  
          <section className={styles.projectsSection}>
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  src={project.src}
                  title={project.title}
                  color={project.color}
                  bordercolor={project.bordercolor}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.15, 1]}
                  targetScale={targetScale}
                  textcolor={project.textcolor}
                  // Pass a function that opens the popup with this project’s details.
                  onClick={() => openPopup(project)}
                />
              );
            })}
          </section>
  
          {/* Conditionally render the popup when a project is selected */}
          {selectedProject && (
            <ProjectPopup
                // index = currentIndex
                project={selectedProject}
                onClose={closePopup}
            />
          )}
        </main>
      </ReactLenis>
    );
  }
  
interface CardProps {
    i: number;
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    bordercolor: string;
    textcolor: string;
    onClick: () => void;
  }
  
  export const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    src,
    url,
    color,
    progress,
    range,
    targetScale,
    bordercolor,
    textcolor,
    onClick,
  }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'start start'],
    });
  
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
  
    return (
      <div ref={container} className={styles.cardContainer}>
        <motion.div
          style={{
            backgroundColor: color,
            border: `1px solid ${bordercolor}`,
            color: textcolor,
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className={styles.cardInner}
        >
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardContent}>
            <div className={styles.cardTextContainer}>
              <p className={styles.cardDescription}>{description}</p>
              <span className={styles.cardLinkContainer}>
                {/* Attach an onClick handler to the link.
                    e.preventDefault() stops the default link behavior. */}
                <a
                  href="#"
                  className={styles.cardLink}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick();
                  }}
                >
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <div className={styles.cardImageContainer}>
              <motion.div className={styles.cardImageWrapper} style={{ scale: imageScale }}>
                <Image
                  src={url}
                  alt="image"
                  height={400}
                  width={400}
                  className={styles.cardImage}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };