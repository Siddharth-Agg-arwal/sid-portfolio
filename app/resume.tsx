import Experience from '@/components/resume/experience'
import styles from './css/resume.module.css'

export default function Resume(){
    return (
        <div className={styles.main}>
            <div className={styles.leftContent}>
                <Experience />
            </div>
            <div className={styles.middleContent}>
                middle
            </div>
            <div className={styles.rightContent}>
                right
            </div>
        </div>
    )
}