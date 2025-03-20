import styles from './topBar.module.css'
import Image from 'next/image'

export default function TopBar() {
    return(
        <div className={styles.main}>
            <div className={styles.rightContent}>
            <Image
                src="/landing_page/enderman.jpg"
                width={30}
                height={30}
                alt="Picture of the author"
                className={styles.portfolio_logo}
            />
            <p className={styles.name}>Siddharth&nbsp;Aggarwal</p>
            </div>
            <div className={styles.leftContent}>
                Developer&apos;s Portfolio
            </div>
        </div>
    )
}