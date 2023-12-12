import { render } from "@testing-library/react"
import { expect, test } from "vitest"

import Content from "./index"

test("Content component render", () => {
  expect(render(<Content />)).toMatchSnapshot()
})
