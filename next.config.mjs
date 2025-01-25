import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeStarryNight from 'rehype-starry-night';
import fauxRemarkEmbedder from '@remark-embedder/core';
import fauxOembedTransformer from '@remark-embedder/transformer-oembed';
import nextMDX from '@next/mdx';

const remarkEmbedder = fauxRemarkEmbedder.default;
const oembedTransformer = fauxOembedTransformer.default;

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
    remarkPlugins: [
      remarkMath,
      [
        remarkEmbedder,
        {
          transformers: [oembedTransformer], // OEmbed transformer for embedding
        },
      ],
    ],
    rehypePlugins: [rehypeKatex, rehypeStarryNight],
  },
})(nextConfig);
