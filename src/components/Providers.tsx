'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import SessionProvider to avoid SSR vendor chunk errors
const SessionProvider = dynamic(
  () => import('next-auth/react').then((mod) => mod.SessionProvider),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
} 