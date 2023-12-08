import { Inter, Rubik } from "next/font/google"
import type { DeepPartial, Theme } from "@chakra-ui/react"

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

export const fonts: DeepPartial<Theme["fonts"]> = {
  heading: rubik.style.fontFamily,
  body: rubik.style.fontFamily,
}
