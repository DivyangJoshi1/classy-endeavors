import React, { useState } from "react";
import styles from "./Section5.module.css";

const features = [
  { id: 1, title: "Trusted by Thousands", content: "Join thousands of businesses worldwide who trust Docutech for secure and efficient document management." },
  { id: 2, title: "SOC-2 Certified", content: "We adhere to strict security and compliance measures, ensuring the highest level of data protection." },
  { id: 3, title: "GDPR & HIPAA Compliant", content: "Your data privacy is our priority. We comply with GDPR and HIPAA regulations to safeguard sensitive information." },
  { id: 4, title: "End-to-end encryption", content: "All your documents are protected with industry-leading end-to-end encryption for maximum security." },
];

const Section5 = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div  id="Section5" className={styles.sectionContainer}>
      <h2 className={styles.heading}>Why Choose Docutech</h2>
      <div className={styles.contentWrapper}>
        {/* Feature Buttons */}
        <div className={styles.buttonContainer}>
          {features.map((feature) => (
            <button
              key={feature.id}
              className={`${styles.featureButton} ${selectedFeature.id === feature.id ? styles.active : ""}`}
              onClick={() => setSelectedFeature(feature)}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className={styles.featureContent}>
          <p>{selectedFeature.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
