import { toast } from "react-toastify";
import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Address, Identity } from "@coinbase/onchainkit/identity";

const index = () => {
  const setIsRequestConnect = useStore((state) => state.setIsRequestConnect);
  const translate = useStore((state) => state.translate);
  const atomicTranslateTriggerCounter = useStore(
    (state) => state.atomicTranslateTriggerCounter
  );
  const setIsTranslating = useStore((state) => state.setIsTranslating);
  const lang = useStore((state) => state.lang);
  const type = useStore((state) => state.type);

  const loggedIn = useStore((state) => state.isLoggedIn);
  const setIsLoggedInStatus = useStore((state) => state.setIsLoggedInStatus);
  const setWalletAddress = useStore((state) => state.setWalletAddress);

  const router = useRouter();

  const [translatedWords, setTranslatedWords] = useState({
    Home: " Home",
    About: "About",
    Support: "Support",
    Connect: "Connect",
    Dashboard: "Dashboard",
  });
  const [prevLang, setPrevLang] = useState("English");
  const [dashboardTxt, setDashboardText] = useState("Hello");

  const [isTranslated, setIsTranslated] = useState(false);
  const homeaRef = useRef(null);
  const aboutaRef = useRef(null);
  const supportaRef = useRef(null);
  const connectaRef = useRef(null);
  const dashboardaRef = useRef(null);

  const Translate = async () => {
    setIsTranslating(true, atomicTranslateTriggerCounter);
    let tr = await translate(JSON.stringify(translatedWords), lang);

    try {
      if (tr.Home) {
        homeaRef.current.innerHTML = `${tr.Home}`;
        aboutaRef.current.innerHTML = `${tr.About}`;
        supportaRef.current.innerHTML = `${tr.Support}`;
        connectaRef.current.innerHTML = `${tr.Connect}`;
        if (tr.Dashboard && isLoggedIn) {
          connectaRef.current.innerHTML = `${tr.Dashboard}`;
        }
      }
    } catch (err) {
      console.log(err);
    }

    setPrevLang(lang);
  };

  useEffect(() => {
    console.log(atomicTranslateTriggerCounter);
    if (prevLang != lang) {
      Translate();
    }
  }, [lang]);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <i className="fa fa-link"></i>
        <h1>
          Med
          <span>Chain</span>
        </h1>
      </div>

      <div className={styles.ulContainer}>
        <Link href="/">
          <h2 ref={homeaRef}>Home</h2>
        </Link>
        <h2
          ref={aboutaRef}
          onClick={() => {
            Notification.requestPermission((perm) => {
              if (perm == "granted") {
                new Notification("MEDWATCH", {
                  body: "You have to take yournmedcs now",
                });
              }
            });
          }}
        >
          About
        </h2>
        <h2 ref={supportaRef}>Support</h2>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        className={styles.getStartedBtn}
        onClick={() =>
          loggedIn
            ? router.push("/dashboard/user/patient")
            : setIsRequestConnect(true)
        }
      >
        {loggedIn ? (
          <h1 ref={connectaRef}>Dashboard</h1>
        ) : (
          <>
            <h1 ref={connectaRef}>Connect</h1>{" "}
            <i class="fa-solid fa-network-wired"></i>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default index;
