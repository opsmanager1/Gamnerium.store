import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import backgroundImage from '../public/DYMBACK.png';

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
     //<div
      //style={{ 
        // use the src property of the image object
       // backgroundImage: `url(${backgroundImage.src})`,
        //background-image: url('../public/DYMBACK.png');
        // other styles
      //  backgroundPosition: "center",
      //  backgroundSize: "cover",
      //  backgroundRepeat: "no-repeat",
      //  width: "100vw",
       // overflow: 'hidden', // Set overflow to hidden
      //  height: "100vh",
      //  display: 'flex',
      //  alignItems: 'center',
      //  justifyContent: 'center'
     // }}
  //  >
   <div className={styles.backgroundContainer}>
     <div className={styles.contentContainer}>
        <Image
          src={backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
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
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.gif"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Gamnerium NFT Marketplaces
                </span>
                <br />
                <span className={styles.heroTitleGradient}>
                faster than ever.
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://dymension.xyz/"
                  target="_blank"
                >
                  Dymension
                </Link>{" "}
                gives you the tools you need to create audited, performant, and
                flexible EVM RollApp in <b>hours</b>, <i>not months</i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/opsmanager1"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
  );
};

export default Home;
