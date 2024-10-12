import { DynamicWidget,DynamicUserProfile,useIsLoggedIn,useDynamicContext,useUserWallets } from "@dynamic-labs/sdk-react-core";
import { toast } from 'react-toastify';
import useStore from "@/store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { 
    Wallet,
    WalletDropdown, 
    WalletDropdownDisconnect, 
  } from '@coinbase/onchainkit/wallet'; 
  import {
    Address,
    Identity,
  } from '@coinbase/onchainkit/identity';

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );
  const translate = useStore((state) => state.translate);
  const atomicTranslateTriggerCounter = useStore((state) => state.atomicTranslateTriggerCounter);
  const setIsTranslating = useStore((state) => state.setIsTranslating);
  const lang = useStore((state) => state.lang);
  const type = useStore((state) => state.type);
 
  const loggedIn = useStore((state) => state.isLoggedIn);
  const wallets=useUserWallets();
  const setIsLoggedInStatus=useStore((state)=>state.setIsLoggedInStatus);
  const setWalletAddress=useStore((state)=>state.setWalletAddress);

  const router = useRouter();

  const isLoggedIn=useIsLoggedIn();
  const { setShowDynamicUserProfile } = useDynamicContext();
  const [translatedWords, setTranslatedWords] = useState({
    Home: " Home",
    About: "About",
    Support: "Support",
    Connect: "Connect",
  });
  const [prevLang,setPrevLang]=useState("English");

  const [isTranslated, setIsTranslated] = useState(false);
  const homeaRef = useRef(null);
  const aboutaRef = useRef(null);
  const supportaRef = useRef(null);
  const connectaRef = useRef(null);



  const Translate = async () => {
    setIsTranslating(true,atomicTranslateTriggerCounter);
    let tr = await translate(JSON.stringify(translatedWords), lang);
      
      try{
        homeaRef.current.innerHTML = `${tr.Home}`;
      aboutaRef.current.innerHTML = `${tr.About}`;
      supportaRef.current.innerHTML = `${tr.Support}`;
        connectaRef.current.innerHTML = `${tr.Connect}`;
      }catch(err){

      }
     
    setPrevLang(lang);
  
  };

  useEffect(() => {
    console.log(atomicTranslateTriggerCounter);
    if (prevLang != lang) {
      Translate();
    }
  }, [lang]);

  useEffect(()=>{
    console.log(type,"YES");
    if(isLoggedIn){
        alert("i changed stuff");
      toast("Connected");
      setIsLoggedInStatus(true,"DYN");
      if(wallets[0]){
        setWalletAddress(wallets[0].address);
      }
   
      setIsOnBoardingStatus(false);
       router.push("/dashboard/user/patient");
    }else{
        if(!type){
            setIsLoggedInStatus(false,null);
        }
       
    }
  },[isLoggedIn,wallets])

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
        onClick={() => loggedIn ?  type=="OCK" ? alert("ock") : setShowDynamicUserProfile(true) : setIsOnBoardingStatus(true)}
      >
        { loggedIn ? type =="OCK" ? (  
            <Wallet>
            <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            
            <Address />
          </Identity>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
): <><DynamicWidget/></> : (<><h1 ref={connectaRef}>Connect</h1>  <i class="fa-solid fa-network-wired"></i></>)}
        
      </motion.div>
    </div>
  );
};

export default index;