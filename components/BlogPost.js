import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg hover:text-green-400 md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100 dark:hover:text-indigo-400">
              {title}
            </h4>
            <p className="text-blue-400 text-left md:text-right w-32 mb-4 md:mb-0">
              {publishedAt}
            </p>
            <p className="text-green-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {`${views ? format(views) : '–––'} views`}
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
