'use client'

import { NextUIProvider } from "@nextui-org/system"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default Providers