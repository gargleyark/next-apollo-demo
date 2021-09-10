import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider as MockMock } from '@apollo/client/testing';
import { MockedProvider } from '@apollo/react-testing';

import Name, { GET_NAME } from './Name';

const mocks = [
  {
    request: {
      query: GET_NAME,
      variables: {
        language: 'english',
      },
    },
    result: {
      data: {
        name: 'Mike',
      },
    },
  },
];

describe('Name component', () => {
  it ('should render a name component with an example name', () => {
    render(
      <MockMock mocks={mocks}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Name />
        </MockedProvider>
      </MockMock>
    );
    
    const nameElement = screen.getByText(/Mike/i);
    expect(nameElement).toBeInTheDocument();
  })
});