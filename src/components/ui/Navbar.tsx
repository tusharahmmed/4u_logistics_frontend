import React, {useEffect, useState} from "react";
import styles from "@/styles/ui/navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import {isLoggedIn} from "@/services/auth.service";

const Navbar = () => {
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = isLoggedIn();
    setHasUser(isUserLoggedIn);
  }, [hasUser]);

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
          <li>
            <Link href="contact-us">Contact-us</Link>
          </li>
          {/* <li>
            <a href="">News</a>
          </li> */}
        </ul>
        <div className={styles.action}>
          {hasUser ? (
            <Link href="profile">
              <button>Dashboard</button>
            </Link>
          ) : (
            <Link href="login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
