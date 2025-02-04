import Image from "next/image";
import styles from "./css/landingpage.module.css";
import TopBar from "@/components/landingpage/topBar";
import RightComponent from "@/components/landingpage/rightComponent";
import LeftComponent from "@/components/landingpage/leftComponent";

export default function LandingPage() {
    return (
        <div className={styles.main}>
            <TopBar />
            <div className={styles.breaker}><hr className={styles.topBreaker}></hr></div>
            <div className={styles.content}>
                <LeftComponent />
                <RightComponent />
            </div>
        </div>
    );
}
