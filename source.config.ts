import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: (v) => [[rehypeKatex, { strict: false }], ...v],
  },
  lastModifiedTime: 'git',
});
