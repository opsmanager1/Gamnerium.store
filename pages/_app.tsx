import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 3746287, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://froopyland.dymension.xyz/16/poltava_3746287-1-a/evmrpc"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Gamnerium",
          symbol: "OPS",
        },
        shortName: "Gamnerium", // Display value shown in the wallet UI
        slug: "Gamnerium", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Gamnerium", // Name of the network
        name: "Gamnerium zkEVM Testnet", // Name of the network
      }}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
