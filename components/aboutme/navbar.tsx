    "use client";

    import { useState } from "react";
    import Image from "next/image";
    import styles from "./navbar.module.css";

    // Define a type for the tab object
    interface Tab {
    label: string;
    path: string;
    }

    export default function Navbar() {
    // Define the tabs with their labels and the corresponding section IDs.
    const tabs: Tab[] = [
        { label: "Set Music", path: "set-music" },
        { label: "About Me", path: "about-me" },
        { label: "Resume", path: "resume" },
        { label: "Work", path: "works" },
    ];

    // Track the active tab as a string (the tab label).
    const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

    // Update the function to use the Tab type
    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.label);
        const section = document.getElementById(tab.path);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

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
