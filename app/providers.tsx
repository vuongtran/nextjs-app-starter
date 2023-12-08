"use client"

import { CacheProvider } from "@chakra-ui/next-js"

import { Chakra as ChakraProvider } from "@/lib/components/ChakraUI"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
