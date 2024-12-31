'use client';

import { createContext, useContext, ReactNode } from 'react';

interface CursorContextType {
  // Add any cursor-related state/methods if needed
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
  return (
    <CursorContext.Provider value={{}}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
