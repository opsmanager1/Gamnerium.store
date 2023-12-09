import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Image from 'next/image';
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
//import styles from '../styles/BuypageCSS.css';
import styles from '../styles/Buypage.module.css';
import backgroundImage from '../public/DYMBACK2.png';

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <div className={styles.backgroundContainer}>
       <div className={styles.contentContainer}>
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      <div className={styles.content}>
      <Container maxWidth="lg">
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
         </Container>
      </div>
    </div>
   </div>
  );
}
