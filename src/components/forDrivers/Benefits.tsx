import styles from "@/styles/forDrivers/benefits.module.scss";
import Image from "next/image";
import benefit1 from "@/assets/images/forDriver/benefit1.png";
import benefit2 from "@/assets/images/forDriver/benefit2.png";
import benefit3 from "@/assets/images/forDriver/benefit3.png";
import benefit4 from "@/assets/images/forDriver/benefit4.png";
import benefit5 from "@/assets/images/forDriver/benefit5.png";
import benefit6 from "@/assets/images/forDriver/benefit6.png";

const Benefits = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <h2>Benefits To Work Work With 4U Logistics</h2>
      <div className={styles.benefits}>
        {/* item */}
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image src={benefit1} height={53} width={53} alt="24/7 support" />
          </div>
          <h3>24/7 Support</h3>
          <p>
            Our drivers have access to a dedicated support team available around
            the clock. Whether you have a question about a delivery, need help
            with a route, or encounter any unexpected challenges on the road,
            our support staff is just a phone call away.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image src={benefit2} height={53} width={53} alt="Clean POD" />
          </div>
          <h3>Clean POD</h3>
          <p>
            For the first load with a clean POD we pay after sending us signed
            document. On-time every week payments every Monday or even sooner.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image
              src={benefit3}
              height={53}
              width={53}
              alt="Competitive Compensation"
            />
          </div>
          <h3>Competitive Compensation</h3>
          <p>
            We believe in recognizing and rewarding hard work, which is why we
            offer a competitive salary and benefits package for our drivers.
            Your contributions will be acknowledged and appreciated.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image
              src={benefit4}
              height={53}
              width={53}
              alt="Referral Program"
            />
          </div>
          <h3>Referral Program</h3>
          <p>
            We believe our team members are our best advocates. Our referral
            program rewards drivers who refer qualified candidates to join our
            team. This program creates a positive and collaborative work
            environment while helping us attract top talented drivers.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image src={benefit5} height={53} width={53} alt="Safety First" />
          </div>
          <h3>Safety First</h3>
          <p>
            Your safety and the safety of others are our top priorities. We
            maintain strict safety standards and provide ongoing training to
            ensure a secure working environment.
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.iconWraper}>
            <Image
              src={benefit6}
              height={53}
              width={53}
              alt="Work-Life Balance "
            />
          </div>
          <h3>Work-Life Balance </h3>
          <p>
            We understand the importance of work-life balance, and we strive to
            create schedules that accommodate our drivers' needs while meeting
            our customers' demands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
