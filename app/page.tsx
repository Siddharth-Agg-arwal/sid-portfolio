import Image from "next/image";
import styles from "./page.module.css";
import LandingPage from "./landing-page";
import MusicPage from "./set-music";
import AboutMe from "./about-me";
import Navbar from "@/components/aboutme/navbar";
import Resume from "./resume";
import Works from "./works";
import ProjectPopup from "@/components/works/projectpopup";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <ProjectPopup project={selectedProject}
                onClose={closePopup}/> */}
      <section id="works"><Works /></section>

      <LandingPage />
      <section id="set-music" className={styles.music}>
        <MusicPage />
        </section>
      <hr></hr>
      <Navbar/>
      <section id="about-me"><AboutMe /></section>
      <hr></hr>
      <section id="resume"><Resume /></section>
      <section id="works"><Works /></section>
      <hr></hr>
    </div>
  );
}
