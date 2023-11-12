import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses"; 
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/guide.module.css";
import Image from "next/image";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg" className={styles.centerContainer}>
    <div className={styles.content}>
   <div className={styles.hero}>
     <div className={styles.heroBackground}>
      <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
      <h1>Add Gamnerium Network configurations to Metamask</h1>
      <p className={styles.heroSubtitle}>
        Name: Gamnerium
      <br />
        RPC URL: https://froopyland.dymension.xyz/16/poltava_3746287-1-a/evmrpc
      <br />
      ID: 3746287
      <br />
      Currency symbol: OPS
      </p> 
      <h1>Request OPS Coins</h1>
      <p className={styles.heroSubtitle}>
      Use floppyland <code>{"$request <your address > poltava_3746287-1"}</code>
      <br />
       <Link
                  className={styles.link}   
                  href="https://discord.com/channels/956961633165529098/1143231362468434022"
                  target="_blank"
        >
          Faucet
      </Link>{" "}
      </p>
      <h1>Bridge Coins</h1>
      <p className={styles.heroSubtitle}>
      Use the Dymension Portal to bridge your testnet OPS coins to Gamnerium
      <br />
       <Link
                  className={styles.link}   
                  href="https://portal.dymension.xyz/rollapp/poltava_3746287-1"
                  target="_blank"
        >
          Portal link
      </Link>{" "}
      </p> 
      <h1>Buy and Sell NFTs</h1>
      <p className={styles.heroSubtitle}>
      You can place offers/bids or buy the NFTs for the specified amount in the listing
      </p>
      <h1>Use NFT contract address to add it in your wallet</h1>
      <p className={styles.heroSubtitle}>
      NFT collection contract address: 0xA96eeD0Ae9fb6D274E896227d4Ba0F0ECb043C1C
      </p>
         </div>
          </div>
    </Container>
  );
}