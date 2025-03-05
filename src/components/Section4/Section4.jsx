import React, { useState } from "react";
import styles from "./Section4.module.css";
import companyLogos from "../../assets/company.png"; // Company logos image
import user1 from "../../assets/user1.jpeg"; // User images
import user2 from "../../assets/user1.jpeg";
import user3 from "../../assets/user1.jpeg";
import user4 from "../../assets/user1.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    user: user1,
    text: "Create contracts, agreements & forms in seconds using advanced AI technology",
    rating: 5,
  },
  {
    id: 2,
    user: user2,
    text: "Seamlessly integrate legal solutions into your business workflow",
    rating: 5,
  },
  {
    id: 3,
    user: user3,
    text: "Efficient and reliable AI-powered document automation at your fingertips",
    rating: 5,
  },
  {
    id: 4,
    user: user4,
    text: "Revolutionizing contract management with the power of artificial intelligence",
    rating: 5,
  },
];

const Section4 = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < reviews.length - 3) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div  id="Section4" className={styles.sectionContainer}>
      {/* Company Logos */}
      <div className={styles.logoContainer}>
        <img src={companyLogos} alt="Company Logos" className={styles.companyLogos} />
      </div>

      {/* Heading */}
      <h2 className={styles.heading}>What our users say</h2>

      {/* Reviews Carousel */}
      <div className={styles.reviewWrapper}>
        <button className={styles.navButton} onClick={handlePrev} disabled={index === 0}>
          <FaChevronLeft />
        </button>

        <div className={styles.reviewContainer}>
          {reviews.slice(index, index + 3).map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.userInfo}>
                <img src={review.user} alt="User" className={styles.userIcon} />
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.stars}>{"⭐".repeat(review.rating)}</div>
            </div>
          ))}
        </div>

        <button className={styles.navButton} onClick={handleNext} disabled={index >= reviews.length - 3}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Section4;
