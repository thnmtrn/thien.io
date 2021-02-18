import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import MoviesLayout from '@/layouts/movies';
import MDXComponents from '@/components/MDXComponents';

export default function movie({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <MoviesLayout frontMatter={frontMatter}>{content}</MoviesLayout>;
}

export async function getStaticPaths() {
  const movie = await getFiles('movies');

  return {
    paths: movie.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('movies', params.slug);

  return { props: post };
}
