import Image from 'next/image'
import styles from './experience.module.css'

export default function Experience(){
    
    const experiences = [
        {from : "2024", to: "present", company:"Nyte Ventures", job_title:"Technical Lead (App development in Flutter and Node.js)", month_from: "May", month_to : "Present", status: "/resume/Clock.png"},
        {from : "2023", to: "2024", company:"Pixel Canine Design Studios", job_title:"Freelance Developer Designer (Web Development in Next.js, Typescript and CSS)", month_from: "December", month_to : "April", status: "/resume/Checkmark.png"},
        {from : "2022", to: "2022", company:"NIELIT", job_title:"ML Trainee (Machine Learning using Sklearn, Flask, Pandas, Numpy)", month_from: "May", month_to : "July", status: "/resume/Checkmark.png"},
    ]

    return(
        <div className={styles.main}>
            <div className={styles.heading}>Experience</div>
                {experiences.map((experience) => (
                    <>
                    <div className={styles.card}>
                        <div className={styles.upper_card}>
                            <div className={styles.dates}>{experience.from} - {experience.to}</div>
                            <div className={styles.status}><Image src={experience.status} alt="status" width={25} height={25} /></div>
                        </div>
                        <div className={styles.middle_card}>
                            <div className={styles.title}>{experience.company}</div>
                            <div className={styles.job_title}>{experience.job_title}</div>
                        </div>
                        <div className={styles.lower_card}>
                            <div className={styles.timeline}><Image src="/resume/lbr.png" alt="lbr" width={250} height={6.5} /></div>
                            <div className={styles.months}>
                                <div>{experience.month_from}</div>
                                <div>{experience.month_to}</div>    
                            </div>
                        </div>
                    </div>
                    </>
                ))}
            
        </div>
    )
}