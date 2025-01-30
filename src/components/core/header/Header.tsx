"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";



type Props = {};

export default function Header({}: Props) {

    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link
                        href="/"
                        className="btn btn-ghost"
                    >
                        <img
                            className={styles.logo}
                            src="/static/images/logo.svg"
                        />
                    </Link>
  </div>
  <div className="flex-none p">
    <ul className="menu menu-horizontal">
      <li><Link href="/">Projects</Link></li>
      <li>
        <details>
          <summary>Articles</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link href="/">Math</Link></li>
            <li><Link href="/">Computer Science</Link></li>
          </ul>
        </details>
      </li>
      {/*
      <li>
        <details>
          <summary>Puzzles</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link href="/">Link 1</Link></li>
            <li><Link href="/">Link 1</Link></li>
          </ul>
        </details>
      </li>
      */}
    </ul>
  </div>
</div>
    )
    /*
    const [menuOn, setMenuOn] = useState(false);
    const [menuClass, setMenuClass] = useState("");
    const [iconClass, setIconClass] = useState("");
    const toggleMenu = () => {
        setMenuOn(!menuOn);
    };

    useEffect(() => {
        setMenuClass(menuOn ? styles.showMenu : "");
        setIconClass(menuOn ? styles.showIcon : "");
    }, [menuOn]);

    return (
        <>
        <div className={styles.pad}></div>
        <header className={styles.header}>
            <nav className={styles.nav + " " + styles.container}>
                <div className={styles.navData}>
                    <Link
                        href="/"
                        className={styles.navLogo}
                    >
                        <img
                            className={styles.logo}
                            src="/static/images/logo.svg"
                        />
                    </Link>

                    <div
                        className={`${styles.navToggle} ${iconClass}`}
                        onClick={toggleMenu}
                    >
                        <img
                            className={styles.navBurger}
                            src="/static/images/menu-line.svg"
                        ></img>
                        <img
                            className={styles.navClose}
                            src="/static/images/close-line.svg"
                        ></img>
                    </div>
                </div>
                <div className={`${styles.navMenu} ${menuClass}`}>
                    <ul className={styles.navList}>
                        <li>
                            <Link
                                href="/"
                                className={styles.navLink}
                            >
                                Home
                            </Link>
                        </li>

                        <li className={styles.dropdownItem}>
                            <div className={styles.navLink}>
                                Blog <img className={styles.dropdownArrow} src="/static/images/arrow-down-s-line.svg"></img>
                            </div>

                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.dropdownItem}>
                            <div className={styles.navLink}>
                                Puzzles <img className={styles.dropdownArrow} src="/static/images/arrow-down-s-line.svg"></img>
                            </div>
                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={styles.dropdownLink}
                                    >
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    );
    */
}
