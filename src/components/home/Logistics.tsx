import styles from "@/styles/home/logistics.module.scss";
import Image from "next/image";
import logistics1 from "@/assets/images/home/logistics1.png";
import logistics2 from "@/assets/images/home/logistics2.png";
import logistics3 from "@/assets/images/home/logistics3.png";
import logistics4 from "@/assets/images/home/logistics4.png";

const Logistics = () => {
  return (
    <section className={`${styles.section} section_padding`}>
      <div className={styles.title}>
        <h2>Delivered as promised!</h2>
        <h3>leave the logistics to us</h3>
      </div>
      <div className={styles.itemWraper}>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3>Services</h3>
            <p>
              Our team of logistics experts specializes in the safe and
              efficient transportation of goods utilizing cargo vans, box
              trucks, and sprinter vans. Our services are fully customizable to
              meet the unique needs of your business, ensuring that your
              shipments arrive at their destination quickly and securely.
            </p>
            <span>Learn more </span>
          </div>
          <div className={styles.imageWraper}>
            <Image
              src={logistics1}
              height={278}
              width={435}
              layout="responsive"
              alt="logistics"
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3>Join Our Team - For Drivers</h3>
            <p>
              As a driver for our expedite delivery service, you will play a
              critical role in our success and have the opportunity to work with
              a team of logistics experts committed to providing exceptional
              service to our clients. Also, we provide the most competitive
              $/mile offers on a market, contact us for more information.
            </p>
            <span>Learn more </span>
          </div>
          <div className={styles.imageWraper}>
            <Image
              src={logistics2}
              height={278}
              width={435}
              layout="responsive"
              alt="logistics"
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3>Tailored Solutions</h3>
            <p>
              We take pride in our diverse fleet of vehicles, which includes
              different Box Trucks, Cargo Vans, Mercedes Sprinter Vans. We
              believe that having a range of vehicle options allows us to meet
              the unique needs of our clients and ensures that we can transport
              goods of all shapes and sizes across the United States quickly and
              efficiently.
            </p>
            <span>Learn more </span>
          </div>
          <div className={styles.imageWraper}>
            <Image
              src={logistics3}
              height={278}
              width={435}
              layout="responsive"
              alt="logistics"
            />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h3>Fleet for customer</h3>
            <p>
              Dear customer! We care about your freight as about our own child
              or loved pet. When you give a load to us - you can be shure that
              we will do everything possible to protect you and your customer
              from any headache that can occure while we take care about your
              freight.
            </p>
            <span>Learn more </span>
          </div>
          <div className={styles.imageWraper}>
            <Image
              src={logistics4}
              height={278}
              width={435}
              layout="responsive"
              alt="logistics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
