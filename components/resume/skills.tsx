import styles from './skills.module.css'
import Image from 'next/image'

export default function Skills(){

    const imagePaths = [
        "/resume/logos/1.png",
        "/resume/logos/01.png",
        "/resume/logos/02.png",
        "/resume/logos/2.png",
        "/resume/logos/03.png",
        "/resume/logos/3.png",
        "/resume/logos/4.png",
        "/resume/logos/04.png",
        "/resume/logos/5.png",
        "/resume/logos/6.png",
        "/resume/logos/7.png",
        "/resume/logos/8.png",
        "/resume/logos/9.png",
        "/resume/logos/10.png",
        "/resume/logos/010.png",
        "/resume/logos/11.png",
        "/resume/logos/12.png",
        "/resume/logos/13.png",
        "/resume/logos/14.png",
        "/resume/logos/15.png",
        "/resume/logos/16.png",
        "/resume/logos/17.png",
        "/resume/logos/ai.png",
        "/resume/logos/android.png",
        "/resume/logos/git.png",
        "/resume/logos/github.png",
        "/resume/logos/ps.png",
        "/resume/logos/render.png",
        "/resume/logos/vscode.png",
        // "/resume/logos/image3.jpg",
        // Add additional image paths as needed.
    ];

    return (
        <div className={styles.main}>
            <div className={styles.expertise}>
                <div className={styles.heading}>
                    <div>Expertise</div>
                    <div><Image src="/resume/Down.png" alt="down" width={25} height={25} /></div>
                </div>
                <div className={styles.expertise_content}>
                    <p>I specialize in building scalable, user-centric applications with a strong focus on performance optimization, UI/UX design, and seamless integrations. My expertise spans full-stack development, AI-driven solutions, and crafting intuitive digital experiences.</p>
                </div>
            </div>
            <hr></hr>
            <div className={styles.heading}>
                    <div>Hard Skills</div>
                    <div><Image src="/resume/Down.png" alt="down" width={25} height={25} /></div>
            </div>
            <div className={styles.hardskills}>
                <div>
                <Image src="/resume/robo.gif" alt="" width={300} height={150} className={styles.hardskills_img} />
                <div className={styles.stack_icons}>
                    {imagePaths.map((src, index) => (
                        <div
                            key={index}
                            style={{
                            position: "relative",
                            }}
                        >
                            <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            height ={40}
                            width = {40}
                            className={styles.icon_img}
                            />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}