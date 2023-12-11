import styles from "@/styles/work_with_us/driver_request.module.scss";
import DriverRequest from "../ui/DriverRequest";

const DriverRequestSection = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.sectionTitle}>
        <h2>To arrange a delivery, call us or submit application form.</h2>
        <h3>HR Department: 754-778-7877</h3>
      </div>
      <div className={styles.formWraper}>
        <DriverRequest />
      </div>
    </section>
  );
};

export default DriverRequestSection;
