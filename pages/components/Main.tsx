import { ReactNode } from "react";


interface MainProps {
  children: ReactNode;
}
export const Main = ({ children }: MainProps) => {
  return (
  <main className="flex bg-lime-300 grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
    {children}
  </main>
  );
}; 
