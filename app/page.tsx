import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landing-page";
import MusicPage from "./set-music";

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingPage />
      <MusicPage />
    </div>
  );
}
