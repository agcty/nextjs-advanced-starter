import React from "react"

import Home from "src/pages/index"
import { render } from "test/testUtils"

describe("Home page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it("clicking button triggers alert", () => {
    const { getByText } = render(<Home />, {})

    expect(getByText("Copy Template from GitHub").getAttribute("href")).toBe(
      "https://github.com/agcty/nextjs-advanced-starter"
    )
  })
})
