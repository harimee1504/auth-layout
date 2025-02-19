import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    console.log('Clerk Publishable Key', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
    return (
        <Component {...pageProps} />
    );
}
