import QuoteRequest from "../ui/QuoteRequest";
import styles from "@/styles/request_a_quote/quote_form_section.module.scss";

const QuoteFormSection = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.sectionTitle}>
        <h2>Request a quote</h2>
      </div>
      <div className={styles.formWraper}>
        <QuoteRequest />
      </div>
    </section>
  );
};

export default QuoteFormSection;
