"use client"

import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { LuGithub } from "react-icons/lu"

export default function Content() {
  return (
    <Box px={4} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container
        minHeight={"calc(100vh - 64px)"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"flex-start"}
        align={"center"}
      >
        <Text fontSize="4xl" as="b" textAlign={"center"}>
          Hi friends 👋
        </Text>
        <Text fontSize="lg" textAlign={"center"}>
          An app starter for Next.js that includes TypeScript, ChakraUI and all
          the tools you need to build amazing projects 🔥🤗
        </Text>
        <Link href="https://github.com/vuongtran/nextjs-app-starter" isExternal>
          <Button
            size={"lg"}
            aria-label="Github"
            leftIcon={<LuGithub />}
            variant="solid"
          >
            Github
          </Button>
        </Link>
      </Container>
    </Box>
  )
}
