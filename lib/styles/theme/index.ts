import { extendTheme } from "@chakra-ui/react"

import { config } from "./config"
import { fonts } from "./fonts"

export const theme = extendTheme({
  fonts,
  config,
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
})
