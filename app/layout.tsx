import type { Metadata } from "next"

import Providers from "./providers"

export const metadata: Metadata = {
  title: "Nextjs app stater",
  description:
    "An app starter for Next.js that includes TypeScript, ChakraUI and all the tools you need to build amazing projects 🔥🤗",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
