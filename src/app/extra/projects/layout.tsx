
import "@/app/globals.css";

import Header from "@/components/core/header/Header";
import ArticleBody from "@/components/core/articlebody/ArticleBody"

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><Header></Header><ArticleBody>{children}</ArticleBody></>
  );
}
