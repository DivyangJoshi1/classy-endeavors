import React from "react";
import styles from "./Section3.module.css";
import uploadIcon from "../../assets/Vector.png"; 
import aiIcon from "../../assets/Vector1.png"; 

const Section3 = () => {
  return (
    <div id="Section3" className={styles.sectionContainer}>
      <h1 className={styles.heading}>
        AI-Powered Unified Platform;
        <br />
        <span className={styles.highlight}>
          Create <span className={styles.blackText}>Effortlessly</span>
        </span>
      </h1>
      <p className={styles.subText}>
        Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
      </p>
      
      {/* Compliance Badges */}
      <div className={styles.badges}>
        <div className={styles.badgeItem}>
          <span className={styles.badge}>✔</span>
          <span className={styles.badgeText}>ESIGN Compliant</span>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badge}>✔</span>
          <span className={styles.badgeText}>UETA Approved</span>
        </div>
        <div className={styles.badgeItem}>
          <span className={styles.badge}>✔</span>
          <span className={styles.badgeText}>eIDAS Certified</span>
        </div>
      </div>

      {/* Upload and AI Buttons */}
      <div className={styles.uploadSection}>
        <div className={styles.uploadBox}>
          <input type="file" className={styles.fileInput} />
          <button className={styles.uploadButton}>
            <img src={uploadIcon} alt="Upload Icon" className={styles.buttonIcon} />
            Upload File
          </button>
        </div>
        <span className={styles.orText}>OR</span>
        <button className={styles.aiButton}>
          <img src={aiIcon} alt="AI Icon" className={styles.buttonIcon} />
          Generate with AI
        </button>
      </div>

      {/* Preview Box */}
      <div className={styles.previewBox}></div>

      {/* Footer Text */}
      <p className={styles.footerText}>
         <span className={styles.boldText}>64.0k</span> businesses and individuals <br />
         have signed with <span className={styles.docuTech}>DocuTech</span>
      </p>
    </div>
  );
};

export default Section3;
