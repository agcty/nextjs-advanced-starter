import React from "react"

import { render } from "@testing-library/react"

import Index from "../src/pages/index"

// test("renders deploy link", async () => {
//   render(<Index />)

//   const listNode = await waitFor(() => screen.getByText("list"))
//   expect(screen.findByText("Copy Template from GitHub")).toBeInTheDocument()
// })

it("clicking button triggers alert", () => {
  const { getByText } = render(<Index />, {})

  expect(getByText("Copy Template from GitHub")).toHaveAttribute(
    "href",
    "https://github.com/agcty/nextjs-advanced-starter"
  )
})
