import type { AppProps } from 'next/app';

import '../app/global.css';
import Navbar from '@/components/shared/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}
