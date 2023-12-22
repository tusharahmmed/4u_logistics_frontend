import React from "react";
import styles from "@/styles/ui/navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={`${styles.header} section_padding`}>
      <div className="logo">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            // layout="responsive"
            height={32}
            width={164}
          />
        </Link>
      </div>
      <div className={styles.nav}>
        <button>Menu</button>
        <ul>
          <li>
            <Link href="work-with-us">About us</Link>
          </li>
          {/* <li>
            <a href="">Services</a>
          </li> */}
          <li>
            <Link href="for-drivers">For drivers</Link>
          </li>
          <li>
            <a href="">Fleet</a>
          </li>
          <li>
            <Link href="request-a-quote">Request a quote</Link>
          </li>
          {/* <li>
            <a href="">News</a>
          </li> */}
        </ul>
        <div className={styles.action}>
          <Link href="contact-us">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
