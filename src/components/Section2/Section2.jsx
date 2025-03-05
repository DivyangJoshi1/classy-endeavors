import React from "react";
import styles from "./Section2.module.css";
import logo from "../../assets/logo.png";
import socialIcons from "../../assets/socials.png";

const Section2 = () => {
  return (
    <div className={styles.sectionContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper}> {/* Group logo and text */}
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.logoText}>DocuTech</span> {/* Text after logo */}
        </div>
        <ul className={styles.navLinks}>
          <a href="#Section3"><li>Features</li></a>
          <a href="#Section5"><li>Why Choose Uss</li></a>
          <a href="#Section6"><li>Pricing</li></a>
          <a href="#Section7"><li>FAQ</li></a>
        </ul>
        <div className={styles.rightContent}>
          <img src={socialIcons} alt="Social Icons" className={styles.socialIcons} />
          <button className={styles.button}>Get Started</button>
        </div>
      </nav>
    </div>
  );
};

export default Section2;
