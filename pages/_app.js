import '@/styles/global.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';

import MDXComponents from '@/components/MDXComponents';
import { useAnalytics } from '@/lib/analytics';

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
