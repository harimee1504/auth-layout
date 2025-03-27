import Wrapper from "@/components/wrapper";
import { ClerkProvider } from "@clerk/clerk-react";
import { useMemo } from "react";

interface DashboardProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: any;
  publishableKey: string;
  children: React.ReactNode;
}

export default function Page({
  publishableKey,
  data,
  children,
}: DashboardProps) {
  // Memoize the ClerkProvider to prevent unnecessary re-renders
  const clerkProvider = useMemo(() => (
    <ClerkProvider 
      publishableKey={publishableKey}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorBackground: "transparent",
        },
      }}
    >
      <Wrapper data={data}>{children}</Wrapper>
    </ClerkProvider>
  ), [publishableKey, data, children]);

  return clerkProvider;
}