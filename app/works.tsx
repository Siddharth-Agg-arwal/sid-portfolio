import ProjectCards from '@/components/works/projectcards'
import styles from './css/works.module.css'
import Image from 'next/image'

export default function Works(){
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <div>Projects</div>
                <div className={styles.downImg}><Image src="/resume/Down.png" alt="down" width={25} height={25} /></div>
            </div>
            <div className={styles.project_cards}><ProjectCards /></div>
        </div>
    )
}