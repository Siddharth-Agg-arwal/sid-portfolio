import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landing-page";
import MusicPage from "./set-music";
import AboutMe from "./about-me";
import Navbar from "@/components/aboutme/navbar";
import Resume from "./resume";

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingPage />
      <section id="set-music"><MusicPage /></section>
      <Navbar />
      <section id="about-me"><AboutMe /></section>
      <section id="resume"><Resume /></section>
    </div>
  );
}
