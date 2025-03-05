import React, { useState } from "react";
import styles from "./Section7.module.css";

const faqData = [
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "How secure is DocuTech?",
    answer:
      "DocuTech uses advanced encryption and security protocols to ensure your documents remain safe and tamper-proof. We follow industry standards to guarantee compliance.",
  },
  {
    question: "Can I use DocuTech for business contracts?",
    answer:
      "Absolutely! DocuTech is designed for business use, ensuring all contracts remain legally binding and easily accessible from anywhere.",
  },
  {
    question: "Is DocuTech free to use?",
    answer:
      "We offer a free plan with basic features. For advanced features like bulk signing and document tracking, you can opt for our premium plans.",
  },
];

const Section7 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section  id="Section7" className={styles.section7}>
      <h2 className={styles.heading}>FAQs</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index}>
            <div
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className={styles.faqQuestion}>{item.question}</span>
              <span className={styles.toggleIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`${styles.faqAnswer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section7;
