import styles from "@/styles/home/news.module.scss";
import article1 from "@/assets/images/home/article1.png";
import article2 from "@/assets/images/home/article2.png";
import article3 from "@/assets/images/home/article3.png";
import Image from "next/image";

const News = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.title}>
        <h2>Industry Trends and News</h2>
        <p>
          Our blog is dedicated to providing valuable insights into the USA
          expedite logistics market, including industry news, updates, and
          analysis.
          <br /> We cover a range of topics related to expedite delivery,
          including changes in regulations, new technologies, and emerging
          trends.
        </p>
      </div>
      <div className={styles.articles}>
        <div className={styles.article}>
          <div>
            <Image
              src={article1}
              height={250}
              width={360}
              layout="responsive"
              alt="article"
            />
          </div>
          <span>Articles</span>
          <h3>Mastering peer tutoring: Your key to student success</h3>
          <p>May Suemo, 5 May 2023</p>
        </div>
        <div className={styles.article}>
          <div>
            <Image
              src={article2}
              height={250}
              width={360}
              layout="responsive"
              alt="article"
            />
          </div>
          <span>Articles</span>
          <h3>Mastering peer tutoring: Your key to student success</h3>
          <p>May Suemo, 5 May 2023</p>
        </div>
        <div className={styles.article}>
          <div>
            <Image
              src={article3}
              height={250}
              width={360}
              layout="responsive"
              alt="article"
            />
          </div>
          <span>Articles</span>
          <h3>Mastering peer tutoring: Your key to student success</h3>
          <p>May Suemo, 5 May 2023</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default News;
