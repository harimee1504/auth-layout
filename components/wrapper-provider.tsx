import Wrapper from "@/components/wrapper";
import { ClerkProvider } from "@clerk/clerk-react";

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
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Wrapper data={data}>{children}</Wrapper>
    </ClerkProvider>
  );
}