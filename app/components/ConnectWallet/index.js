import styles from "./index.module.css";
/*import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";*/
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";

import { Address, Avatar, Name, Identity } from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { motion } from "framer-motion";

import { useRef } from "react";

import { DynamicConnectButton } from "@dynamic-labs/sdk-react-core";

const index = () => {
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
          <ConnectWallet>
            <Name />
          </ConnectWallet>
        </Wallet>
      </motion.div>

     
        <DynamicConnectButton><h3>Other options</h3> </DynamicConnectButton>
    
    </div>
  );
};

export default index;
