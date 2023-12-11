import styles from "@/styles/home/stats.module.scss";
import Image from "next/image";

import stats1 from "@/assets/images/home/stats1.png";
import stats2 from "@/assets/images/home/stats2.png";
import stats3 from "@/assets/images/home/stats3.png";
import stats4 from "@/assets/images/home/stats4.png";
import stats5 from "@/assets/images/home/stats5.png";
import stats6 from "@/assets/images/home/stats6.png";

const Stats = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.top}>
        <Image
          src={stats1}
          height={162}
          width={266}
          alt="stats"
          layout="responsive"
        />
        <Image
          src={stats2}
          height={162}
          width={266}
          alt="stats"
          layout="responsive"
        />
        <Image
          src={stats3}
          height={162}
          width={266}
          alt="stats"
          layout="responsive"
        />
      </div>
      <div className={styles.bottom}>
        <div>
          <Image
            src={stats4}
            height={162}
            width={266}
            alt="stats"
            layout="responsive"
          />
        </div>
        <div>
          <Image
            src={stats5}
            height={162}
            width={266}
            alt="stats"
            layout="responsive"
          />
        </div>
        <div className="col-span-2">
          <Image
            src={stats6}
            height={162}
            width={266}
            alt="stats"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
