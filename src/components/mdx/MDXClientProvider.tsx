"use client"; // Required for Context API

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components";

export default function MDXClientProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={useMDXComponents({})}>{children}</MDXProvider>;
}