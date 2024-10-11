import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnBoard from "@/components/OnBoard";
import LangSelector from "../components/LangSelector";
import useStore from "@/store";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";

import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";

import { HuddleClient, HuddleProvider } from "@huddle01/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const huddleClient = new HuddleClient({
  projectId: process.env.HUDDLE_TEST_API_KEY,
  options: {
    // 'activeSpeakers' will be most active 'n' number of peers, by default it's 8
    activeSpeakers: {
      size: 12,
    },
  },
});

const index = ({ children }) => {
  const isOnboardingActive = useStore((state) => state.isOnboardingActive);

  const [queryClient] = useState(() => new QueryClient());
  const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: "MedChain-onchainkit",
      }),
    ],
    ssr: true,
    transports: {
      [baseSepolia.id]: http(),
    },
  });

  return (
    <HuddleProvider client={huddleClient}>
        <DynamicContextProvider
      settings={{
        environmentId: "2c4d16de-8673-47da-9154-e854399af4e6",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
     
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={base}
          >
            <div>
              <Head>
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap');
                  @import
                  url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
                  @import
                  url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                </style>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                />
                <script
                  type="text/javascript"
                  src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                ></script>
              </Head>
              <Navbar />
              {children}
              <Footer />
              {isOnboardingActive && <OnBoard />}
              <LangSelector />
              <ToastContainer />
            </div>
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      </DynamicContextProvider>
    </HuddleProvider>
  );
};

export default index;
