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
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      <div className={styles.heroBodyContainer}>
       <div className={styles.heroBody}>
      <Container maxWidth="lg">
      <div className={styles.hero}>
      <div className={styles.heroAssetFrame}>
            <Image
              src="/BuyNFTs2.gif"
              width={350}
              height={60}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
        </div>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
        </div>
         </Container>
       </div>
     </div> 
   </div>
  );
}
