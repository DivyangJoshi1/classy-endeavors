import styles from "./Footer.module.css";
import logo from "../../assets/footer.png";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaDiscord, FaEnvelope, FaDesktop } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section: Logo and Branding */}
        <div className={styles.left}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.brand}>
            <h3>DocuTech</h3>
            <p>Powered by Classy Endeavors</p>
          </div>
        </div>

        {/* Right Section: Social Icons and Links */}
        <div className={styles.right}>
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <FaWhatsapp className={styles.icon} />
            <FaFacebookF className={styles.icon} />
            <FaLinkedinIn className={styles.icon} />
            <FaDiscord className={styles.icon} />
            <FaEnvelope className={styles.icon} />
            <FaDesktop className={styles.icon} />
          </div>

          {/* Separator */}
          <div className={styles.separator}></div>

          {/* Links */}
          <div className={styles.center}>
            <a href="#Section3">Features</a>
            <a href="#Section5">Why Choose Us</a>
            <a href="#Section6">Pricing</a>
            <a href="#Section7">FAQ</a>
            <a href="#">Legal terms</a>
            <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
