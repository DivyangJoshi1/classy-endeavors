import React, { useState } from "react";
import styles from "./Section6.module.css";

const Section6 = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Pricing data for both billing cycles
  const pricingData = {
    monthly: {
      free: "USD 0 /Month",
      premium: "USD 10 /Month",
      teams: {
        price: "USD 8 /Month per user",
        minTotal: "USD 24/month",
        total: "USD 24"
      }
    },
    annually: {
      free: "USD 0 /Month",
      premium: "USD 100 /Year",
      teams: {
        price: "USD 80 /Year per user",
        minTotal: "USD 240/year",
        total: "USD 240"
      }
    }
  };

  return (
    <div  id="Section6" className={styles.section}>
      <h2 className={styles.heading}>Pick your plan. We make this part easy too.</h2>

      {/* Toggle Switch */}
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleButton} ${billingCycle === "monthly" ? styles.active : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`${styles.toggleButton} ${billingCycle === "annually" ? styles.active : ""}`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className={styles.pricingContainer}>
        {/* Free Plan */}
        <div className={styles.card}>
          <h3>FREE</h3>
          <p className={styles.price}>{pricingData[billingCycle].free}</p>
          <span className={styles.note}>No Credit Card required</span>
          <ul className={styles.features}>
            <li>5 documents a month</li>
            <li>Activity timeline</li>
          </ul>
          <button className={styles.selectButton}>Select Plan</button>
        </div>

        {/* Premium Plan */}
        <div className={`${styles.card} ${styles.premiumCard}`}>
          <h3>Premium</h3>
          <p className={styles.price}>{pricingData[billingCycle].premium}</p>
          <ul className={styles.features}>
            <li>Unlimited documents</li>
            <li>Unlimited signees</li>
            <li>Activity timeline</li>
            <li>Certificate of completion</li>
          </ul>
          <button className={styles.selectButton}>Select Plan</button>
        </div>

        {/* Teams Plan */}
        <div className={`${styles.card} ${styles.teamsCard}`}>
          <h3>Teams</h3>
          <p className={styles.price}>{pricingData[billingCycle].teams.price}</p>
          <p className={styles.subtext}>Minimum total of <strong>{pricingData[billingCycle].teams.minTotal}</strong></p>
          <ul className={styles.features}>
            <li>Everything from Premium</li>
            <li>Team management</li>
            <li>Transferable contracts</li>
          </ul>
          <p className={styles.total}>Monthly total <strong>{pricingData[billingCycle].teams.total}</strong></p>
          <button className={styles.selectButton}>Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Section6;