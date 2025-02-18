import Wrapper from "@/components/wrapper";

interface DashboardProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
    data: any;
    children: React.ReactNode;
}

export default function Page({ data, children }: DashboardProps) {
  return (
      <Wrapper data={data}>
        {children}
      </Wrapper>
  );
}