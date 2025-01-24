
import "@/app/globals.css";

import Header from "@/components/core/header/Header";


export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><Header></Header>{children}</>
  );
}
