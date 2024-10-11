import "@/styles/globals.css";
import BaseLayout from "./BaseLayout";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
    settings={{
      environmentId: "2c4d16de-8673-47da-9154-e854399af4e6",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
    </DynamicContextProvider>
  );
}
