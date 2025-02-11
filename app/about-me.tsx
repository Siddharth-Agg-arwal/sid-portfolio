import styles from './css/aboutme.module.css';
import Image from "next/image";
import Socials from "@/components/aboutme/socials";

export default function AboutMe(){
    return (
        <div className={styles.main}>
            <div className={styles.leftComp}>
                <Image src="/about_me/1yes.jpg" alt="me" height={600} width={430} className={styles.me}/>
            </div>
            <div className={styles.rightComp}>
                <div className={styles.introduction}>
                    <p className={styles.heading}>Introduction</p>
                    <div className={styles.intro}>
                        <p className={styles.intro_heading}>A Developer Designer based in Chandigarh</p>
                        <p className={styles.into_content}>Hey, I'm Siddharth Aggarwal, a tech enthusiast and problem solver with a passion for innovation. I love tackling complex challenges, designing intuitive solutions, and constantly learning new things. Whether it's building products, optimizing systems, or brainstorming creative ideas, I thrive in dynamic environments and enjoy collaborating with like-minded people to make an impact!</p>
                    </div>
                </div>
                <hr className={styles.intro_breaker}></hr>
                <div className={styles.socials}>
                    <p className={styles.heading}>Get In Touch</p>
                    <div className={styles.socialHandles}>
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}