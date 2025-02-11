"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  // Define the tabs.
    const tabs = ["Set Music", "About Me", "Resume", "Work"];

    // Use state to track which tab is active.
    const [activeTab, setActiveTab] = useState(tabs[0]);

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
                key={tab}
                onClick={() => setActiveTab(tab)}
                // Conditionally add the "active" class to underline the selected tab.
                className={activeTab === tab ? styles.active : ""}
                >
                {tab}
                </li>
            ))}
            </ul>
            {/* <p className={styles.name}>Siddharth&nbsp;Aggarwal</p> */}
        </div>
        <div className={styles.leftContent}>Developer Portfolio</div>
        </div>
    );
}
