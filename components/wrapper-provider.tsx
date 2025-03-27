'use client'

import Wrapper from "@/components/wrapper"
import { ClerkProvider } from "@clerk/clerk-react"

interface DashboardProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: any;
  children: React.ReactNode;
}

export default function Page({
  data,
  children,
}: DashboardProps) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
      <Wrapper data={data}>{children}</Wrapper>
    </ClerkProvider>
  );
}