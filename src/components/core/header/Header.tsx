import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className={styles.container}>
            <div className={styles.navbar}>
                <Link href="/" className={styles.link}><img
                    className={styles.logo}
                    src="images/logo.svg"
                /></Link>
                
                <nav>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className={styles.link}
                            ><span>Home</span>
                                
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className={styles.link}
                            >
                                <span>
                                    About
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className={styles.link}
                            >
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
