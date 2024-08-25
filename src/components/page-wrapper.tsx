import { ReactNode } from 'react';

//Page Wrapper contains the border around the screen(currently bg-zinc-100)
export default function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col space-y-2 flex-grow ">{children}</div>;
}
