import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const index = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "2c4d16de-8673-47da-9154-e854399af4e6",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
    <DynamicWidget />
      </DynamicContextProvider>
  );
};

export default index;
