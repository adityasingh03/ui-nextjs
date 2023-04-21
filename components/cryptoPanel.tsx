// Styling sheets
import styles from "@/styles/Crypto.module.css";
// Next components
import Image from "next/image";
// Icons
import { FaEthereum } from "react-icons/fa";
// Font
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

// Dummy data to render in Crypto component
const cryptoDetails = [
  {
    imgName: "crypto1",
    cryptoName: "ENS Linked",
    subText: "ENS Linked",
    color: "#25B5D51A",
    subTextColor: "#4BDFFF",
    account: "dingaling.eth",
    amount: "1.82",
    time: "2 months ago",
    xp: "+200XP",
  },
  {
    imgName: "crypto2",
    cryptoName: "Best Flip",
    subText: "Sold",
    color: "#F8A9101A",
    subTextColor: "#FFC148",
    account: "CryptoPunk #2131",
    amount: "98.5",
    time: "10 days ago",
    xp: "+150XP",
  },
  {
    imgName: "crypto3",
    cryptoName: "Should have ...",
    subText: "Mint",
    color: "#0BF1AD1A",
    subTextColor: "#44FFC8",
    account: "Rare Apepe #6974",
    amount: "98.5",
    time: "10 days ago",
    xp: "+200XP",
  },
  {
    imgName: "crypto4",
    cryptoName: "First NFT bought",
    subText: "Bought",
    color: "#25B5D51A",
    subTextColor: "#4BDFFF",
    account: "BAYC #7925",
    amount: "98.5",
    time: "10 days ago",
    xp: "+10XP",
  },
  {
    imgName: "crypto5",
    cryptoName: "Paper Handed",
    subText: "Sold",
    color: "#0BF1AD1A",
    subTextColor: "#44FFC8",
    account: "Moonbird #7866",
    amount: "98.5",
    time: "10 days ago",
    xp: "+200XP",
  },
];
function CryptoPanel() {
  return (
    <div className={styles.container}>
      <div className={`${space.className} ${styles.text}`}>Highlights</div>
      <div className={styles.cryptoDetails}>
        {cryptoDetails.map((item) => (
          <div className={styles.cryptoEach}>
            <div
              className={styles.ellipses}
              style={{ backgroundColor: item.color }}
            />

            <div className={styles.detailBlock}>
              <Image
                src={`/${item.imgName}.svg`}
                alt="Logo"
                className={styles.image}
                width={52}
                height={52}
                priority
              />

              <div className={styles.details}>
                <div className={`${space.className} ${styles.cryptoName}`}>
                  {item.cryptoName}
                </div>

                <div className={styles.sub}>
                  <div
                    className={`${space.className} ${styles.subText}`}
                    style={{ color: item.subTextColor }}
                  >
                    {item.subText}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.otherInfo}>
              <div className={styles.nameHolder}>
                <div className={`${space.className} ${styles.name}`}>
                  {item.account}
                </div>

                <div className={styles.floorHolder}>
                  <div className={`${space.className} ${styles.amount}`}>
                    {item.amount}
                  </div>

                  <FaEthereum className={styles.cryptoIcon} />
                </div>
              </div>

              <div className={styles.timeXP}>
                <div className={`${space.className} ${styles.time}`}>
                  {item.time}
                </div>

                <div className={styles.xp}>
                  <div className={`${space.className} ${styles.xpInfo}`}>
                    {item.xp}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoPanel;
