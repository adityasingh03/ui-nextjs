// Styling sheets
import styles from "@/styles/Artist.module.css";
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

// Dummy data to render in Artists/People component
const artistDetails = [
  {
    imgName: "artist1",
    artistName: "Azuki #9839",
    amount: "02.82",
    time: "3 Months",
    floor: "12.74",
    change: "+21.6%",
  },
  {
    imgName: "artist2",
    artistName: "MAYC #9839",
    amount: "02.82",
    time: "3 Months",
    floor: "12.74",
    change: "+21.6%",
  },
  {
    imgName: "artist3",
    artistName: "MoonBirds #9839",
    amount: "02.82",
    time: "3 Months",
    floor: "12.74",
    change: "+21.6%",
  },
  {
    imgName: "artist4",
    artistName: "Otherdeed #9839",
    amount: "02.82",
    time: "3 Months",
    floor: "12.74",
    change: "+21.6%",
  },
  {
    imgName: "artist5",
    artistName: "Cryptoz #9839",
    amount: "02.82",
    time: "3 Months",
    floor: "12.74",
    change: "+21.6%",
  },
];

// Artist Panel function to display the artists
function ArtistPanel() {
  return (
    <div className={styles.container}>
      {artistDetails.map((item) => (
        <div className={styles.artistEach} key={item.artistName}>
          <Image
            src={`/${item.imgName}.svg`}
            alt="Logo"
            className={styles.image}
            width={193}
            height={193}
            priority
          />

          <div className={`${space.className} ${styles.timeBlock}`}>
            <div className={`${space.className} ${styles.time}`}>
              {item.time}
            </div>
          </div>

          <div className={`${space.className} ${styles.detailsBlock}`}>
            <div className={`${space.className} ${styles.namesHolder}`}>
              <div className={`${space.className} ${styles.name}`}>
                {item.artistName}
              </div>

              {/* Bought details */}
              <div className={`${space.className} ${styles.boughtDetails}`}>
                <div className={`${space.className} ${styles.text}`}>
                  Bought
                </div>

                <div className={styles.floorHolder}>
                  <div className={`${space.className} ${styles.amount}`}>
                    {item.amount}
                  </div>

                  <FaEthereum className={styles.cryptoIcon} />
                </div>
              </div>

              {/* Floor Details */}
              <div className={`${space.className} ${styles.floorDetails}`}>
                <div className={`${space.className} ${styles.text}`}>Floor</div>
                <div className={styles.floorHolder}>
                  <div className={`${space.className} ${styles.amount}`}>
                    {item.amount}
                  </div>
                  <FaEthereum className={styles.cryptoIcon} />

                  <div className={`${space.className} ${styles.change}`}>
                    {item.change}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Exporing the function to be rendered
export default ArtistPanel;
