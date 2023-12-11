import styles from "@/styles/home/start_today.module.scss";

const StartToday = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.content}>
        <h2>Start Logistics with 4U Today!</h2>
        <div className={styles.actions}>
          <button>Request a quote</button>
          <button>For Driver</button>
        </div>
      </div>
    </section>
  );
};

export default StartToday;
