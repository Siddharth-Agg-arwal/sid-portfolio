    "use client";

    import { useState, useEffect } from "react";
    import Image from "next/image";
    import styles from "./navbar.module.css";

    interface Tab {
    label: string;
    path: string;
    }

    export default function Navbar() {
    const tabs: Tab[] = [
        { label: "Set Music", path: "set-music" },
        { label: "About Me", path: "about-me" },
        { label: "Resume", path: "resume" },
        { label: "Work", path: "works" },
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.label);
        const section = document.getElementById(tab.path);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sectionElements = tabs.map((tab) => document.getElementById(tab.path)).filter(Boolean) as HTMLElement[];

        const observerOptions = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const tabMatch = tabs.find((tab) => tab.path === entry.target.id);
            if (tabMatch) {
                setActiveTab(tabMatch.label);
            }
            }
        });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionElements.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [tabs]);

    return (
        <div className={styles.main}>
        <div className={styles.rightContent}>
            <Image
            src="/landing_page/enderman.jpg"
            width={30}
            height={30}
            alt="Picture of the author"
            className={styles.portfolio_logo}
            />
            <ul className={styles.navOptions}>
            {tabs.map((tab) => (
                <li
                key={tab.label}
                className={activeTab === tab.label ? styles.active : ""}
                onClick={() => handleTabClick(tab)}
                >
                {tab.label}
                </li>
            ))}
            </ul>
        </div>
        <div className={styles.leftContent}>Developer Portfolio</div>
        </div>
    );
    }
