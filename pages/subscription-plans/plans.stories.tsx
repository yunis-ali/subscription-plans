import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Plans } from './plans.component';

export default {
  title: 'Subscription Plans / Plans',
  component: Plans,
  argTypes: { },
} as Meta;

const Template: Story = (args) => <Plans {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = { };