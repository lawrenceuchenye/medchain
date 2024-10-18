import styles from "./index.module.css";
/*import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";*/

import { ConnectWallet, Wallet } from "@coinbase/onchainkit/wallet";
import { toast } from "react-toastify";
import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { motion } from "framer-motion";

import { useAccount, useConnect } from "wagmi";
import { useRef, useCallback } from "react";

import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import useStore from "../../store";
import { slice } from "viem";

const index = () => {
  const setIsOnBoardingStatus = useStore(
    (state) => state.setIsOnBoardingStatus
  );
  const setIsRequestConnect = useStore((state) => state.setIsRequestConnect);
  const setIsLoggedInStatus = useStore((state) => state.setIsLoggedInStatus);
  const setWalletAddress = useStore((state) => state.setWalletAddress);

  const router = useRouter();
  const account = useAccount();
  const [textStatus, setTextStatus] = useState("Connect Wallet");

  useEffect(() => {
    if (account.status == "connecting") {
      setTextStatus("Connecting");
    }

    if (account.status == "connected") {
      setTextStatus("Connected");
      toast("Connected");
      setIsOnBoardingStatus(false);
      setIsRequestConnect(false);
      setIsLoggedInStatus(true, "OCK");
      setWalletAddress(account.address);
      router.push("/dashboard/user/patient");
    }

    if (account.status == "disconnected") {
      setTextStatus("Connect wallet");
    }

    console.log(status);
  }, [account.status]);

  return (
    <div className={styles.coinBaseWalletContainer}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        style={{
          color: "var(--color-blue)",
          width: "200px",
          height: "50px",
          position: "relative",
          top: "60px",
          left: "50px",
        }}
      >
        <Wallet>
          <ConnectWallet text={textStatus} />
        </Wallet>
      </motion.div>
    </div>
  );
};

export default index;
