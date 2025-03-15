import ProjectCards from '@/components/works/projectcards'
import styles from './css/works.module.css'

export default function Works(){
    return (
        <div className={styles.main}>
            <ProjectCards />
        </div>
    )
}