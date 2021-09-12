import React from "react"
import { render, screen } from "@testing-library/react"
import About from './about'

describe("About page", () => {
  it("should render the about page with a title", () => {
    render(<About />)

    const title = screen.getByText(
      'About Page'
    )

    expect(title).toBeInTheDocument()
  })
})