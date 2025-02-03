import Image from "next/image";
import styles from "./css/landingpage.module.css";
import TopBar from "@/components/landingpage/topBar";
import PhysicsSimulation from "@/components/landingpage/leftComponent";

export default function LandingPage() {
    return (
        <div className={styles.main}>
            <TopBar />
            <div className={styles.breaker}><hr className={styles.topBreaker}></hr></div>
            <PhysicsSimulation />
        </div>
    );
}
