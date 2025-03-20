import Image from 'next/image'
import styles from './education.module.css'

export default function Education(){
    
    const experiences = [
        {from : "2022", to: "present", company:"Thapar Institute of Engineering and Technology, Patiala", job_title:"B.E. in Computer Engineering",grade: "(9.11/10.00 CGPA)", status: "/resume/Clock.png"},
        {from : "2020", to: "2022", company:"SGGS, Chandigarh", job_title:"Higher Secondary Education in Science",grade: "(90.4/100 Percent CBSE)", status: "/resume/Checkmark.png"},
        // {from : "2022", to: "2022", company:"NIELIT", job_title:"ML Trainee (Machine Learning using Sklearn, Flask, Pandas, Numpy)", month_from: "May", month_to : "July", status: "/resume/Checkmark.png"},
    ];

    const softskill = [
        {name : "Public_Speaking", label : "active"},
        {name : "Cogent_Thinking", label : "passive" }, 
        {name : "Teamwork", label : "passive"},
        {name : "Creative_Ideation", label : "active"},
        {name : "Adaptive_Learning", label : "passive"},
        {name : "Resilient", label : "passive"}
    ];

    return(
        <div className={styles.main}>
            <div className={styles.heading}>
                    <div>Softskills</div>
                    <div><Image src="/resume/Down.png" alt="down" width={25} height={25} /></div>
            </div>
            <div className={styles.softskills}>
                {softskill.map((skill) => (
                    <div key={1} className={`${styles.soft} ${
                        skill.label === "active" ? styles.active : styles.passive
                    }`}>#{skill.name}</div>
                ))}
            </div>
            <hr></hr>
            <div className={styles.heading}>
                <div>Education</div>
                <div><Image src="/resume/Down.png" alt="down" width={25} height={25} /></div>
            </div>
            <div className={styles.edu}>
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
                            <div className={styles.grade}>{experience.grade}</div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
    )
}