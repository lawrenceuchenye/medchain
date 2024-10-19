import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import useStore from "../../store";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const index = () => {
  const setIsViewWalletProfile = useStore(
    (state) => state.setIsViewWalletProfile
  );
  const setWalletAddress = useStore((state) => state.setWalletAddress);

  const router = useRouter();
  const { connect, connectors, status } = useConnect();
  const coinbaseWalletConnector = connectors.find(
    (connector) => connector.id == "coinbaseWalletSDK"
  );
  const account = useAccount();
  const walletAddress = useStore((state) => state.walletAddress);
  const bal = useBalance({ address: walletAddress });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    connect({ connector: coinbaseWalletConnector });
    console.log(bal);
  }, []);

  return (
    <motion.div
      className={styles.overlay}
      onClick={() => setIsViewWalletProfile(false)}
    >
      <div
        className={styles.smartWalletContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.walletInfo}>
          <p>
            {status == "success"
              ? `${walletAddress.slice(0, 8)}....${walletAddress.slice(37)}`
              : "Loading.."}
          </p>
          <i className="fa fa-copy"></i>
          <p>{bal.data ? bal.data.formatted : ".."} ETH</p>
        </div>
        <button
          onClick={() => {
            router.push("https://www.base.org/names");
            toast.info("Redirecting");
          }}
        >
          <h3>Get BaseName</h3>
        </button>
        <button
          onClick={() => {
            router.push("https://wallet.coinbase.com");
            toast.info("Redirecting");
          }}
        >
          <h3>View more</h3>
        </button>
        <button
          onClick={() => {
            router.push("/dashboard/user/patient");
            toast.info("Redirecting");
            setIsViewWalletProfile(false);
          }}
        >
          <h3>Dashboard</h3>
        </button>

        <button
          onClick={() => {
            disconnect();
            setIsViewWalletProfile(false);
            router.push("/");
          }}
        >
          <h3>Disconnect</h3>
        </button>
      </div>
    </motion.div>
  );
};

export default index;
