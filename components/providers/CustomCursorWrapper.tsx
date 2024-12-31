'use client';

import dynamic from 'next/dynamic';

const DynamicCustomCursor = dynamic(
  () => import('@/components/CustomCursor'),
  { 
    ssr: false,
    loading: () => null
  }
);

export function CustomCursorWrapper() {
  return (
    <div suppressHydrationWarning>
      <DynamicCustomCursor />
    </div>
  );
}
