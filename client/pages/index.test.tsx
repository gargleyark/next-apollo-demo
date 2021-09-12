import React from "react"
import { render, screen } from "@testing-library/react"
import Index from './index'

jest.mock('@apollo/react-hooks', () => {

  const data = { name: 'dogs on skateboards' }; // put your mock data here
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data })),
  };
});

describe("Index page", () => {
  it("should render the index page with a title", () => {
    render(<Index />)

    const title = screen.getByText(
      /Welcome/
    )

    expect(title).toBeInTheDocument()
  })
})