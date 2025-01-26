import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import styles from "./Authorship.module.css";
import "@/app/globals.css";

type Props = { author: string; file: string; date: string };

const parseDate = (dateStr: string): Date => {
    const [day, month, year] = dateStr.split("/").map(Number); // Split and convert to numbers
    return new Date(year, month - 1, day); // Month is zero-based
};

const formatDate = (date: Date): string => {
    return format(date, "d MMMM yyyy");
};

const Authorship = (props: Props) => {
    const imagePath = `/authors/icons/${props.file}.png`;
    const date = parseDate(props.date);
    const dateString = formatDate(date);
    return (
        <div className={styles.container}>
            <Image
                src={imagePath}
                alt=""
                width={36}
                height={36}
                className={styles.icon}
            />
            <div className={styles.info}>
                <span className={styles.author}>{props.author}</span>
                <span className={styles.date}>{dateString}</span>
            </div>
        </div>
    );
};

export default Authorship;
