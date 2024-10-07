import { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import useStore from "../../store";

const index = () => {
  const translate = useStore((state) => state.translate);
  const lang = useStore((state) => state.lang);
  const [translatedWords, setTranslatedWords] = useState({
    usefulLinksText: " Useful Links",
    aboutUsText: "About us",
    privacyPolicyText: "Privacy Policy",
    supportText: "Support",
    contactUsText: "Contact Us",
  });

  const [isTranslated, setIsTranslated] = useState(false);

  const usefulLinksTextRef = useRef(null);
  const aboutUsTextRef = useRef(null);
  const privacyPolicyTextRef = useRef(null);
  const supportTextRef = useRef(null);
  const contactUsTextRef = useRef(null);

  const Translate = async () => {
    let tr = await translate(JSON.stringify(translatedWords), lang);
    usefulLinksTextRef.current.innerHTML = `${tr.usefulLinksText}`;
    aboutUsTextRef.current.innerHTML = `${tr.aboutUsText}`;
    privacyPolicyTextRef.current.innerHTML = `${tr.privacyPolicyText}`;
    supportTextRef.current.innerHTML = `${tr.supportText}`;
    contactUsTextRef.current.innerHTML = `${tr.contactUsText}`;
    setIsTranslated(true);
  };

  useEffect(() => {
    if (!isTranslated && lang != "english") {
      Translate();
    }
  }, [translatedWords]);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.usefullinksContainer}>
        <h3 ref={usefulLinksTextRef}>Useful Links</h3>
        <p ref={aboutUsTextRef}>About Us</p>
        <p ref={privacyPolicyTextRef}>Privacy Policy</p>
        <p ref={supportTextRef}>Support</p>
      </div>

      <div className={styles.contactContainer}>
        <h1 ref={contactUsTextRef}>Contact us</h1>
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
