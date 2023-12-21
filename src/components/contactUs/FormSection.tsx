import styles from "@/styles/contactUs/form_section.module.scss";
import DriverRequest from "../ui/DriverRequest";
import CustomerRequest from "../ui/CustomerRequest";

const FormSection = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.formWraper}>
        <div className={styles.wraper}>
          <h2>For Drivers</h2>
          <p>
            Ready to take the wheel of your future? Joining 4U Logistics is
            simple! Submit your application today, and let us know about your
            driving experience and your truck model with cargo space dimensions.
          </p>
          <div className={styles.form}>
            <DriverRequest />
          </div>
        </div>
        <div className={styles.wraper}>
          <h2>For Customers</h2>
          <p>
            Becoming a customer with 4U Logistics is the first step towards
            enhancing your supply chain efficiency and ensuring smooth
            transportation of your goods. Let's connect !
          </p>
          <div className={styles.form}>
            <CustomerRequest />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
