import { render } from "@testing-library/react"
import { expect, test } from "vitest"

import Nav from "./index"

test("Nav component render", () => {
  expect(render(<Nav />)).toMatchSnapshot()
})
