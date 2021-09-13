import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserTile from './';

export default {
  title: 'Components/User Tile',
  component: UserTile,
} as ComponentMeta<typeof UserTile>;

const Template: ComponentStory<typeof UserTile> = (args) => <UserTile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'bob', email: 'bob@bobbins.com', id: '1', address: {
    street: '1',
    address: 'big street',
    address1: 'dogs',
    address2: 'on skateboards',
    zip: '123456',
    city: 'bigtown',
    country: 'united kingdom',
  }
};
