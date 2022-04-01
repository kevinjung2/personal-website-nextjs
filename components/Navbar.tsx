import React from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.css"

export const Navbar = () => (
    <nav className={styles.navbar}>
        <Link href="/">
            <div className={styles.link}>
                <a>Home</a>
            </div>
        </Link>
        <Link href="/about">
            <div className={styles.link}>
                <a>About</a>
            </div>
        </Link>
        <Link href="/contact">
            <div className={styles.link}>
                <a>Contact Me</a>
            </div>
        </Link>
        <Link href="/projects">
            <div className={styles.link}>
                <a>My Projects</a>
            </div>
        </Link>
    </nav>
)