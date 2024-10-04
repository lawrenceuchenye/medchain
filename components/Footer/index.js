import { useEffect } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.usefullinksContainer}>
        <h3>Useful links</h3>
        <p>About us</p>
        <p>Privacy Policy</p>
        <p>Support</p>
      </div>

      <div className={styles.contactContainer}>
        <h1>Contact us</h1>
        <div>
          <motion.i
            whileHover={{ scale: 1.3 }}
            className="fa-brands fa-instagram"
          ></motion.i>
          <motion.i
            whileHover={{ scale: 1.3 }}
            className="fa-brands fa-whatsapp"
          ></motion.i>
          <motion.i
            whileHover={{ scale: 1.3 }}
            className="fa-brands fa-x-twitter"
          ></motion.i>
          <motion.i
            whileHover={{ scale: 1.3 }}
            className="fa-brands fa-facebook-f"
          ></motion.i>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <i className="fa fa-link"></i>
        <h1>
          Med<span>Chain</span>
        </h1>
      </div>
    </div>
  );
};

export default index;
