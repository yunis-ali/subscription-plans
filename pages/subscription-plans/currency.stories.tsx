import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Currency } from './currency.component';

export default {
  title: 'Subscription Plans / Currency',
  component: Currency,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <Currency {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = { 
  label: "Currency" 
};