import Link from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '@/lib/fetcher';

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`} >
      <a className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 py-2 pt-4 mb-4 border-opacity-20">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row sm:flex sm:flex-flow-row justify-between">
            <h4 className="text-lg hover:text-cyan-400 md:text-xl font-medium mb-2 w-full text-gray-900  dark:text-gray-100 dark:hover:text-cyan-400">
              {title}
            </h4>
            <div className='flex sm:flex-row'>

            <p className="text-gray-400  dark:text-gray-100 text-left md:text-right w-32 mb-4 md:mb-0">
              {publishedAt}
            </p>
            <p className="text-gray-600 dark:text-gray-100 text-right md:text-right w-32 mb-4 md:mb-0">
              {`${views ? format(views) : '–––'} views`}
            </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
