import React from "react";
import styles from '@/styles/About.module.css';
import Link from "next/link";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutdata}>
        <h2>ABOUT US</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>{" "}
        <br/>
      </div>
      <div className={styles.missiondata}>
        <h3>OUR MISSION</h3>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <br/>
      </div>
      <div className={styles.teamdata}>
        <h3>MEET OUR TEAM MEMBERS</h3>
        <ul className={styles.list}>
          <li>Aqsa Faisal- Founder</li>
          <li>Aisha Sadiq - Co-Founder</li>
          <li>Ali Ehtasham- Head</li>
          <li>Saqib Sheikh- Operating Manager</li>
        </ul>
        <br/>
      </div>
      <div className={styles.servicesdata}>
        <h3>OUR SERVICES</h3>
        <ul className={styles.list}>
          <li>Web & Mobile development</li>
          <li>Web Applications & Mobile Applications</li>
          <li>Error and Bug fixing</li>
          <li>SEO Ranking</li>
        </ul>
        <br/>
      </div>
      <h3>
        For more information{" "}
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
      </h3>
    </div>
  );
};

export default About;
