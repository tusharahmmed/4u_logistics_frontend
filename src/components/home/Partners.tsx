import styles from "@/styles/home/partners.module.scss";
import Image from "next/image";

import brand1 from "@/assets/images/home/partner1.png";
import brand2 from "@/assets/images/home/partner2.png";
import brand3 from "@/assets/images/home/partner3.png";
import brand4 from "@/assets/images/home/partner4.png";
import brand5 from "@/assets/images/home/partner5.png";
import brand6 from "@/assets/images/home/partner6.png";
import brand7 from "@/assets/images/home/partner7.png";
import brand8 from "@/assets/images/home/partner8.png";

const Partners = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <h2>Our Friends and Partners</h2>

      <div className={styles.brands}>
        <div className={styles.brand}>
          <Image
            src={brand1}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand2}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand3}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand4}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
      </div>
      <div className={styles.brands}>
        <div className={styles.brand}>
          <Image
            src={brand5}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand6}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand7}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
        <div className={styles.brand}>
          <Image
            src={brand8}
            height={100}
            width={100}
            layout="responsive"
            alt="partner"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
