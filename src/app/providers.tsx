"use client"; // <-- Important! These are Client Components

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  // useState ensures QueryClient is created once, not on every render
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // Data stays "fresh" for 1 minute
            gcTime: 5 * 60 * 1000, // Cache data for 5 minutes
          },
        },
      }),
  );

  return (
    // React Query Provider - manages server state (API data)
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Devtools - only shows in development, helps debug API calls */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
