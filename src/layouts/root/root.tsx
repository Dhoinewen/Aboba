'use client';

import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type LayoutProps = {
  children: ReactNode;
};

// Create use-query client
const queryClient = new QueryClient();

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
