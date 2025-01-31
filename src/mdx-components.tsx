import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import "@/app/globals.css";
import type { MDXComponents } from "mdx/types";
import PuzzleLink from "./components/PuzzleLink";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export function useMDXComponents(other: MDXComponents): MDXComponents {
    return {
        h1: (props: HeadingProps) => <h1 {...props} />,
        h2: (props: HeadingProps) => <h2 {...props} />,
        h3: (props: HeadingProps) => <h3 {...props} />,
        h4: (props: HeadingProps) => <h4 {...props} />,
        p: (props: ParagraphProps) => <p {...props} />,
        ol: (props: ListProps) => (
            <ol
                className="list-decimal pl-5 space-y-2"
                {...props}
            />
        ),
        ul: (props: ListProps) => (
            <ul
                className="list-disc pl-5 space-y-1"
                {...props}
            />
        ),
        li: (props: ListItemProps) => (
            <li
                className="pl-1"
                {...props}
            />
        ),
        em: (props: ComponentPropsWithoutRef<"em">) => <em {...props} />,
        strong: (props: ComponentPropsWithoutRef<"strong">) => <strong {...props} />,
        a: ({ href, children, ...props }: AnchorProps) => {
            if (href?.startsWith("/")) {
                return (
                    <Link
                        href={href}
                        {...props}
                        className="underlineLink"
                    >
                        {children}
                    </Link>
                );
            }
            if (href?.startsWith("#")) {
                return (
                    <a
                        href={href}
                        {...props}
                    >
                        {children}
                    </a>
                );
            }
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {children}
                </a>
            );
        },
        
        Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
            <table>
                <thead>
                    <tr>
                        {data.headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        ),
        blockquote: (props: BlockquoteProps) => (
            <blockquote
                className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
                {...props}
            />
        ),
        PuzzleLink,
        ...other,
    };
}
