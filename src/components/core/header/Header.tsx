import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
    return (
        <header className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logoDiv}>
                <Link href="/" className={styles.link}><img
                    className={styles.logo}
                    src="/static/images/logo.svg"
                /></Link>
                </div>
                
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
                                href="/articles"
                                className={styles.link}
                            >
                                <span>
                                    Articles
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/puzzles"
                                className={styles.link}
                            >
                                <span>Puzzles</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
