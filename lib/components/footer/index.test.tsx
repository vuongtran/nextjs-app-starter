import { render } from "@testing-library/react"
import { expect, test } from "vitest"

import Footer from "./index"

test("Footer component render", () => {
  expect(render(<Footer />)).toMatchSnapshot()
})
