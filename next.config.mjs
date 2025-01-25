import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStarryNight from 'rehype-starry-night';
import createMDX from '@next/mdx'
import nextMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    mdxRs: false,
  },
  reactStrictMode: true,
};

export default nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeStarryNight],
  },
})(nextConfig);

/*
// Use MDX configuration with Next.js config
export default nextConfig;
*/