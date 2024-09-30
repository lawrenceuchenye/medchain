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

import DynamicConnectWallet from "@/components/DynamicConnectWallet";

const index = () => {
  return (
    <div className={styles.coinBaseWalletContainer}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{ color: "var(--color-blue)" }}
      >
        <Wallet>
          <ConnectWallet>
            <Avatar className="h-6 w-6" />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar />
              <Name />
              <Address className={color.foregroundMuted} />
            </Identity>
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </motion.div>

      <motion.button whileHover={{ scale: 1.1 }}>
        Other options <DynamicConnectWallet />
      </motion.button>
    </div>
  );
};

export default index;
