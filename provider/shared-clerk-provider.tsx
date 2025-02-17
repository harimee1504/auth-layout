import { ClerkProvider } from '@clerk/clerk-react';
interface SharedClerkProviderProps {
    publishableKey: string;
    children: React.ReactNode;
}

export const SharedClerkProvider = ({ publishableKey, children }: SharedClerkProviderProps) => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}

export default SharedClerkProvider;