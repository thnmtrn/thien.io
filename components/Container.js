import Head from 'next/head';
import headerNavLinks from '@/data/headerNavLinks'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from './Link'

import Footer from '@/components/Footer';
import MobileNav from './MobileNav';
import Navbar from '@/components/Navbar';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Thien Tran – Javascript enthusiast.',
    description: `Front-end developer, JavaScript enthusiast.`,
    image: 'https://thientran.me/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-gray-900 font-sans dark:text-gray-50">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://thientran.me${router.asPath}`} />
        <link rel="canonical" href={`https://thientran.me${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Thien Tran" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thnmtrn" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
        <Navbar/>
      
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-gray-900 px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
