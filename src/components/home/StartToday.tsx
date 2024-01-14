import styles from "@/styles/home/start_today.module.scss";
import Link from "next/link";

const StartToday = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.content}>
        <h2>Start Logistics with 4U Today!</h2>
        <div className={styles.actions}>
          <Link href="request-a-quote">
            <button>Request a quote</button>
          </Link>
          <Link href="for-drivers">
            <button>For Driver</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartToday;
