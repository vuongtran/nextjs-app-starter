import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManager,
} from "@chakra-ui/react"

import { theme } from "@/lib/styles/theme/index"

type ChakraProps = {
  children: React.ReactNode
}

export function Chakra({ children }: ChakraProps) {
  return (
    <>
      <ColorModeScript
        initialColorMode={theme.config?.initialColorMode}
        type="cookie"
      />
      <ChakraProvider colorModeManager={cookieStorageManager} theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}
