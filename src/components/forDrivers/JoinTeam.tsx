import styles from "@/styles/forDrivers/join_team.module.scss";
import Image from "next/image";
import union from "@/assets/icons/union.svg";
import team1 from "@/assets/images/forDriver/team1.png";
import team2 from "@/assets/images/forDriver/team2.png";
import team3 from "@/assets/images/forDriver/team3.png";
import team4 from "@/assets/images/forDriver/team4.png";

const JoinTeam = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.content}>
        <div>
          <h1>
            Join our <br /> drivers-team!
          </h1>
          <p>
            At 4U Logistics, we understand the importance of having a reliable
            and dedicated team of drivers to ensure the safe and timely delivery
            of our customers' goods. As a driver for our expedite delivery
            service, you will play a critical role in our success and have the
            opportunity to work with a team of logistics experts committed to
            providing exceptional service to our clients.
          </p>
          <button>
            See career opportunities
            <Image
              src={union}
              height={12}
              width={16}
              // layout="responsive"
              alt="down-arrow"
            />
          </button>
        </div>
      </div>
      <div className={styles.imageWraper}>
        <div className={styles.wrap1}>
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={team1}
            alt="logistics-service"
          />
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={team2}
            alt="logistics-service"
          />
        </div>
        <div className={styles.wrap2}>
          <Image
            layout="responsive"
            width={629}
            height={423}
            src={team3}
            alt="logistics-service"
          />

          <Image
            layout="responsive"
            width={629}
            height={423}
            src={team4}
            alt="logistics-service"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
