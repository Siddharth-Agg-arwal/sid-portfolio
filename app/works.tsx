"use client";
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { JSX, useRef } from 'react';
import Image from 'next/image';
import styles from './css/works.module.css';  // Import our CSS module

const projects = [
{
    title: 'Matthias Leidinger',
    description:
    'Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.',
    src: 'rock.jpg',
    link: '/works/plexus.png',
    color: '#233EFF',
},
{
    title: 'Clément Chapillon',
    description:
    'This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.',
    src: 'tree.jpg',
    link: '/works/acadally.png',
    color: '#212121',
},
{
    title: 'Zissou',
    description:
    'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
    src: 'water.jpg',
    link: '/works/nyte.png',
    color: '#233EFF',
},
{
    title: 'Mark Rammers',
    description:
    'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: '/works/mystiqode.png',
    color: '#212121',
},
{
    title: 'Mark Rammers',
    description:
    'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: '/works/hacko.png',
    color: '#212121',
},
{
    title: 'Mark Rammers',
    description:
    'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: '/works/prabhav.png',
    color: '#212121',
},
{
    title: 'Mark Rammers',
    description:
    'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    src: 'cactus.jpg',
    link: '/works/flowcellutions.png',
    color: '#212121',
},
];

export default function Index(): JSX.Element {
const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
});

return (
    <ReactLenis root>
    <main className={styles.main} ref={container}>
        <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        {/* Uncomment below if you want to display a heading */}
        {/*
        <h1 className="heading">
            Stacking Cards Using <br /> Framer-Motion. Scroll down! 👇
        </h1>
        */}
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
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
            />
            );
        })}
        </section>
{/* 
        <footer className={styles.footerGroup}>
        <h1 className={styles.footerTitle}>
            ui-layout
        </h1>
        <div className={styles.footerBottom}></div>
        </footer> */}
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
            <a href="#" target="_blank" className={styles.cardLink}>
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
            height={500}
            width={500}
            className={styles.cardImage}
            />
        </motion.div>
        </div>
    </div>
    </motion.div>
</div>
);
};
