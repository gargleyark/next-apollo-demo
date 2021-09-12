import React from "react"
import { render, screen } from "@testing-library/react"
import UserTile from './UserTile'

const mockUser = {
  name: 'bob', email: 'bob@bobbins.com', id: '1', address: {
    street: '1',
    address: 'big street',
    address1: 'dogs',
    address2: 'on skateboards',
    zip: '123456',
    city: 'bigtown',
    country: 'united kingdom',
  }
}

describe("UserTile", () => {
  it("should render the user's details", () => {
    render(<UserTile {...mockUser} />)

    const name = screen.getByText(
      mockUser.name
    )

    const email = screen.getByText(
      mockUser.email
    )

    const country = screen.getByText(
      new RegExp(mockUser.address.country, 'i')
    )

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(country).toBeInTheDocument()
  })
})