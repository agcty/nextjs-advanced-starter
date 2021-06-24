/**
 * @jest-environment jsdom
 */

import React from "react"

import { render, screen } from "@testing-library/react"

import Index from "../src/pages/index"

// this is not a very good test but it just shows that testing works
it("Link with that points to github exists", () => {
  render(<Index />, {})

  expect(screen.getByText("Copy Template from GitHub")).toHaveAttribute(
    "href",
    "https://github.com/agcty/nextjs-advanced-starter"
  )
})
