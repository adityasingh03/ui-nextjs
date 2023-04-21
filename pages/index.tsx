import InfoPanel from "../components/infoPanel";
import CryptoPanel from "../components/cryptoPanel";
import ArtistPanel from "../components/artistPanel";

import styles from "@/styles/Home.module.css";
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

function WallApp() {
  return (
    <div className={styles.container}>
      <InfoPanel />
      <div className={styles.col}>
        <CryptoPanel />
        <ArtistPanel />
      </div>
    </div>
  );
}

export default WallApp;
