import styles from './projectpopup.module.css' 
import React from 'react';

interface PopupLeftSectionProps {
    onClose: () => void;
}

const PopupLeftSection: React.FC<PopupLeftSectionProps> = ({ onClose }) => {
    return(
        <div className={styles.leftSectionContent}>
            <div className={styles.closeProject}><button onClick={onClose}>Close from Left Section</button></div>
            <div className={styles.content}>
                <div className={styles.projectTitle}>
                    Plexus
                </div>
                <div className={styles.projectDescription}>
                at scelerisque In dolor est. dui. quam lorem. scelerisque elit lobortis, in tincidunt facilisis commodo non lobortis, ac Nunc tincidunt quis adipiscing eu risus viverra ex non placerat Nunc Vestibulum odio facilisis hendrerit tincidunt in 
                </div>
                <div className={styles.tech_stack}>
                    <div className={styles.tech_stack_title}>
                        Tech Stack
                    </div>
                    <div className={styles.tech_stack_list}>
                        <ul>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.organisation}>
                    <div className={styles.organisation_title}>
                        Organisation
                    </div>
                    <div className={styles.organisation_name}>
                        <a href="https://www.example.com">Example</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectChanger}>

            </div>
        </div>

    )
}

export default PopupLeftSection;