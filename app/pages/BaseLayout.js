import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OnBoard from "@/components/OnBoard";
import Connect from "@/components/Connect";
import LangSelector from "../components/LangSelector";
import MedMate from "@/components/MedMate";
import AddFile from "@/components/AddFile";
import FindDoc from "@/components/FindDoc";
import useStore from "@/store";

import { OnchainKitProvider } from "@coinbase/onchainkit";

import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useState } from "react";

import { HuddleClient, HuddleProvider } from "@huddle01/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
  const isRequestConnect = useStore((state) => state.isRequestConnect);
  const isRequestDES = useStore((state) => state.isRequestDES);
  const isRequestDoc = useStore((state) => state.isRequestDoc);
  const isRequestAddFile = useStore((state) => state.isRequestAddFile);

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
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={baseSepolia}
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
              {isRequestConnect && <Connect />}
              <LangSelector />
              <ToastContainer />
              {isRequestDES && <MedMate />}
              {isRequestDoc && <FindDoc />}
              {isRequestAddFile && <AddFile />}
            </div>
          </OnchainKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </HuddleProvider>
  );
};

export default index;
