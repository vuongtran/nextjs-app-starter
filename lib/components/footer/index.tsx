"use client"

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      position={"fixed"}
      bottom={0}
      width={"100%"}
    >
      <Container
        h={16}
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Text>© {new Date().getFullYear()} Build with 💚</Text>
      </Container>
    </Box>
  )
}
