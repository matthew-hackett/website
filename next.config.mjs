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

const handleHTML = (html, info) => {
  const {url, transformer} = info
  if (
    transformer.name === '@remark-embedder/transformer-oembed' ||
    url.includes('youtube.com')
  ) {
    return `<div class="embed-youtube aspect-w-16 aspect-h-9">${html}</div>`
  }
  return html
}

export default nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMath,
      [
        remarkEmbedder,
        {
          transformers: [oembedTransformer], // OEmbed transformer for embedding
          handleHTML: handleHTML
        },
      ],
    ],
    rehypePlugins: [rehypeKatex, rehypeStarryNight],
  },
})(nextConfig);
