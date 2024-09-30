import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: "2c4d16de-8673-47da-9154-e854399af4e6",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
