import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";
import useStore from "../../store";
import { motion } from "framer-motion";
import { useAccount, useConnect, useWriteContract } from "wagmi";
import { toast } from "react-toastify";
import { baseSepolia } from "viem/chains";
import { StorageService } from "../../pages/api/utils/storage";
import UserABI from "../../contracts/User/UserABI.json";
import { Address } from "../../contracts/User/Address";

const index = ({ walletAddress }) => {
  const setIsRequestAddFile = useStore((state) => state.setIsRequestAddFile);
  const addToUploadedFiles = useStore((state) => state.addToUploadedFiles);
  const [uFile, setUFile] = useState(null);
  const { writeContractAsync } = useWriteContract();
  const { connect, connectors, status } = useConnect();
  const coinbaseWalletConnector = connectors.find(
    (connector) => connector.id == "coinbaseWalletSDK"
  );
  const [isLoading, setIsLoading] = useState(false);

  const account = useAccount();

  const UploadFile = async () => {
    if (status == "error") {
      toast.error(
        "Something went wrong please make sure you have a stabe internet connection"
      );
    }
    connect({ connector: coinbaseWalletConnector });
    console.log(status);
    if (status != "connected" && status != "success" && status != "idle") {
      toast.error("Create/connect your coinbase smart wallet and Try again!");
      connect({ connector: coinbaseWalletConnector });
    } else {
      try {
        connect({ connector: coinbaseWalletConnector });
        setIsLoading(true);
        const cid = await StorageService.upload(uFile);
        const res = await writeContractAsync({
          chainId: baseSepolia.id,
          address: Address,
          abi: UserABI,
          functionName: "addUser",
          args: [cid],
        });
        toast.success(`${res}`);
        setIsLoading(false);
        addToUploadedFiles(uFile);
        setIsRequestAddFile(false);
      } catch (err) {
        toast.error("Something went wrong please, Try again!");
        setIsLoading(false);
        console.log(err);
      }
    }
  };
  return (
    <motion.div
      className={styles.overlay}
      onClick={() => setIsRequestAddFile(false)}
    >
      <div
        className={styles.chatContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={uFile ? styles.FileContainerActive : styles.FileContainer}
        >
          <input type="file" onChange={(e) => setUFile(e.target.files[0])} />
          <p>
            {uFile ? `${uFile.name} added ` : "Tap to add File "}
            <i class="fa-solid fa-file"></i>
          </p>
        </div>

        <button onClick={() => !isLoading && UploadFile()}>
          {isLoading ? "Saving" : "Save"}
        </button>
      </div>
    </motion.div>
  );
};

export default index;
