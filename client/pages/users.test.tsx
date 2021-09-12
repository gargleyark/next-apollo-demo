import React from "react"
import { render, screen } from "@testing-library/react"
import Users from './users'


jest.mock('@apollo/react-hooks', () => {
  const mockUser = {
    name: 'Mike', email: 'mike@email.com', address: {
      street: '1',
      address: 'big street',
      address1: 'dogs',
      address2: 'on skateboards',
      zip: '123456',
      city: 'bigtown',
      country: 'united kingdom',
    }
  }

  const data = {
    users: [{
      ...mockUser,
      id: '1'
    }, {
      ...mockUser,
      id: '2'
    }, {
      ...mockUser,
      id: '3'
    }]
  }; // put your mock data here
  return {
    __esModule: true,
    useQuery: jest.fn(() => ({ data })),
  };
});

describe("Users page", () => {
  it("should render the users page with a title", () => {
    render(<Users />)

    const title = screen.getByText(
      /Users/
    )

    expect(title).toBeInTheDocument()
  })

  it("should render a list of all users", async () => {
    const { findAllByTestId } = render(<Users />)

    const tiles = await findAllByTestId('user-tile')

    expect(tiles.length).toBe(3)
  })
})