"use client"

import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Container
        as={Stack}
        h={16}
        maxW={"6xl"}
        py={4}
        direction={"row"}
        spacing={4}
        justify={"space-between"}
        align={"center"}
      >
        <HStack>
          <Text as="b">Nextjs App</Text>
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Container>
    </Box>
  )
}
