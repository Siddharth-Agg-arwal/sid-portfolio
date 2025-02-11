import Experience from '@/components/resume/experience'
import styles from './css/resume.module.css'
import Education from '@/components/resume/education'
import Skills from '@/components/resume/skills'

export default function Resume(){
    return (
        <div className={styles.main}>
            <div className={styles.leftContent}>
                <Experience />
            </div>
            <div className={styles.middleContent}>
                <Skills />
            </div>
            <div className={styles.rightContent}>
                <Education />
            </div>
        </div>
    )
}