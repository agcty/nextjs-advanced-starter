import { render } from "@testing-library/react"

import Home from "../src/pages/index"

it("renders homepage unchanged", () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
