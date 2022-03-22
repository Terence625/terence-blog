import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Terence Tian";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height="50"
            width="50"
            alt={name}
          />
        </a>
      </Link>
      <Link href="/">
        <a className={utilStyles.colorInherit} style={{ textDecoration: "none" }}>
          <h1 className={`${utilStyles.headingLg} ${utilStyles.paddingLeft10px}`}>{name}</h1>
        </a>
      </Link>
    </nav>
  );
}