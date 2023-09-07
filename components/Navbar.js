import React from 'react';
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";


const Navbar = () => {
  return (
    <div>
       <nav className={styles.navbar}>
        <div className={styles.navlist}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;