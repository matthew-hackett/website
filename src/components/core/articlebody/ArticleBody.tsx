
import "@/app/globals.css";
import styles from "./ArticleBody.module.css";

export default function ArticleBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.flexBox}>
        <div className={styles.articleBody}>{children}</div>
    </div>
  );
}
