import styles from "@/styles/contactUs/contact.module.scss";

const Contact = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.info}>
        <h2>Need help?</h2>
        <h2>Contact a our expert.</h2>
        <ul>
          <li>866-275-1407</li>
          <li>helpdesk@globaltranz.com</li>
          <li>Track a Shipment</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
