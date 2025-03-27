import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const ClerkProviderClient = dynamic(
    () => import('@clerk/clerk-react').then((mod) => {
        const { ClerkProvider } = mod;
        const ClerkProviderWrapper = ({ children }: { children: React.ReactNode }) => (
            <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
                {children}
            </ClerkProvider>
        );
        ClerkProviderWrapper.displayName = 'ClerkProviderWrapper';
        return ClerkProviderWrapper;
    }),
    { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ClerkProviderClient>
            <Component {...pageProps} />
        </ClerkProviderClient>
    );
}
