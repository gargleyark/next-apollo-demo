import React from "react";
import { render, screen } from "@testing-library/react";
import Name from './Name'

jest.mock('@apollo/react-hooks', () => {

  const data = { name: 'dogs on skateboards' }; // put your mock data here
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data })),
  };
});

describe("Name", () => {
  it("should render the heading", () => {
    render(<Name />);

    const heading = screen.getByText(
      /dogs on skateboards/i
    );

    expect(heading).toBeInTheDocument();
  });
});