import styles from "@/styles/Info.module.css";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BsChevronDoubleRight } from "react-icons/bs";
import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
function InfoPanel() {
  return (
    <div className={space.className}>
      <div className={styles.container}>
        <div className={styles.personalDetails}>
          <div className={styles.imageDetails}>
            <div className={styles.image}>
              <Image
                src="/displayImage.svg"
                alt="Logo"
                className={styles.displayImage}
                width={72}
                height={72}
                priority
              />
              <div className={styles.loader}>
                <div className={styles.fullLoader}></div>
                <div className={styles.halfLoader}></div>
              </div>
            </div>
            <div className={styles.levelDetails}>
              <p className={styles.level}> LVL 2</p>
            </div>
          </div>

          <div className={styles.nameDetails}>
            <div className={`${styles.name} ${space.className}`}>
              dingaling.eth
            </div>
            <div className={`${styles.subtext} ${space.className}`}>
              0xadgf....jkld
            </div>
          </div>
        </div>

        <div className={styles.socialHandle}>
          <div className={styles.tweet}>
            <AiOutlineTwitter className={styles.twitter} />
            <div className={`${styles.twitterHandle} ${space.className}`}>
              @dingalingts
            </div>
          </div>
          <div className={styles.website}>
            <FiGlobe className={styles.webHandle} />
          </div>
        </div>

        <div className={`${styles.info} ${space.className}`}>
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </div>

        <div className={styles.community}>
          <div className={`${styles.communityText} ${space.className}`}>
            Common communties (3)
          </div>
          <div className={styles.communityImages}>
            <Image
              src="/community1.svg"
              alt="Community image 1"
              className={styles.communityImage}
              width={48}
              height={48}
              priority
              style={{ marginLeft : '-3px'}}
            />

            <Image
              src="/community2.svg"
              alt="Community image 2"
              className={styles.communityImage}
              width={48}
              height={48}
              priority
            />

            <Image
              src="/community3.svg"
              alt="Community image 3"
              className={styles.communityImage}
              width={48}
              height={48}
              priority
            />
            <Image
              src="/community4.svg"
              alt="Community image 4"
              className={styles.communityImage}
              width={48}
              height={48}
              priority
            />
          </div>
        </div>

        <div className={styles.abilities}>
          <div className={styles.line1}>
            <div className={styles.focus}>
              <p className={`${styles.ability} ${space.className}`}>Art</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
            <div className={styles.focus}>
              <p className={`${styles.ability} ${space.className}`}>Utility</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
            <div className={styles.unfocus}>
              <p className={`${styles.ability} ${space.className}`}>PFP</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
          </div>
          <div className={styles.line2}>
            <div className={styles.unfocus}>
              <p className={`${styles.ability} ${space.className}`}>
                Metaverse
              </p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
            <div className={styles.unfocus}>
              <p className={`${styles.ability} ${space.className}`}>Gaming</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
          </div>

          <div className={styles.line3}>
            <div className={styles.unfocus}>
              <p className={`${styles.ability} ${space.className}`}>PFP</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
            <div className={styles.unfocus}>
              <p className={`${styles.ability} ${space.className}`}>ens</p>
              <p className={`${styles.percent} ${space.className}`}>12%</p>
            </div>
          </div>
        </div>

        <button className={styles.subscribe}>
          <p className={`${styles.subscribeText} ${space.className}`}>
            Subscribe
          </p>

          <div className={styles.chevon}>
            <BsChevronDoubleRight className={styles.singleChevon} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default InfoPanel;
