import { ReactNode } from 'react';

//Page Wrapper contains the border around the screen(currently bg-zinc-100)
export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 flex-grow pb-4">
      {children}
    </div>
  );
}
